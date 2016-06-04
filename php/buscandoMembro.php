<?php 
	
	include('conexao.php');

	$result = mysqli_query($conn, "SELECT * FROM membros");
	
	// Checar tabela vazia.
	//echo '<div class="areaVazia">' . "Nenhuma área cadastrada" . '</div>';
	
	 	
	while($row = mysqli_fetch_array($result)) {

		echo '<div class="membro" id="membro' . $row['membros_ID'] . '">' 
					    . '<p>' . $row['membros_nome'] . '</p>'
					    . '<p>' . $row['membros_cargo'] . '</p>' 
					    . '</div>'; 
	}

	
	mysqli_close($conn);
	
 ?>
 