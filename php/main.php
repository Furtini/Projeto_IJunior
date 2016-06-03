<!DOCTYPE html>
<html>
<head>
	<title>Projeto Final</title>
	<meta charset="utf-8">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="../css/styleMain.css">
</head>
<body>
	<content>
		
		<?php include('header.php'); ?>

		<nav>
			<ul>
				<li><a href="main.php">Áreas</a></li>
				<li><a href="../php/membros.php">Membros</a></li>
				<li><a href="../php/objetivos.php">Objetivos Estratégicos</a></li>
				<li><a href="../html/sobre.html">Sobre</a></li>
			</ul>
		</nav>

		<article>
			<div class="cabecalho">
				<h2>Áreas Cadastradas:</h2>
				
				<button type="button" id="add-area" name="add-area" title="Add Area" onclick="mostra();"><img src="../images/add.png" width="45" height="45"></button>

			</div>

			<div class="form-area" id="form-area" method="POST" action="#">
				<form id="form-add-area" name="form-add-area" method="POST" ">
					<label>Nome: </label><input type="text" id="area" name="area">
					<button type="button" id="ok-area" name="ok-area" onclick="adicionaArea();">Done</button>
				</form>
			</div>

			<div id="container">
				
				<!-- Local onde serão inseridas as Areas adicionadas  -->

			</div>
		</article>

		<?php include('footer.php'); ?>

	</content>

	<!-- Scripts  -->
	<script type="text/javascript" src="../js/main.js"></script>
</body>
</html>