<!DOCTYPE html>
<html>
<head>
	<title>Projeto Final</title>
	<meta charset="utf-8">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="../css/styleAtividades.css">
</head>
<body>
	<content>
		
		<?php include('header.php'); ?>

		<article>
			<div id="cabecalho">
				
				<button id="add-atividade" name="add-atividade" title="Add Ação" onclick="mostra();">
					<img src="../images/add.png" width="45" height="45">
					</button>
				
				<button id="return" name="back" title="Return" onclick="history.go(-1);">
					<img src="../images/back.png" width="45" height="45">
				</button>
				

			</div>

			<div class="form-area" id="form-area">
				<form id="form-add-atividade" name="form-add-atividade" method="POST" ">
					<div class="form-container">
						<label class="lbl1">Nome: </label>
						<input type="text" id="nomeAtividade" name="nome" maxlength="100" required>
						</div>
					<div class="form-container">
						<label class="lbl9">Data Inicio: </label>
						<input type="date" id="dataIni" name="dataIni" required>
						</div>
					<div class="form-container">
						<label class="lbl2">Termino Planejado: </label>
						<input type="date" id="terminoP" name="terminoP" required>
						</div>
					<div class="form-container">	
						<label class="lbl3">Termino Efetivo: </label>
						<input type="date" id="terminoE" name="terminoE" required>
						</div>
					<div class="form-status" id="form-status" required>
						<label class="lbl4">Status: </label>
						<div>
							<label class="lbl5">Não Iniciada</label>
							<input type="radio" class="status" name="Status" value="Não Iniciada">
							</div>
						<div>
							<label class="lbl5">Em Andamento</label>
							<input type="radio" class="status" name="Status" value="Em Andamento">
							</div>
						<div>
							<label class="lbl5">Concluída</label>
							<input type="radio" class="status" name="Status" value="Concluída">
							</div>
						<div>
							<label class="lbl5">Concluída com Atraso</label>
							<input type="radio" class="status" name="Status" value="Concluida com Atraso">
							</div>
						<div>
							<label class="lbl5">Atrasada</label>
							<input type="radio" class="status" name="Status" value="Atrasada">
							</div>
						</div>
					<div class="form-container">
						<label class="lbl6">Entrega Planejado: </label>
						<input type="date" id="entregaP" name="entregaP" required>
						</div>
					<div class="form-container">
						<label class="lbl7">Entrega Realizada: </label>
						<input type="date" id="entregaR" name="entregaR" required>
						</div>
					<div class="form-container" id="comen">
						<label class="lbl8">Comentários: </label>
						<textarea id="comentarios" rows="10" maxlength="500"></textarea>
						</div>
					
					<br>
					<button type="submit" id="ok-atividade" name="ok-atividade" onclick="adicionaAtividade();">Done</button>
				</form>
			</div>

			<div id="container">
				

			</div>
		</article>

		<?php include('footer.php'); ?>

	</content>

	<!-- Scripts  -->
	<script type="text/javascript" src="../js/atividades.js"></script>

</body>
</html>