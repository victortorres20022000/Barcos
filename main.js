var arregloArboles;
var arregloArboles2;
var y_inicio = 10;
var x_inicio = 400;

function crearPersona(){

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	
	//Declaración, Creación e Inicialización de un arreglo
	arregloArboles = new Array(
			new Arbol(17, "brown", 60, 40, x_inicio, 10)
		);
	for (var i = arregloArboles.length - 1; i >= 0; i--) {
		arregloArboles[i].Dibujar(context);
	}


	arregloArboles2 = new Array(
			new Arbol( 12, "brown", 60, 40, 400, y_inicio),
		);
	for (var i = arregloArboles2.length - 1; i >= 0; i--) {
		arregloArboles2[i].Dibujar(context);
	}

}


var id1;
var id2; 
var t = 0;
var t2 = 0;

function iniciarAnimacion(){
	id1 = setInterval(
			animacion,
			42
		);
	id2 = setInterval(
			animacion2,
			42
		);
}
function animacion(){
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.clearRect(0,0,myCanvas.width,myCanvas.height);

	arregloArboles2.forEach(
		function(element) {
	  		element.Y = y_inicio + (element.Velocidad*(t/1000));
		}
	);

	arregloArboles2.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.X + ", Y: " + element.Y);	
		}
	);

	t+=42;

}
function animacion2(){
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	arregloArboles.forEach(
		function(element) {
	  		element.X = x_inicio + (element.Velocidad*(t2/1000));
		}
	);

	arregloArboles.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.X + ", Y: " + element.Y);	
		}
	);

	t2-=42;

}

function detenerAnimacion(){
	if(id1 != null)
		clearInterval(id1);
	if(id2 != null)
		clearInterval(id2);
}

/*
function ordenarArbolesTamaño(){

	var n = arregloArboles.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloArboles[j].Altura > arregloArboles[j+1].Altura){
				//Intercambio
				aux = arregloArboles[j];
				aux_x_j 	= arregloArboles[j].X;
				aux_y_j = arregloArboles[j].Y;
				aux_x_j_1 = arregloArboles[j+1].X;
				aux_y_j_1 = arregloArboles[j+1].Y;
				
				arregloArboles[j] = arregloArboles[j+1];
				arregloArboles[j+1] = aux;

				arregloArboles[j].X = aux_x_j;
				arregloArboles[j].Y = aux_y_j;

				arregloArboles[j+1].X = aux_x_j_1;
				arregloArboles[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloArboles.length - 1; i >= 0; i--) {
		arregloArboles[i].Dibujar(context);
	}
}
*/