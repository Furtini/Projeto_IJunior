
//vetor de ações estrategicas.
var acaoEstrategica = ["Ação RH", "Ação 2", "Ação 3"];

document.onload = imprimeCabecalho();

// Envia formularioda Atividade para banco sem atualizar a pagina.
$(document).ready(function() {
	$("#ok-atividade").click(function(){

		var ativ    = $("#nomeAtividade").val();
		var di      = $("#dataInic").val();
		var tp      = $("#terminoPc").val();
		var te	    = $("#terminoEc").val();
		var pstatus = $("input[name=Status_ativ]:checked" , "#form_status2").val();
		var ep 	    = $("#entregaPc").val();
		var er      = $("#entregaRc").val();
		var comen   = $("#comentarios").val();
	
		$.ajax({
			type: 'POST',
			url: '../php/enviandoAtividade.php',
			data: { nomeAtividade : ativ,
				    dataIni : di,
				    terminoP : tp,
				    terminoE : te,
				    form_status2 : pstatus,
				    entregaP : ep,
				    entregaR : er,
				    comentarios : comen
					},
			success: function (event) {
				$('#form-add-atividades').trigger("reset");
			}
		});
	});
});

// Buscando Areas incluidas no banco.
$(document).ready(function() {
	setInterval(function() {
		$('#container-ativ').load('../php/buscandoAtividade.php')
	}, 500);
});

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

	var area = '<h2>' + "Ação: " + acaoEstrategica[0]  + '</h2>';
	document.getElementById('cabecalho').innerHTML += area;
}