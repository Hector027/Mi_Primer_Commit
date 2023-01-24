
// Comentario una sola linea

/**
 * Comentario multi linea
 * 
 */

document.getElementById("boton").onclick = function () {
console.log ("Capturamos Evento");
document.getElementById("demo").innerHTML="Estamos Probando";
}

document.getElementById("botonCambiar").onclick = function () {
    document.body.style.backgroundColor = 'green';
}

document.getElementById("botonRestablecer").onclick = function () {
    document.body.style.backgroundColor = 'aquamarine';
}

document.getElementById("botonTexto").onclick = function () {
    document.getElementById ("demo").style.display = 'none';
    document.getElementById ("p1").style.display = 'none';
    document.getElementById ("p2").style.display = 'none';
}

const collection = document.getElementsByTagName("P");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "yellow";
}
