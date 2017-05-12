<!DOCTYPE html>
<html>
	<head>
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'>
		<title>Note di rilascio | Undertale Spaghetti Project</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="theme-color" content="#000000">
		<meta name="keywords" content="Undertale, undertaleita, Undertalia, Traduzione, undertale in italiano, italiana, patch ita, Undertale Spaghetti, Spaghetti, Undertale patch in italiano, undertale traduzione italiana">
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=no, maximum-scale=1.0">
		<meta http-equiv="content-language" content="it" />
		<meta name="description" content="Note di rilascio di Undertale Spaghetti Project.">
		<link rel="canonical" href="http://undertaleita.net/release-notes" />
		<link rel="icon" href="/images/favicon.ico" />
		<meta property=og:description content="Note di rilascio di Undertale Spaghetti Project.">
		<meta property=og:locale content="it_IT">
		<meta property=og:site_name content="Undertale Spaghetti Project">
		
		<style>
			body {
				font-family: 'Open Sans', Open Sans, Segoe UI, Roboto, Calibri, Arial;
				background-color: black;
				color: white;
				margin: 0px;
				font-size: 11pt;
			}
			
			.container {
				width: 100vw;
				height: 100vh;
			}
			
			.versionblock:nth-child(2n+1) {
				background-color: white;
				color: black;
			}
			
			.versionblock:nth-child(2n) {
				background-color: black;
				color: white;
			}
			
			.versionblock {
				padding-top: 20px;
				padding-bottom: 30px;
				padding-left: 10vw;
				padding-right: 10vw;
			}
			
			.releasenumber {
				font-size: 20pt;
			}
			
			.bugstitle {
				font-size: 15pt;
				padding-top: 10px;
			}
			
			.bugstitle::before {
				content: "PROBLEMI:";
			}
			
			.bug {
				font-size: 10pt;
				padding-left: 10px;
				margin-bottom: 10px;
			}
			
			.bug::before {
				content: "• ";
			}
			
			.description {
				
			}
			
			.altro {
				margin-bottom: 15px;
				font-size: 10pt;
				text-decoration: underline;
			}
		</style>
	</head>
	<body>
			<?php
				$handle = fopen("releasenotes.txt", "r");
				if ($handle) {
					$data = fread($handle, filesize("releasenotes.txt"));
					fclose($handle);
				}
				$data = substr($data,1,strlen($data)-1);
				$content = split("\n@", $data);
				
				if (count($content) %2 != 0) {
					echo "
					<style>
						body {
							background-color: white;
							color: black;
						}
					</style>
					";
				}
				
				echo '<div class="container">';
				
				foreach($content as $versionblock) {
					$releasenumber = "Versione ".split("\n", $versionblock)[0];
					$description = "";
					$bugs = array();
					$altro = array();
					foreach(split("\n", $versionblock) as $line) {
						if (strlen($line) > 1 && substr($line, 0, 1) === "[") {
							$description = $description.substr($line,1,strlen($line)-1)."\n<br>\n";
						} else if (strlen($line) > 1 && substr($line, 0, 1) === "-") {
							array_push($bugs, substr($line,1,strlen($line)-1));
						} else if (strlen($line) > 1 && substr($line, 0, 1) === "*") {
							array_push($altro, substr($line,1,strlen($line)-1));
						}
					}
					$outputblock = '<div class="versionblock">
										<div class="releasenumber">'.$releasenumber.'</div>
										<div class="description">'.$description.'</div>
					';
					if (count($bugs) > 0) {
						$outputblock .= '<div class="bugstitle"></div>';
						foreach($bugs as $bug) {
							$outputblock .= '<div class="bug">'.$bug.'</div>';
						}
					}
					
					if (count($altro) > 0) {
						$outputblock .= '<div class="altro">';
						foreach($altro as $altroitem) {
							$outputblock .= $altroitem."<br>";
						}
						$outputblock .= '</div>';
					}
					$outputblock .= "</div>";
					echo $outputblock;
				}
				echo "</div>";
			?>
	</body>
</html>