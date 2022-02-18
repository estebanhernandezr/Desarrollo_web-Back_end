var cero = document.getElementById("cero_b");
var uno = document.getElementById("uno_b");
var dos = document.getElementById("dos_b");
var tres = document.getElementById("tres_b");
var cuatro = document.getElementById("cuatro_b");
var cinco = document.getElementById("cinco_b");
var seis = document.getElementById("seis_b");
var siete = document.getElementById("siete_b");
var ocho = document.getElementById("ocho_b");
var nueve = document.getElementById("nueve_b");

var barra = document.getElementById("barra_numerica");

cero.onclick = function() {
    barra.setAttribute("value", "0");
}

uno.onclick = function() {
    barra.setAttribute("value", "1");
}

dos.onclick = function() {
    barra.setAttribute("value", "2");
}

tres.onclick = function() {
    barra.setAttribute("value", "3");
}

cuatro.onclick = function() {
    barra.setAttribute("value", "4");
}

cinco.onclick = function() {
    barra.setAttribute("value", "5");
}

seis.onclick = function() {
    barra.setAttribute("value", "6");
}

siete.onclick = function() {
    barra.setAttribute("value", "7");
}

ocho.onclick = function() {
    barra.setAttribute("value", "8");
}

nueve.onclick = function() {
    barra.setAttribute("value", "9");
}