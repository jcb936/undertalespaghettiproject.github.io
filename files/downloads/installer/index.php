<!DOCTYPE html>
<?php
	if (isset($_COOKIE["downloaded"]) || $_COOKIE["downloaded"] == "true") {
	} else {
		setcookie("downloaded", "true", time() + (86400 * 29), "/"); // 86400 = 1 day
		$fp = fopen("downloads.txt", "r+");
		if (flock($fp, LOCK_EX)) {
			$number = fread($fp, filesize("downloads.txt"));
			$number = $number + 1;
			ftruncate($fp, 0);
			fseek($fp, 0);
			fwrite($fp, $number);
			fclose($fp);
		} else {
			print "Could not get lock!\n";
		}
	}
	header("Location: Undertale Spaghetti Project Installer 4.0.0.rar");
?>
<html>
	<head>
	</head>
	<body>
	</body>
</html>