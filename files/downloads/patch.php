<?
$file = "udtita.patch";
if ($_GET['mode']=="0") {
	$file = "data.win";
} elseif ($_GET['mode']=="1") {
	$file = "udtita.patch";
} elseif ($_GET['mode']=="2") {
	$file = "udtita101.patch";
}
$size = filesize($file);
header('Content-type: application/octet-stream');
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Pragma: public');
header("Content-length: $size");
readfile($file);
?>