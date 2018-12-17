var formulario = document.getElementById("contacto");
var nombre = document.getElementsByName("nombre").values;
var correo = document.getElementsByName("correo").value;
var mensaje = document.getElementsByTagName("textarea").value;

formulario.addEventListener("submit",function(){
    if(nombre == null){
        alert("El campo nombre esta vacio.");
    }
});

/*
Binliografia
https://librosweb.es/libro/javascript/capitulo-7/validacion.html
*/