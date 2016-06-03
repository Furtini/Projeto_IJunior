// Vetor de membros.
var membros = [];

// Construtor de um membro.
function Membro(nome, cargo) {

	this.nome = nome;
	this.cargo = cargo;
}

document.onload = imprimeMembros();

// Adiciona membro.
function adicionaMembro() {

	getMembro();
	imprimeMembros();

	// Limpa formulario
	$("#form-add-membro").trigger("reset");

	esconde();
}

// Busca nome do novo membro cadastrado.
function getMembro() {

	var nome = $("#nomeMembro").val();
	var car = $('#cargo').val();

	var membro = new Membro(nome, car);

	membros.push(membro);

}

// Imprime açao na area reservada
function imprimeMembros() {

	if (membros.length == 0) {
		var a = '<div class="areaVazia">' + "Nenhum membro cadastrado" + '</div>';
	   
	    document.getElementById('container').innerHTML = a;

	} else {
		
		limpaArea();

		// Imprime lista completa.
		for (var i = 0; i < membros.length; i++) {
		    var a = '<div class="membro" id="membro' + (i+1) + '">' 
					    + '<p>' + membros[i].nome + '</p>'
					    + '<p>' + membros[i].cargo + '</p>' 
					    + '</div>';

		    document.getElementById('container').innerHTML += a;
		}

	}
}

// Limpa area para impressão 
function limpaArea() {
	// Remove div para lista vazia.
		$(".areaVazia").remove();
		// Remove listas já adicionadas.
		for (var i = 0; i < membros.length; i++) {
			$(".membro").remove();
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