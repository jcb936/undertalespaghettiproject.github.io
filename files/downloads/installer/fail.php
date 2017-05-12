<?
	IF ($_GET['c'] == "Prova di errore") {
		exit;
	}
	$dat = file_get_contents('fails.txt')."";
	$fil = fopen('fails.txt', 'w');
	
	$txt = $dat."\n".$_GET['0'].">".str_replace("|","||",$_GET['1'])."|".str_replace("|","||",$_GET['a'])."|".str_replace("|","||",$_GET['b'])."|".str_replace("|","||",$_GET['c']);
	if (flock($fil, LOCK_EX)) {
		fwrite($fil, $txt);
		flock($fil, LOCK_UN);
	}
	fclose($fil);
	
	//extract data from the post
	//set POST variables
	$url = 'https://hooks.slack.com/services/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';
	$fields = array(
		'payload' => '{"username": "Problema rilevato!", "icon_emoji": ":x:", "channel": "#problemi-software", "text": ">'.urlencode($_GET['0']).'\n*Applicazione:* '.urlencode($_GET['1']).'\n*Tipo di problema:* `'.urlencode($_GET['a']).'`\n*Posizione:* `'.urlencode($_GET['b']).'`\n```'.urlencode($_GET['c']).'```"}',
	);

	//url-ify the data for the POST
	foreach($fields as $key=>$value) {
		$fields_string .= $key.'='.$value.'&';
	}
	rtrim($fields_string, '&');

	//open connection
	$ch = curl_init();

	//set the url, number of POST vars, POST data
	curl_setopt($ch,CURLOPT_URL, $url);
	curl_setopt($ch,CURLOPT_POST, count($fields));
	curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);

	//execute post
	$result = curl_exec($ch);

	//close connection
	curl_close($ch);
?>