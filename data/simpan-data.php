<?php

	include 'koneksi.php';
	
	$postdata = file_get_contents("php://input");
	$dataObjek = json_decode($postdata);
	
	$nama = $dataObjek->data->nama;
	$alamat = $dataObjek->data->alamat;
	$telp = $dataObjek->data->telp;
	$email = $dataObjek->data->email;
	
	$perintah_sql = "insert into pelanggan (nama,alamat,telp,email) values ('{$nama}','{$alamat}','{$telp}','{$email}')";
	
	$result = mysqli_query($koneksi,$perintah_sql);
	
	$respon = "";
	if($result){
		$respon = "Berhasil menyimpan data";
	}else{
		$respon = "Gagal menyimpan data";
	}
	
	echo $respon;

?>