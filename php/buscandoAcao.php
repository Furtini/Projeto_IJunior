<?php 
	
	include('conexao.php');

	$result = mysqli_query($conn, "SELECT * FROM acoes_estrategicas");
	
	// Checar tabela vazia.
	//echo '<div class="areaVazia">' . "Nenhuma área cadastrada" . '</div>';
	 	
	while($row = mysqli_fetch_array($result)) {

		echo '<div class="geral">'
			    	  . '<button id="botao' . $row['ae_ID'] . '" class="submit-button" onclick="buscaPagAcao();">' . $row['ae_nome'] . '</button>'
			    	  . '<div class="camposAcao" id="camposAcao">'
			    	  	. '<div>'
			    	  		. '<p>' . "Descrição: " . $row['ae_descricao'] . '</p>'
			    	  		. '<p>' . "Custo Planejado: " . $row['ae_custo_planejado'] . '</p>'
			    	  		. '<p>' . "Custo Realizado: " . $row['ae_custo_realizado']. '</p>'
			    	  		. '<p>' . "Membro Responsável: " . $row['ae_membro_resp'] . '</p>'
			    	  		. '<p>' . "Status: " . $row['ae_status'] . '</p>'
			    	  		. '<p>' . "Atividades: " . "total" . '</p>'
			    	  		. '<p class="plane">' . "Planejamento 5W2H" . '</p>'
			    	  		. '<p>' . "What: " . $row['ae_what'] . '</p>'
			    	  		. '<p>' . "How: " . $row['ae_how'] . '</p>'
			    	  		. '<p>' . "Where: " . $row['ae_where'] . '</p>'
			    	  		. '<p>' . "When: " . $row['ae_when'] . '</p>'
			    	  		. '<p>' . "Why: " . $row['ae_why'] . '</p>'
			    	  		. '<p>' . "Who: " . $row['ae_who'] . '</p>'
			    	  		. '<p>' . "How much: " . $row['ae_how_much'] . '</p>'
			    	  	. '</div>'
			    	. '</div>';
	}
	mysqli_close($conn);
	
 ?>