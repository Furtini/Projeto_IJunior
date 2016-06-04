<?php 
	
	include('conexao.php');

	$result = mysqli_query($conn, "SELECT * FROM acoes_estrategicas");
	
	// Checar tabela vazia.
	//echo '<div class="areaVazia">' . "Nenhuma área cadastrada" . '</div>';
	
	 	
	while($row = mysqli_fetch_array($result)) {

		echo '<div class="objetivo" id="ovjetivo">' 
					    . '<p>' . $row['ae_nome'] . '</p>'
					    . '<p>' . $row['ae_descricao'] . '</p>' 
					    . '</div>'; 
	}

	

	mysqli_close($conn);
	
 ?>