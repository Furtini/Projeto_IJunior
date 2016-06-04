<?php 
	
	include('conexao.php');

	$result = mysqli_query($conn, "SELECT * FROM areas");
	
	// Checar tabela vazia.
	//echo '<div class="areaVazia">' . "Nenhuma área cadastrada" . '</div>';
	
	 	
	while($row = mysqli_fetch_array($result)) {

		echo '<button id="botao' .$row['areas_ID']. '" class="submit-button" onclick="buscaPagArea();" >' .$row['areas_nome']. '</button>'; 
	}

	

	mysqli_close($conn);
	
 ?>