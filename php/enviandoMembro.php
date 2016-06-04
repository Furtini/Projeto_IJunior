<?php 

	include("conexao.php");

	//Checar submissão do form
	if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {

		$nomeMembro = $_POST['nomeMembro'];
		$cargo = $_POST['cargo'];

		mysqli_query($conn, "INSERT INTO membros(membros_nome, membros_cargo) VALUES('$nomeMembro', '$cargo')");
	}
 ?>