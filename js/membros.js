// Envia formularioda Area para banco sem atualizar a pagina.
$(document).ready(function() {
	$("#ok-membro").click(function(){

		var nomemembro = $("#nomeMembro").val();
		var cargo = $("#cargo").val();

		$.ajax({
			type: 'POST',
			url: '../php/enviandoMembro.php',
			data: {nomeMembro : nomemembro, cargo : cargo},
			success: function (status) {
				$('#form-add-membro').trigger("reset");
			}
		});
	});
});

// Buscando Areas incluidas no banco.
$(document).ready(function() {
	setInterval(function() {
		$('#container-membro').load('../php/buscandoMembro.php')
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