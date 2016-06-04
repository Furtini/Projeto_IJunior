<?php 

	include("conexao.php");

	//Checar submissão do form
	if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {

		$nomeArea = $_POST['area'];

		mysqli_query($conn, "INSERT INTO areas(areas_nome) VALUES('$nomeArea')");
	}
 ?>