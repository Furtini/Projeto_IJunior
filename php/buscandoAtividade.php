<?php 
	
	include('conexao.php');

	$result = mysqli_query($conn, "SELECT * FROM atividades");
	
	// Checar tabela vazia.
	//echo '<div class="areaVazia">' . "Nenhuma área cadastrada" . '</div>';
	echo '<div class="geral">';
	
	while($row = mysqli_fetch_array($result)) {

		echo '<button id="botao' . $row['ativ_ID'] . '" class="submit-button">' . $row['ativ_nome'] . '</button>'
		    	  . '<div class="camposAtiv" id="camposAtiv">'
		    	  	. '<div>'
		    	  		. '<p>' . "Data Inicio: " . $row['ativ_data_inicio'] . '</p>'
		    	  		. '<p>' . "Termino Planejado: " . $row['ativ_term_planejado'] . '</p>'
		    	  		. '<p>' . "Termino Efetivo: " . $row['ativ_term_efetivo'] . '</p>'
		    	  		. '<p>' . "Status: " . $row['ativ_status'] . '</p>'
		    	  		. '<p>' . "Entrega Planejada: " . $row['ativ_entr_planejada']. '</p>'
		    	  		. '<p>' . "Entrega Realizada: " . $row['ativ_entr_realizada'] . '</p>'
		    	  		. '<p>' . "Comentarios: " .$row['ativ_comentarios'] . '</p>'
		    	  . '</div>';
		    	

	}
	echo '</div>';
	mysqli_close($conn);
	
 ?>