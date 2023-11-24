const PalabraOculta = require('./adivinapalabra.js');

const juego = new PalabraOculta();
console.log(juego.generarPalabraAleatoria()); 
console.log(juego.comprobarAciertoPalabra('')); 
console.log(juego.calcularPorcentajeAciertos());
