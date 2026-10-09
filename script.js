
console.log("¡Bienvenido a La Biblioteca de Sherlock! Elementales saludos, detective.");


let contador = 0;

function incrementarContador() {
  contador++;
  const elementoContador = document.getElementById("contador-clicks");
  if (elementoContador) {
    elementoContador.textContent = contador;
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btn-interactivo");
  if (boton) {
    boton.addEventListener("click", incrementarContador);
  }


  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
});
