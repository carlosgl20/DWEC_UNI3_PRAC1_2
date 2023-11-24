class PalabraOculta {
  constructor() {
    this.palabras = ["ASTURIAS","COCHE","ORDENADOR","VIDEOJUEGOS","ESTUDIOS","SALTAR","ENTRENAR","MANDO","PELUQUERO","ROPAS","CONSOLA"];
    this.palabraDesordenada = '';
    this.intentos = 0;
    this.aciertos = 0;
  }

  generarPalabraAleatoria() {
    this.palabraDesordenada = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    return this.palabraDesordenada;
  }

  comprobarAciertoPalabra(intento) {
    this.intentos++;
    if (intento.toUpperCase() === this.palabraDesordenada.toUpperCase()) {
      this.aciertos++;
      return true;
    }
    return false;
  }

  calcularPorcentajeAciertos() {
    if (this.intentos === 0) {
      return 0;
    }
    return (this.aciertos / this.intentos) * 100;
  }
}