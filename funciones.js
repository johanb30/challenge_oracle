//variables

var texto = document.getElementById("mensaje1");
var salida = document.getElementById("input2");
var bencriptar = document.getElementById("Encriptar");
var bdesencriptar = document.getElementById("Desencriptar");

// Función de encriptar

bencriptar.addEventListener("click", encriptar);

function encriptar() {
  var letras = document.getElementById("mensaje1").value;
    letras = letras.replaceAll("e", "enter");
    letras = letras.replaceAll("i", "imes");
    letras = letras.replaceAll("a", "ai");
    letras = letras.replaceAll("o", "ober");
    letras = letras.replaceAll("u", "ufat");
    document.getElementById("input2").value = letras;
    document.getElementById("mensaje1").value = "";
     
}

  // Función de desencriptar 

bdesencriptar.addEventListener("click", desencriptar);

function desencriptar() {
var letras = document.getElementById("mensaje1").value;
 letras = letras.replaceAll("enter", "e");
 letras = letras.replaceAll("imes", "i");
 letras = letras.replaceAll("ai", "a");
 letras = letras.replaceAll("ober", "o");
 letras = letras.replaceAll("ufat", "u");
 document.getElementById("input2").value = letras;
 
}

// Función de copiar

function copiar () {
var copiartexto = document.querySelector("#input2");
copiartexto.select();
document.execCommand("copy");

}
