import './styles/App.css';
import './styles/pygment_trac.css'

function App() {
  return (
    <div className="App wrapper">
      <header>
        <h1>Inan Xu &mdash; <span>许忆南</span></h1>
        <img alt="Inan Xu Profile" src="./profile_img.jpg" />
        <p><a href="mailto:inxu@ucsc.edu">inxu@ucsc.edu</a></p>
        <p><a href="./resume.pdf">CV</a><br/>Updated: Jan 2024</p>
        <p className="socialLinks">
          <a href="https://github.com/ixukw"><img alt="GitHub" height="24" width="24" src="https://cdn.simpleicons.org/github/black"/></a>
          <a href="https://linkedin.com/in/inanxu/"><img alt="LinkedIn" height="24" width="24" src="https://cdn.simpleicons.org/linkedin/black"/></a>
        </p>
        
        
      </header>
      <section>

        <p>
          Hello! I'm a recent computer science graduate seeking industry positions. My primary interests are in computer vision and applied ML/AI for HCI. 
          I love to create accessible consumer-facing products that addresses real-world problems.
        </p>

        <p>
          I completed my Bachelor's in Computer Science at UC Santa Cruz in June 2023.
          I was an undergraduate researcher at <a href="https://www.misfit-lab.com/">MISFIT Lab</a> with <a href="https://kateringland.com/">Prof.&nbsp;Kate&nbsp;Ringland</a> and <a href="https://scholar.google.com/citations?user=K6vkCB0AAAAJ&hl=en">Kevin&nbsp;Weaverwax</a>,
          where I worked with other undergrads to create an accessible platform for crowdsourcing alternate image text
          and conducted studies analyzing social crowd navigation to design accessible human-friendly robot communication.
        </p>

        <p>
          In 2022 and 2023, I was a research intern with Prof. Yang Wang at the <a href="https://inclusiveprivacy.org/">Inclusive&nbsp;Privacy&nbsp;Lab</a> at the University of Illinois, Urbana-Champaign.
          I worked with other researchers to design and create a disability-first dataset showing private visual information for the training of AI models.
          The dataset consists 728 images/videos and is the first of its kind to contain images directly captured by the blind.
          We followed up with an app demo using prompt-based obfuscation for uploaded images, built with <a href="https://nextjs.org/">Next.js</a> and <a href="https://github.com/ttengwang/Caption-Anything">Caption Anything</a>.
          Our <a href="https://dl.acm.org/doi/abs/10.1145/3544548.3580922">paper</a> on our dataset findings was accepted into CHI 2023, with another pending review into CHI 2024.
        </p>

        <p>
          I am also a developer at <a href="https://pathfinder.fyi">PathFinder</a>, an app for finding relevant career skills based on job postings and interviews from industry experts.
          Our app is targeted toward young undergraduates looking to specialize within their careers.
          Recently, we've been integrating LLMs into our application for simple, intuitive search.
        </p>
        
        <p>
          I currently am in the Bay Area. I love hiking and asian cooking.
        </p>

        <h2>Publications</h2>

        <p>
          <a href="https://dl.acm.org/doi/abs/10.1145/3544548.3580922">Disability-First Design and Creation of A Dataset Showing Private Visual Information Collected With People Who Are Blind.</a> CHI2023.
          <br/><em>T. Sharma, A. Stangl, L. Zhang, Y. Tseng, I. Xu, L. Findlater, D. Gurari, Y. Wang.</em>
        </p>

        <h2>Projects</h2>

        <p>
          <strong>YouTube Comment Downloader</strong> &mdash; Downloading mass YouTube comments is time-consuming and reaches API limits.
          This tool helps you manage Google Data API limits to download 50k+ YouTube comments easily. 
          <br/><em><a href="https://ixukw.github.io/ytcomments">ixukw.github.io/ytcomments</a></em>
        </p>
        <p>
          <strong>NoSight</strong> &mdash; Developed at CalHacks to upscale low resolution lecture images for the vision impaired. Designed to work in real-time with an everyday camera. Written in TensorFlow and React. 
        </p>

        <h3>Ongoing</h3>

        <p>
          <strong>Eye Segmentation</strong> &mdash; Eye segmentation can be costly. This project aims to implement real-time semantic segmentation for eye tracking using ordinary laptop cameras.
        </p>
        <p>
          <strong>Automatic Video Editing</strong> &mdash; Traditional editing of large chunks of footage require noting timestamps or watching the playback for useful information.
          Using audio algorithms, ML, and FFmpeg, long video broadcasts can be auto-cut into relevant clips for faster review.
        </p>

        <p><em>A full list is available <a href="https://ixukw.github.io/projects">here</a></em>.</p>
      </section>
      <footer>
        
        <p><small>Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
      </footer>
    </div>
  );
}

export default App;
