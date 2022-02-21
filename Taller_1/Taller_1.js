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

var dec = document.getElementById("dec_b");

var barra = document.getElementById("barra_numerica");

var mas = document.getElementById("mas_b");
var menos = document.getElementById("menos_b");
var igual = document.getElementById("igual_b");

cero.onclick = function() {
    barra.setAttribute("value", barra.value+"0");
}

uno.onclick = function() {
    barra.setAttribute("value", barra.value+"1");
}

dos.onclick = function() {
    barra.setAttribute("value", barra.value+"2");
}

tres.onclick = function() {
    barra.setAttribute("value", barra.value+"3");
}

cuatro.onclick = function() {
    barra.setAttribute("value", barra.value+"4");
}

cinco.onclick = function() {
    barra.setAttribute("value", barra.value+"5");
}

seis.onclick = function() {
    barra.setAttribute("value", barra.value+"6");
}

siete.onclick = function() {
    barra.setAttribute("value", barra.value+"7");
}

ocho.onclick = function() {
    barra.setAttribute("value", barra.value+"8");
}

nueve.onclick = function() {
    barra.setAttribute("value", barra.value+"9");
}

mas.onclick = function() {
    barra.setAttribute("value", barra.value+"+");
}

menos.onclick = function() {
    barra.setAttribute("value", barra.value+"-");
}

dec.onclick = function() {
    barra.setAttribute("value", barra.value+".");
}

igual.onclick = function() {
    let cadena = barra.getAttribute("value");
    /*EXTRACT ALL OPERANDS FROM THE STRING AND THEIR SIGN*/
    const operandos = [];
    let operando = "";
    for (let idx = 0; idx < cadena.length; idx++) {
        if (cadena[idx]=="+") {
            operandos.push(operando);
            operando = "";
        } else if (cadena[idx]=="-") {
            operandos.push(operando);
            operando = "-";
        } else {
            operando += cadena[idx];
        }
    }
    if (operando.length > 0) {
        operandos.push(operando);
    }

    /*SUM ALL ELEMENTS IN THE ARRAY*/
    let suma = 0
    for (let idx = 0; idx < operandos.length; idx++) {
        let operando = operandos[idx];
        if (operando.length) {
            suma += parseFloat(operando);    
        }
    }
    
    /*alert("Resultado: "+suma);*/
    barra.setAttribute("value", suma);
}