<?php 

	$hostname = "localhost";
	$username = "root";
	$password = "98198560";
	$dbname = "sae_db";

	// Conectando ao banco.
	$conn = mysqli_connect($hostname, $username, $password, $dbname) OR die("Erro ao conectar ao banco: " .mysqli_connect_error());

	//Setar enconding.
	mysqli_set_charset($conn, "utf8");


 ?>