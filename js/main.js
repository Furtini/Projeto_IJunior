// Vetor de membros.
var membros = ["Carinha 1", "Carinha 2", "Carinha 3"];

// Vetor de áreas.
var areas = ["Diretoria de Recursos Humanos", "Area 2", "Area 3"];

// Desabilitando enter do form
$(document).keypress(function(event) {
	if (event.which == '13') {
		event.preventDefault();
	}
});

document.onload = imprimeAreas();

// Adiciona area.
function adicionaArea() {
	
	getArea();
	imprimeAreas();
	esconde();
}

// Buscando input da nova área adivionada.
function getArea() {
	
	var area = document.getElementById("area").value;

	if (area === "") {
		alert("Campo Vazio!");
		return false;
	} else {
		areas.push(area);
		
		window.localStorage.setItem("areas", areas);

		document.getElementById("area").value = "";
		return true;
	}
}

// Imprime áreas na pagina.
function imprimeAreas() {

	if (areas.length == 0) {
		var a = '<div class="areaVazia">' + "Nenhuma área cadastrada" + '</div>';
	   
	    document.getElementById('container').innerHTML = a;

	} else {
		// Remove div para lista vazia.
		$(".areaVazia").remove();
		// Remove listas já adicionadas.
		for (var i = 0; i < areas.length; i++) {
			$(".submit-button").remove();
		}

		// Imprime lista completa.
		for (var i = 0; i < areas.length; i++) {
		    var a = '<button id="botao' + (i+1) + '" class="submit-button">' + areas[i] + '</button>';

		    document.getElementById('container').innerHTML += a;
		}

		// Seta botão para mudar de página.
		for (var i = 0; i < areas.length; i++) {
			document.getElementById("botao"+(i+1)).onclick = function () {
				location.href = "../php/area.php";
				};
		}
	}
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