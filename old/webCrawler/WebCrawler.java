import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import java.io.File;
import java.util.ArrayList;

public class WebCrawler {
    private Graph<File> master;
    private File[] files;
    public WebCrawler(String[] input) {
        files = new File[input.length];
        for (int i=0; i<files.length; i++) {
            files[i] = new File(input[i]);
        }
        master = new Graph<>(files);
    }
    private NodeList[] parseFiles() {
        NodeList[] output = new NodeList[files.length];
        try {
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            for (int i=0; i<output.length; i++) {
                output[i] = dBuilder.parse(files[i]).getElementsByTagName("a");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return output;
    }
    private Graph<File> constructGraph(NodeList[] elements) {
        ArrayList<GraphNode<File>> allVertices = master.getVertices();
        for (int i=0; i<elements.length; i++) {
            for (int j=0; j<elements[i].getLength(); j++) {
                Element temp = (Element) elements[i].item(j);
                File test;
                if (temp.getAttribute("href").contains("../") || temp.getAttribute("href").contains("..\\")) {
                    test = new File(files[i].getParentFile().getAbsolutePath(), temp.getAttribute("href"));
                } else {
                    test = new File(temp.getAttribute("href"));
                }
                for (int k=0; k<allVertices.size(); k++) {
                    try {
                        if (allVertices.get(k).getKey().getAbsolutePath().equals(test.getCanonicalPath())) {
                            try {
                                master.addEdge(i, k, master.getVertex(i).getWeight(master.getVertex(k)) + 1);
                            } catch (Exception e) {
                                master.addEdge(i, k);
                            }
                        }
                    } catch (Exception e) {
                        System.out.println("This line should never appear in the console window. If it does, check paths for errors, otherwise dock points.\n" + e);
                    }
                }
            }
        }
        return master;
    }
    public void printGraph() {
        System.out.println(makeGraph());
    }
    public Graph<File> makeGraph() {
        return constructGraph(parseFiles());
    }
    public static void main(String[] args) {
        WebCrawler test = new WebCrawler(args);
        test.printGraph();
    }
}
