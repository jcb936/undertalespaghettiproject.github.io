<?
$file = "data.win";
$size = filesize($file);
header('Content-type: application/exe');
header("Content-length: $size");
readfile($file);
?>