document.addEventListener('DOMContentLoaded', function() {
    const palabras = ["ASTURIAS","COCHE","ORDENADOR","VIDEOJUEGOS","ESTUDIOS","SALTAR","ENTRENAR","MANDO","PELUQUERO","ROPAS","CONSOLA"]; 
    let palabraDesordenada = '';
    
    const letras = document.getElementById('letras');
    const palabra = document.getElementById('palabra');
    const nuevaPalabra = document.getElementById('nueva');
    const verSolucion = document.getElementById('solucion');
    const finalizarJuego = document.getElementById('finalizar');
    
    function desordenarPalabra(palabra) {
      return palabra.split('').sort(() => Math.random() - 0.5).join('');
    }
    
    function mostrarPalabraDesordenada() {
        palabraDesordenada = palabras[Math.floor(Math.random() * palabras.length)];
        letras.value = desordenarPalabra(palabraDesordenada);
    }
    
    function comprobarPalabra() {
      const intentos = palabra.value.trim().toUpperCase();
      if (intentos === palabraDesordenada) {
        mensaje.textContent = 'Has acertado la palabra';
        nuevaPalabra.disabled = false;
        verSolucion.disabled = true;
      }
    }

    function reiniciarJuego() {
      mostrarPalabraDesordenada();
      palabra.value = '';
      mensaje.textContent = '';
      nuevaPalabra.disabled = true;
      verSolucion.disabled = false;
    }

    function verSolucionJuego() {
      mensaje.textContent = `La palabra correcta es ${palabraDesordenada.split('').sort().join('')}`;
      verSolucion.disabled = true;
      nuevaPalabra.disabled = false;
    }
    
    nuevaPalabra.addEventListener('click', reiniciarJuego);
    verSolucion.addEventListener('click', verSolucionJuego);
    finalizarJuego.addEventListener('click', function() {
    reiniciarJuego();
    });
    
    palabra.addEventListener('input', comprobarPalabra);
    
    mostrarPalabraDesordenada();
  });
  