document.getElementById("myForm").onsubmit = function() {isUsuarioAceptado()};
function validarUsuario(){ 

    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var soloDigitos = /[0-9]+/;
    var caracteres = /[a-zA-Z]+/;
    
        if(usuario.nodeValue ===""|| contraseña ===""){
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if (!soloDigitos.test(usuario)){
            alert("El usuario tiene que contener digitos unicamente");
            return false;
        }
        else if (contraseña.length < 6){
            alert("La contraseña tiene que tener al menos 6 caractes");
            return false;
        }
        else if (!(caracteres.test(contraseña) && soloDigitos.test(contraseña))){
            alert("La contraseña tiene que contener una letra y un numero");
            return false;
        }
        else if (usuario.length < 8){
            alert("El usuario debe ser un Dni('8 digitos)");
            return false;
        }
        else 
        {
            return true;
        }
}

function isUsuarioAceptado(){
    if(validarUsuario()){
            return  document.getElementById("myForm").action = "Menu/index.html" 
    }
    else
    {
        alert("Usuario no aceptado");
    }
}