var valor = window.setInterval(cambiarCirculo,3000);
var numInicial = 1;

function cambiarCirculo(){
    quitarCirculo(numInicial);
    var numero = Math.floor(Math.random() * (10 - 1) + 1);
    numInicial = numero;
    var circulo = document.getElementById(numero);
    circulo.className = "objetivo";
    circulo.addEventListener("click",function(){
        alert("Has ganado!");
    });
}

function quitarCirculo(num){
    var cir = document.getElementById(num);
    cir.className = "";
}