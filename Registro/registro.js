document.getElementById("myFormRegistration").onsubmit = function() {usuarioRegistrado()};
let usuarioGuardado =Array();

var usuario = document.getElementById("usuario").value;
var contraseña = document.getElementById("contraseña").value;
var contraseñaRepeat = document.getElementById("contraseñaRepeat").value;

var soloDigitos = /[0-9]+/;//del 0 al 9
var caracteres = /[a-zA-Z]+/;

var error= document.getElementById('error');
error.style.color = 'red';


function validarUsuario(){ 
            
    if (usuario.value == null || usuario.value===""   ){
        alert("Todos los campos son obligatorios"); 
        
    }
    else if (contraseña.value == null || contraseña.value===""   ){
        alert("Todos los campos son obligatorios"); 
        
    }
        
    else if (usuario.length < 8){
        alert("El usuario debe contener almenos 8 digitos");
        return false;
    }
    else if (contraseña.length < 6){
        alert("La contraseña tiene debe contener al menos 6 caractes");
        return false;
    }
    else if (!soloDigitos.test(usuario)){
        alert("El usuario debe contener unicamente digitos ");
        return false;
    }
    else if (!(caracteres.test(contraseña) && soloDigitos.test(contraseña))){
        alert("La contraseña debe contener almenos una letra y un numero");
        return false;
    }
    else if (!(contraseña == contraseñaRepeat)){
        alert("La contraseñas no son identicas")
        return false;
    }
    else{
        return true;
    }
}







function usuarioRegistrado(){

    if(validarUsuario()){

        var usuario = document.getElementById("usuario").value;
        var contraseña = document.getElementById("contraseña").value;
        var usuarioYContraseña = {usuario,contraseña}
       usuarioGuardado.push(usuarioYContraseña)
                alert("Usuario creado!")
                alert(usuarioGuardado)
        
    }
}
