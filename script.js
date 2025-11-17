let flipped = false;

function flipCard() {
  const card = document.getElementById("cardInner");
  if (!flipped) {
    card.style.transform = "rotateY(180deg)";
    flipped = true;
  } else {
    window.location.href = "fase1.html"; // redirige al segundo HTML
  }
}
function nextPhase(page) {
  window.location.href = page;
}

// Texto romántico
const texto = "Hace un mes, nuestras miradas se cruzaron con la promesa de algo hermoso. \
Desde entonces, cada día contigo ha sido un regalo, una chispa, una canción que no deja de sonar en mi corazón. \
Gracias por tu ternura, por tu risa, por cada instante compartido. \
Este primer mes es solo el prólogo de una historia que quiero escribir contigo, página por página, abrazo por abrazo. \
💖 Feliz primer mes, mi amor. Que vengan mil más, contigo a mi lado.";

let i = 0;
function escribir() {
  if (i < texto.length) {
    document.getElementById("mensaje").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribir, 50); // velocidad de escritura
  }
}

document.addEventListener("DOMContentLoaded", escribir);
