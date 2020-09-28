console.log("Hola mundo");

var nombre = document.getElementById("name");
var mail = document.getElementById("mail");
var telefono = document.getElementById("phone");
var mensaje = document.getElementById("mssg");

var form = document.getElementById("form");

form.addEventListener('submit', function(e){
    if ( !nombre.value || !mail.value || !telefono.value || !mensaje.value){
        alert("Por favor, llene todos los campos.");
        e.preventDefault();
    } else {
        alert("Mensaje enviado correctamente.")
    }
    
}); 