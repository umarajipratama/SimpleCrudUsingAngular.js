<?php

	include 'koneksi.php';
	
	$postdata = file_get_contents("php://input");
	$dataObjek = json_decode($postdata);
	
	$id = $dataObjek->id;
	
	$perintah_sql = "delete from pelanggan where id = {$id}";
	
	$result = mysqli_query($koneksi,$perintah_sql);

?>