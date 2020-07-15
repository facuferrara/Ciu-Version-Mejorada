document.getElementById("myFormRegistration").onsubmit = function() {usuarioRegistrado()};
let usuarioGuardado =Array();

function validarUsuario(){ 
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var contraseñaRepeat = document.getElementById("contraseñaRepeat").value;
    var myFormRegistration = document.getElementById("myFormRegistration");
    var soloDigitos = /[0-9]+/;
    var caracteres = /[a-zA-Z]+/;

        if(usuario.nodeValue ===""|| contraseña ===""){
            alert("Todos los campos son obligatorios!! ");
            return false;
        }
        else if (usuario.length < 8){
            alert("El usuario debe contener 8 digitos('un Dni')");
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
        var usuarioCompleto = {usuario,contraseña}
       usuarioGuardado.push(usuarioCompleto)
                alert("Usuario creado!")
                alert(usuarioGuardado)
        
    }
}