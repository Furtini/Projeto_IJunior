<?php 

	include("conexao.php");

	//Checar submissão do form
	if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {

		$nomeAcao = $_POST['nomeAcao'];
		$desc 	  = $_POST['desc'];
		$mr 	  = $_POST['membroR'];
		$cp		  = $_POST['custoP'];
		$cr		  = $_POST['custoR'];
		$status	  = $_POST['Status_acao'];
		$what	  = $_POST['what'];
		$how	  = $_POST['how'];
		$where	  = $_POST['where'];
		$when	  = $_POST['when'];
		$why	  = $_POST['why'];
		$who	  = $_POST['who'];
		$howMuch  = $_POST['howMuch'];

		mysqli_query($conn, "INSERT INTO acoes_estrategicas(ae_nome, 
															ae_descricao, 
															ae_membro_resp, 
															ae_custo_planejado, 
															ae_custo_realizado, 
															ae_status, 
															ae_what, 
															ae_how, 
															ae_where, 
															ae_when, 
															ae_why, 
															ae_who, 
															ae_how_much) VALUES('$nomeAcao', 
																				'$desc', 
																				'$mr', 
																				'$cp', 
																				'$cr', 
																				'$status', 
																				'$what', 
																				'$how', 
																				'$where', 
																				'$when', 
																				'$why', 
																				'$who', 
																				'$howMuch')");
	}
 ?>