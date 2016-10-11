<?php

	include 'koneksi.php';
	$perintah_sql = "select * from pelanggan";
	
	$data = [];
	
	$result = mysqli_query($koneksi,$perintah_sql);
	while($row = mysqli_fetch_array($result)){
		$temp_data = [];
		$temp_data['id'] = $row['id'];
		$temp_data['nama'] = $row['nama'];
		$temp_data['alamat'] = $row['alamat'];
		$temp_data['telp'] = $row['telp'];
		$temp_data['email'] = $row['email'];
		
		array_push($data,$temp_data);
	}
	
	echo json_encode($data);

?>