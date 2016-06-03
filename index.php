<!DOCTYPE html>
<html>
<head>
	<title>Projeto Final</title>
	<meta charset="utf-8">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<content>
		
		<header>
			<div class="logo">
				<a href="http://ijunior.com.br" target="_blank"><img src="images/logo.png"></a>
			</div>

			<div class="nome-sistema">
				<h1>SAE: Sistema de Ações Estratégicas</h1>
			</div>
		</header>

		<!-- Seção de loguin-->
		<article>
			<div class="login">
				<div class="sub">
					<h3>Login</h3>
				</div>
				<form class="form-login" name="form" onsubmit="" method="POST" action="php/main.php">
					<div class="block">
						<input type="text" name="usuario" id="usuario" placeholder="E-mail" required>
						<input type="password" name="password" id="password" placeholder="Password" required>
						<button type="submit" id="submit" name="submit" onclick="">Login</button>
						<button type="submit" id="register" name="register" onclick="">Register</button>
					</div>
				</form>
				<div id="option"> 
					<a href="#">Forgot password?</a>
				</div>			
			</div>	
		</article>

		<footer>
			<section class="copy">
				<p>&copy;2016 Equipe Foda Essa Hein!</p>
			</section>

			<section>
				<h3>Lucas Furtini Veado</h3>
				<p> Universidade Federal de Minas Gerais</p>
				<p>	Departamento de Ciência da Computação</p>
				<p>	Matricula: 2013007609</p>
				<p>	Email: lfurtini@gmail.com</p>
				</section>
			
			<section>
				<h3>Felipe Marcelino</h3>
				<p> Universidade Federal de Minas Gerais</p>
				<p>	Departamento de Ciência da Computação</p>
				<p>	Matricula: 2013007315</p>
				<p>	Email: felipe.marcelina19@gmail.com</p>
				</section>

			<section>
				<h3> Jonas Rafael </h3>
				<p> Universidade Federal de Minas Gerais</p>
				<p>	Departamento de Ciência da Computação</p>
				<p>	Matricula: 2015055929</p>
				<p>	Email: jonasrafael97@hotmail.com</p>
				</section>

			<br class="clearing">
		</footer>
	</content>
</body>
</html>