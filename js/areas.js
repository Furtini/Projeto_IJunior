// Vetor de áreas.
var areas = ["Diretoria de Recursos Humanos"];

document.onload = imprimeCabecalho();

// Envia formularioda Area para banco sem atualizar a pagina.
$(document).ready(function() {
	$("#ok-acao").click(function(){

		var acao   = $("#nomeAcao").val();
		var desc   = $("#desc").val();
		var mr     = $("#membroR").val();
		var cp	   = $("#custoP").val();
		var cr 	   = $("#custoR").val();
		var rstatus = $("input[name=Status_acao]:checked" , "#form_status").val();
		var what   = $("#what").val();
		var how    = $("#how").val();
		var where  = $("#where").val();
		var when   = $("#when").val();
		var why    = $("#why").val();
		var who    = $("#who").val();
		var howM   = $("#howMuch").val();

		$.ajax({
			type: 'POST',
			url: '../php/enviandoAcao.php',
			data: { nomeAcao : acao,
				    desc : desc,
				    membroR : mr,
				    custoP : cp,
				    custoR : cr,
				    form_status : rstatus,
				    what : what,
				    how : how,
				    where : where,
				    when : when,
				    why : why,
				    who : who,
				    howMuch : howM
					},
			success: function (event) {
				$('#form-add-acao').trigger("reset");
			}
		});
	});
});

// Buscando Areas incluidas no banco.
$(document).ready(function() {
	setInterval(function() {
		$('#container-acao').load('../php/buscandoAcao.php')
	}, 500);
});

// Busca pagina de ações estrategicas.
function buscaPagAcao() {
	document.location.href = "../html/atividades.html";
}

// Mostra e esconde formularios.
// Chama show.
function mostra() {
	var elements = document.querySelectorAll('.form-area');

	var dis = document.getElementById("form-area");
	
	if (dis.style.display === 'none'){
		show(elements);
	}
	else {
		esconde();
	}
}

// Mostra elementos.
function show(elements, specifiedDisplay) {
	var computeDisplay, element, i;

	elements = elements.length ? elements : [elements];
	for (var i = 0; i < elements.length; i++){
		element = elements[i];
		
		// Retira elemento display
		element.style.display = '';
		computeDisplay = window.getComputedStyle(element, null).getPropertyValue('display');

		if (computeDisplay === 'none') {
			element.style.display = specifiedDisplay || 'block';
		}
	}
}

// Chama hide.
function esconde() {
	var elements = document.querySelectorAll('.form-area');

	hide(elements);

}
// Esconde elementos.
function hide(elementos) {
	elementos = elementos.length ? elementos : [elementos];
	for (var i = 0; i < elementos.length; i++) {
		elementos[i].style.display = 'none';
	}
} // Fim hide

function imprimeCabecalho() {

	var area = '<h2>' + "Área: " + areas[0]  + '</h2>';
	document.getElementById('cabecalho-area').innerHTML += area;
}