var cuadro = document.getElementById("pruebas");

cuadro.addEventListener("keypress",function(e){
    switch(e.charCode){
        case 114:
            cuadro.className = "rojo";
            break;
        case 97:
            cuadro.className = "amarillo";
            break;
        case 98:
            cuadro.className = "blanco";
            break;
        default:
            console.log("Pulsa las teclas 'R' para el color rojo, 'A' para el color amarillo o 'B' para el color blanco.");
    }
});