// Vetor de membros.
var membros = [];

// Vetor de áreas.
var areas = ["Diretoria de Recursos Humanos", "Area 2", "Area 3"];

//vetor de ações estrategicas.
var acaoEstrategica = ["Ação RH", "Ação 2", "Ação 3"];

//vetor de atividades.
var atividades = [];

// Contrutor de uma atividade.
function Atividade (nome, di, tp, te, status, ep, er, coments){

	this.nome = nome;
	this.di = di;
	this.tp = tp;
	this.te = te;
	this.status = status;
	this.ep = ep;
	this.er = er;
	this.coments = coments;
}

document.onload = imprimeCabecalho();
document.onload = imprimiAtividade();

// Adiciona ação.
function adicionaAtividade() {

	getAtividade();
	imprimiAtividade();

	// Limpa formulario
	$("#form-add-atividade").trigger("reset");

	esconde();
}

// Busca nome da nova atividade adicionada.
function getAtividade() {

	var nome = $("#nomeAtividade").val();
	var datai = $("#dataIni").val();
	var tp = $("#terminoP").val();
	var te = $("#terminoE").val();
	var status = $("input[name=Status]:checked" , "#form-status").val();
	var ep = $("#entregaP").val();
	var er = $("#entregaR").val();
	var coments = $("#comentarios").val();

	var atividade = new Atividade (nome, datai, tp, te, status, ep, er, coments);
	
	atividades.push(atividade);
	
}

// Imprime açao na area reservada
function imprimiAtividade() {

	if (atividades.length == 0) {
		var a = '<div class="areaVazia">' + "Nenhuma atividade cadastrada" + '</div>';
	   
	    document.getElementById('container').innerHTML = a;

	} else {
		limpaArea();

		// Imprime lista completa.
		for (var i = 0; i < atividades.length; i++) {
		    var a = '<div class="geral">'
		    	  + '<button id="botao' + (i+1) + '" class="submit-button">' + atividades[i].nome + '</button>'
		    	  + '<div class="camposAtiv" id="camposAtiv">'
		    	  	+ '<div>'
		    	  		+ '<p>' + "Data Inicio: " + atividades[i].di + '</p>'
		    	  		+ '<p>' + "Termino Planejado: " + atividades[i].tp + '</p>'
		    	  		+ '<p>' + "Termino Efetivo: " + atividades[i].te + '</p>'
		    	  		+ '<p>' + "Status: " + atividades[i].status + '</p>'
		    	  		+ '<p>' + "Entrega Planejada: " + atividades[i].ep + '</p>'
		    	  		+ '<p>' + "Entrega Realizada: " + atividades[i].er + '</p>'
		    	  		+ '<p>' + "Comentarios: " + atividades[i].coments + '</p>'
		    	  + '</div>'
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
		for (var i = 0; i < atividades.length; i++) {
			$(".geral").remove();
			$(".submit-button").remove();
			$(".camposAtiv").remove();
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

function imprimeCabecalho() {

	var area = '<h2>' + "Ação: " + acaoEstrategica[0]  + '</h2>';
	document.getElementById('cabecalho').innerHTML += area;
}