var user = document.getElementById("usuario");
var pssw = document.getElementById("password");
//var acceder = document.getElementById("acceder");


function acceder(){
    if( !user.value || !pssw.value){
        console.log("Por favor introdue tu usuario y contrasenia.");
        
    } else {
    
        console.log("Hello friend.");
        console.log("You're "+user.value+" and your password is "+pssw.value);
    }

}

/*
acceder.addEventListener("click", function () {
    console.log("Hello there.");
    console.log("You're "+user.value+" and your password is "+pssw.value);
    
    
});*/
    