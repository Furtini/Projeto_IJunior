<!DOCTYPE html>
<html>
<head>
	<title>Projeto Final</title>
	<meta charset="utf-8">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="../css/styleAreas.css">
</head>
<body>
	<content>
		
		<?php include('header.php'); ?>

		<article>
			<div id="cabecalho">
				
				<button id="add-acao" name="add-acao" title="Add Ação" onclick="mostra();">
					<img src="../images/add.png" width="45" height="45">
					</button>
				
				<button id="return" name="back" title="Return" onclick="history.go(-1);">
					<img src="../images/back.png" width="45" height="45">
				</button>
				

			</div>

			<div class="form-area" id="form-area">
				<form id="form-add-acao" name="form-add-acao" method="POST" ">
					<div class="form-container">
						<label class="lbl1">Nome: </label>
						<input type="text" id="nomeAcao" name="nome">
						</div>
					<div class="form-container" id="descricao">
						<label class="lbl2">Descrição: </label>
						<textarea id="desc" name="desc" rows="5"></textarea>
						</div>
					<div class="form-container" id="memRes">
						<label class="lbl5">Membro Responsável: </label>
						<input type="text" id="membro" name="membro">
						</div>
					<div class="form-container" id="custo1">
						<label class="lbl3">Custo Planejado: </label>
						<input type="number" id="custoP" name="custoP">
						<label class="lbl4">Custo Realizado: </label>
						<input type="number" id="custoR" name="custoR">
						</div>
					<div class="form-status" id="form-status">
						<label class="lbl6">Status: </label>
						<div>
							<label class="lbl7">Não Iniciada</label>
							<input type="radio" class="status" name="Status" value="Não Iniciada">
							</div>
						<div>
							<label class="lbl7">Em Andamento</label>
							<input type="radio" class="status" name="Status" value="Em Andamento">
							</div>
						<div>
							<label class="lbl7">Concluída</label>
							<input type="radio" class="status" name="Status" value="Concluída">
							</div>
						<div>
							<label class="lbl7">Concluída com Atraso</label>
							<input type="radio" class="status" name="Status" value="Concluida com Atraso">
							</div>
						<div>
							<label class="lbl7">Atrasada</label>
							<input type="radio" class="status" name="Status" value="Atrasada">
							</div>
						</div>
					<p>Planejamento 5W2H:</p>
					<div class="form-5w2h">
						<label>What? </label>
						<textarea rows="5" id="what"></textarea>
						</div>
					<div class="form-5w2h">
						<label>How? </label>
						<textarea rows="5" id="how"></textarea>
						</div>
					<div class="form-5w2h">
						<label>Where? </label>
						<textarea rows="5" id="where"></textarea>
						</div>
					<div class="form-5w2h">
						<label>When? </label>
						<textarea rows="5" id="when" na></textarea>
						</div>
					<div class="form-5w2h">
						<label>Why? </label>
						<textarea rows="5" id="why"></textarea>
						</div>
					<div class="form-5w2h">
						<label>Who? </label>
						<textarea rows="5" id="who"></textarea>
						</div>
					<div class="form-5w2h">
						<label>How Much? </label>
						<textarea rows="5" id="howMuch"></textarea>
						</div>
					<br>
					<button type="button" id="ok-acao" name="ok-acao" onclick="adicionaAcao();">Done</button>
				</form>
			</div>

			<div id="container">
				

			</div>
		</article>

		<?php include('footer.php'); ?>

	</content>

	<!-- Scripts  -->
	<script type="text/javascript" src="../js/areas.js"></script>

</body>
</html>