
// Desabilitando enter do form
$(document).keypress(function(event) {
	if (event.which == '13') {
		event.preventDefault();
	}
});

// Envia formularioda Area para banco sem atualizar a pagina.
$(document).ready(function() {
	$("#ok-area").click(function(){

		var formData = $("#area").val();	
		$.ajax({
			type: 'POST',
			url: '../php/enviandoArea.php',
			data: {area : formData},
			success: function (status) {
				$('#form-add-area').trigger("reset");
			}
		});
	});
});

// Buscando Areas incluidas no banco.
$(document).ready(function() {
	setInterval(function() {
		$('#container-area').load('../php/buscandoArea.php')
	}, 500);
});

// Busca pagina de ações estrategicas.
function buscaPagArea() {
	document.location.href = "../html/area.html";
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