const Nombre = document.getElementById("Nombre");
const Emial = document.getElementById("Email");
const Enviar = document.getElementById("enviarFormulario") 

let info = [];


Enviar.addEventListener("click" , () =>  {
    console.log(Nombre.value)
});