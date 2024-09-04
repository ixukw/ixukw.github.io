import './styles/App.css';
import './styles/pygment_trac.css'

function App() {
  const projects = [
    
    {
      title: `Programmable Cards`,
      desc: `
      Card games like Balatro (a poker game but with modifiers; for example, flushes are worth double) involve hundreds of lines of manual branch logic for each custom card.
      This card system for tabletop games allows the creation of programmable modifiers before and during runtime to avoid this.
      (Work in progress)`,
      tech: `TypeScript, Next.js`,
      link: `https://github.com/ixukw/deckbuilder-roguelikes`,
    },
    {
      title: `Video Mosaics`,
      desc: `
      Long segments of video often include repeated or similar frames. For example, videos of games may display the word "Victory" numerous times.
      How many such occurrences exist?
      Given a frame and a batch of videos, this tool compiles similar frame segments together into one single mosaic for entertainment.`,
      tech: `Python, FFmpeg, OpenCV`,
      link: `https://github.com/ixukw/video-scripts/tree/main/ultimatum_mosaic`,
    },
    {
      title: `NoSight`,
      desc: `
      Developed at CalHacks to upscale low resolution lecture images for the vision impaired.
      Designed to work in real-time with an everyday camera.`,
      tech: `Tensorflow, Google Cloud, React`,
      link: `https://github.com/edwardneo/nosight-web`,
    },
    {
      title: `Multi-peer WebRTC Network`,
      desc: `
      Multi-peer WebRTC Network that uses one client as the host-client for other connections.
      Only utilizes optional signalling server during connection setup for ICE candidates, or manual copy-paste.`,
      tech: `JavaScript`,
      link: `https://github.com/ixukw/multi-peer-webrtc`,
    },
    {
      title: 'YouTube Comment Downloader',
      desc: `
      Downloading mass YouTube comments is time-consuming and reaches API limits.
      Given a playlist and YouTube API key, this tool manages Google Data API limits to download 50k+ YouTube comments easily.`,
      tech: `JavaScript, Google APIs`,
      link: `https://ixukw.github.io/ytcomments`,
    },
    {
      title: `GPT with RAG`,
      desc: `Retrieval Augmented Generation (RAG) demo for indexing uploaded files for GPT to search.`,
      tech: `Pinecone, OpenAI API, Next.js`,
      link: `https://github.com/ixukw/ai-assistant`,
    },
    {
      title: `TERBo Visualization`,
      desc: `Hierarchical Edge Bundling visualization for TERBo (Tech Ethics Review Board) ethical values using d3.js.
      Visit the Center for Applied Values & Ethics in Advancing Technology (CAVEAT) Group at UCSC for more information.`,
      tech: `d3.js`,
      link: `https://github.com/dmitriusagoston/TERBo-Visualization`,
    },
    {
      title: `NameMC Image Formatter`,
      desc: `Splits a 24x72 Minecraft skin into 27 squares for display on a NameMC profile.`,
      tech: `JavaScript`,
      link: `https://github.com/ixukw/namemc-img-edit`,
    },
    
    /*
    {
      title: ``,
      desc: ``,
      tech: ``,
      link: ``,
    },
    */
  ];

  return (
    <div className="App wrapper">
      <header>
        <h1>Inan Xu &mdash; <span>许忆南</span></h1>
        <img alt="Inan Xu Profile" src="./profile_img.jpg" />
        <p><a href="mailto:inxu@ucsd.edu">inxu@ucsd.edu</a></p>
        <p><a href="./resume.pdf">Resume</a><br/>Updated: Sep 2024</p>
        <p className="socialLinks">
          <a href="https://github.com/ixukw"><img alt="GitHub" height="24" width="24" src="https://cdn.simpleicons.org/github/black"/></a>
          <a href="https://linkedin.com/in/inanxu/"><img alt="LinkedIn" height="24" width="24" src="https://cdn.simpleicons.org/linkedin/black"/></a>
        </p>
      </header>
      <section>

        <p>
          Hi! I'm a first-year CSE Masters Student at UC San Diego.
        </p>

        <p>
          I completed my Bachelor's in Computer Science at UC Santa Cruz in June 2023.
          I was an undergraduate researcher at <a href="https://www.misfit-lab.com/">MISFIT Lab</a> with <a href="https://kateringland.com/">Prof.&nbsp;Kate&nbsp;Ringland</a> and <a href="https://scholar.google.com/citations?user=K6vkCB0AAAAJ&hl=en">Kevin&nbsp;Weaverwax</a>,
          where I worked with other undergrads to design and create an accessible platform for crowdsourcing alternate image text
          and conducted studies analyzing social crowd navigation to design accessible human-friendly robot communication.
        </p>

        <p>
          I was also a research intern with Prof. Yang Wang at the <a href="https://inclusiveprivacy.org/">Inclusive&nbsp;Privacy&nbsp;Lab</a> at the University of Illinois, Urbana-Champaign.
          I worked with other researchers to design and create a disability-first dataset showing private visual information for the training of AI models.
          The dataset consists 728 images/videos and is the first of its kind to contain images directly captured by the blind.
          We followed up with an app demo using prompt-based obfuscation for uploaded images, built with <a href="https://nextjs.org/">Next.js</a> and <a href="https://github.com/ttengwang/Caption-Anything">Caption Anything</a>.
          Our <a href="https://dl.acm.org/doi/abs/10.1145/3544548.3580922">paper</a> on our dataset findings was accepted into CHI '23, and another into CHI '24 on our usability results.
        </p>

        <p>
          I am also a developer at <a href="https://pathfinder.fyi">pathfinder.fyi</a>, an AI mentorship tool matching members of smaller communities together.
          Our focus is toward early-career individuals seeking advice (i.e. "What skills are in demand"),
          leveraging AI to answer questions using data pulled from our set of "Ask Me Anything" style interviews and other job data.
        </p>
        
        <p>
          I enjoy playing and creating puzzle games, cooking, and hiking views.
        </p>

        <h2>Publications</h2>

        <p>
          <a href="https://dl.acm.org/doi/10.1145/3613904.3642713">Designing Accessible Obfuscation Support for Blind Individuals' Visual Privacy Management.</a> CHI '24.
          <br/><em>L. Zhang, A. Stangl, T. Sharma, Y. Tseng, <strong>I. Xu</strong>, D. Gurari, Y. Wang, L. Findlater</em>
        </p>

        <p>
          <a href="https://dl.acm.org/doi/abs/10.1145/3544548.3580922">Disability-First Design and Creation of A Dataset Showing Private Visual Information Collected With People Who Are Blind.</a> CHI '23.
          <br/><em>T. Sharma, A. Stangl, L. Zhang, Y. Tseng, <strong>I. Xu</strong>, L. Findlater, D. Gurari, Y. Wang.</em>
        </p>

        <h2>Personal Projects</h2>

        {projects.map(p => <p>
          <strong>{p.title}</strong> <br/>
          {p.desc}
          <br/><em>{p.tech}</em> &mdash; <em><a href={p.link}>Link</a></em>
        </p>)}
        
        {/*<p><em>A full list is available <a href="https://ixukw.github.io/projects">here</a></em>.</p>*/}
      </section>
      <footer>
        <p><small>Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
      </footer>
    </div>
  );
}

export default App;
