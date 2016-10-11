var MyApp = angular.module("MyApp",[]);
MyApp.controller("MyCtrl",function($scope,$http){
	// variabel awal
	$scope.aksi = "tambah";
	$scope.pelangganText = {};
	// aksi menambah data ke database
	$scope.tambahData = function(){
		$http.post(
			'data/simpan-data.php',
			{
				data: $scope.pelangganText
			}
		).success(function(data){
			alert(data);
			$scope.aksi = "tambah";
			$scope.dapatkanData();
		}).error(function(){
			alert("Gagal menyimpan data");
		});
		
	};
	// aksi mengubah data pada database
	$scope.ubahData = function(){
		$http.post(
			'data/ubah-data.php',
			{
				id: $scope.idYgAkanDiUbah,
				data: $scope.pelangganText
			}
		).success(function(data){
			alert(data);
			$scope.dapatkanData();
			$scope.aksi = "tambah";
		}).error(function(){
			alert("Gagal mengubah data");
		});
	};
	// aksi menset value dari $scope.pelangganText agar bisa diedit
	$scope.ubah = function(item,pelangganText){
		$scope.idYgAkanDiUbah = item.id;
		$scope.pelangganText = item;
		$scope.aksi = "ubah";
	};
	// aksi menyimpan data pada database
	// bisa aksi tambah atau ubah tergantung dari value $scope.aksi
	$scope.simpanData = function(){
		switch($scope.aksi){
			case "tambah":
				$scope.tambahData();
				$scope.aksi = "tambah";
			break;
			
			case "ubah":
				$scope.ubahData();
				
			break;
		}
	};
	// mendapatkan semua data dari database agar bisa dirender dalam tabel
	$scope.dapatkanData = function(){
		$http.get(
			'data/dapatkan-data.php'
		).success(function(data){
			$scope.dataPelanggan = data;
		});
	};
	// aksi menghapus data berdasarkan id
	$scope.hapusData = function(id){
		$http.post(
			'data/hapus-data.php',
			{
				id:id
			}
		).success(function(){
			$scope.dapatkanData();
		}).error(function(){
			alert("Gagal menghapus data");
		});
	};
	
});
