// Vetor de membros.
var membros = [];

// Vetor de áreas.
var areas = ["Diretoria de Recursos Humanos"];

var atividades = ["Atividade 1", "Atividade 2", "Atividade 3"];

//vetor de ações estrategicas.
var acoesEstrategicas = [];

// Construtor de uma ação estrategica
function AcaoEstrategica (nome, desc, cp, cr, mr, status, ativ, 
							what, how, where, when, why, who, howMuch) {

	this.nome = nome;
	this.desc = desc;
	this.cp = cp;
	this.cr = cr;
	this.mr = mr;
	this.status = status;
	this.ativ = ativ;
	this.what = what;
	this.how = how;
	this.where = where;
	this.when = when;
	this.why = why;
	this.who = who;
	this.howMuch = howMuch;
}

document.onload = imprimeCabecalho();
document.onload = imprimiAcao();


// Adiciona ação.
function adicionaAcao() {

	getAcao();
	imprimiAcao();

	// Limpa formulario
	$("#form-add-acao").trigger("reset");

	esconde();
}

// Busca nome da nova ação estrategica adicionada.
function getAcao() {

	//nome, desc, cp, cr, mr, status, ativ, 
	//what, how, where, when, why, who, howMuch)
	var nome = $("#nomeAcao").val();
	var desc = $("#desc").val();
	var cp = $("#custoP").val();
	var cr = $("#custoR").val();
	var mr = $("#membro").val();
	var status = $("input[name=Status]:checked" , "#form-status").val();
	var ativ = 0;
	var what = $("#what").val();
	var how = $("#how").val();
	var where = $("#where").val();
	var when = $("#when").val();
	var why = $("#why").val();
	var who = $("#who").val();
	var howMuch = $("#howMuch").val();
	
	var acao = new AcaoEstrategica(nome, desc, cp, cr, mr, status, ativ, 
									what, how, where, when, why, who, howMuch);
	
	acoesEstrategicas.push(acao);
	
}

// Imprime açao na area reservada
function imprimiAcao() {

	if (acoesEstrategicas.length == 0) {
		var a = '<div class="areaVazia">' + "Nenhuma ação cadastrada" + '</div>';
	   
	    document.getElementById('container').innerHTML = a;

	} else {
		limpaArea();
		
		for (var i = 0; i < acoesEstrategicas.length; i++) {
			var a = '<div class="geral">'
		    	  + '<button id="botao' + (i+1) + '" class="submit-button">' + acoesEstrategicas[i].nome + '</button>'
		    	  + '<div class="camposAcao" id="camposAcao">'
		    	  	+ '<div>'
		    	  		+ '<p>' + "Descrição: " + acoesEstrategicas[i].desc + '</p>'
		    	  		+ '<p>' + "Custo Planejado: " + acoesEstrategicas[i].cp + '</p>'
		    	  		+ '<p>' + "Custo Realizado: " + acoesEstrategicas[i].cr + '</p>'
		    	  		+ '<p>' + "Membro Responsável: " + acoesEstrategicas[i].mr + '</p>'
		    	  		+ '<p>' + "Status: " + acoesEstrategicas[i].status + '</p>'
		    	  		+ '<p>' + "Atividades: " + acoesEstrategicas[i].ativ + '</p>'
		    	  		+ '<p class="plane">' + "Planejamento 5W2H" + '</p>'
		    	  		+ '<p>' + "What: " + acoesEstrategicas[i].what + '</p>'
		    	  		+ '<p>' + "How: " + acoesEstrategicas[i].how + '</p>'
		    	  		+ '<p>' + "Where: " + acoesEstrategicas[i].where + '</p>'
		    	  		+ '<p>' + "When: " + acoesEstrategicas[i].when + '</p>'
		    	  		+ '<p>' + "Why: " + acoesEstrategicas[i].why + '</p>'
		    	  		+ '<p>' + "Who: " + acoesEstrategicas[i].who + '</p>'
		    	  		+ '<p>' + "How much: " + acoesEstrategicas[i].howMuch + '</p>'
		    	  	+ '</div>'
		    	+ '</div>';
			document.getElementById('container').innerHTML += a;

			// Seta botão para mudar de página.
			for (var i = 0; i < areas.length; i++) {
				document.getElementById("botao"+(i+1)).onclick = function () {
					location.href = "../php/atividades.php";
					};
			}
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
			$(".camposAcao").remove();
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

	var area = '<h2>' + "Área: " + areas[0]  + '</h2>';
	document.getElementById('cabecalho').innerHTML += area;
}