<?php session_start(); $_SESSION['active']=true; ?>
<html lang="en">
	<head>
		<title>ixukw</title>
		<link href="dazzler.css" rel="stylesheet">
	</head>
	<body>
		<div class="navbar">
			<img src="mainpageimg.png" id="atdplogo" height="37" width="212" alt="ixukw">
			<div class="navbar1">
				<a href="">Info</a>
				<a href="expressions-calculator">Calculator Project</a>
				<a href="webCrawler">File-Crawler</a>
				<!--<a href="">ATDP</a>
				<a href=""></a>
				<a href=""></a>
				<a href=""></a>-->
			</div>
		</div>
		<div class="mainpage">
			<h1>File Crawler</h1>
			<hr>
			<p>The original intent of this project was to create an algorithm which scans <i>n</i> files for links to other files, and then construct a graph of these connections. I've created a web version of this original project.</p>
			<div class="webContent">
				<form class="uF" action="upload.php" method="post" enctype="multipart/form-data">
					<input type="file" name="fileUpload">
					<input type="submit" value="Upload File" name="submit">
				</form>
			</div>
			<p>The original .java files can be found here:</p>
			<hr>
			<i>External Links:<br></i>
			<p><a href="https://www.openprocessing.org/user/157740">OpenProcessing</a></p>
			<p><a href="https://github.com/ixukw">GitHub Profile</a></p>
			<p><a href="https://atdpsites.berkeley.edu/ixu">ATDPSites Page</a></p>
			<p><a href=""></a></p>
			<footer>
				<p class="rreserve">Copyright 2019 Inan Xu</p>
				<p class="rreserve">Hosted using GitHub Pages</p>
			</footer>
		</div>
	</body>
</html>
