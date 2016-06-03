<!DOCTYPE html>
<html>
<head>
	<title>Projeto Final</title>
	<meta charset="utf-8">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<link rel="stylesheet" type="text/css" href="../css/styleMembros.css">
</head>
<body>
	<content>

		<?php include('header.php'); ?>

		<nav>
			<ul>
				<li><a href="main.php">Áreas</a></li>
				<li><a href="membros.php">Membros</a></li>
				<li><a href="objetivos.php">Objetivos Estratégicos</a></li>
				<li><a href="../html/sobre.html">Sobre</a></li>
			</ul>
		</nav>

		<article>
			<div class="cabecalho">
				<h2>Membros Cadastrados:</h2>
				<button type="button" id="add-membro" name="add-membro" title="Add Membro" onclick="mostra();"><img src="../images/add.png" width="45" height="45"></button>
			</div>

			<div class="form-area" id="form-area">
				<form id="form-add-membro" name="form-add-membro" method="POST" ">
					<div class="form-container">
						<label class="lbl1">Nome: </label>
						<input type="text" id="nomeMembro" name="nomeMembro" maxlength="50">
						</div>
					<div class="form-container">
						<label class="lbl2">Cargo: </label>
						<input type="text" id="cargo" name="cargo" maxlength="100">
						</div>

					<button type="button" id="ok-membro" name="ok-membro" onclick="adicionaMembro();">Done</button>
				</form>
			</div>

			<div id="container">
				
			</div>
		</article>

		<?php include('footer.php'); ?>

	</content>
	<!-- Scripts  -->
	<script type="text/javascript" src="../js/membros.js"></script>
</body>
</html>