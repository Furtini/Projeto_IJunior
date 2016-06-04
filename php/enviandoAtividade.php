<?php 

	include("conexao.php");

	//Checar submissão do form
	if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {

		$nomeAtiv = $_POST['nomeAtividade'];
		$di 	  = $_POST['dataInic'];
		$tp 	  = $_POST['terminoPc'];
		$te		  = $_POST['terminoEc'];
		$status	  = $_POST['Status_ativ'];
		$ep	  	  = $_POST['entregaPc'];
		$er	      = $_POST['entregaRc'];
		$come	  = $_POST['comentarios'];

		mysqli_query($conn, "INSERT INTO atividades(ativ_nome, 
													ativ_data_inicio, 
													ativ_term_planejado, 
													ativ_term_efetivo, 
													ativ_status, 
													ativ_entr_planejada, 
													ativ_entr_realizada,
													ativ_comentarios) 
													VALUES('$nomeAtiv', 
															'$di', 
															'$tp', 
															'$te', 
															'$cr', 
															'$status', 
															'$ep', 
															'$er', 
															'$come')");
	}
 ?>