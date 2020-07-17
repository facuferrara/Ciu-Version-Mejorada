var datosATraer = document.querySelector("#datos_atraer_usuarios");
var nuevo_usuario = document.getElementById("nuevo_usuario");
var checkbox = document.querySelectorAll('input[type=checkbox]'); 
var eliminarSolicitud = document.getElementById("eliminar_usuario");
var botonEnviar = document.getElementById("enviar");
var menu = document.querySelector(".menuDesplegableUsuario");
var habilitarDeNuevoUser = document.querySelector(".queryNuevoUsuario"); 
var misImagenes=[]

//Nuevas solicitudes  datos actualizados de la fecha mes y año
var hora = document.getElementById("fechaUser");
function showTime(){
    myDate = new Date();
    dia = myDate.getDate();
    mes = myDate.getMonth()+1;
    año = myDate.getFullYear();
    
    
    if (dia < 10) dia = 0 + dia;
    if (mes < 10) mes = "0" + mes;
    if (año < 10) año = "0" + año;
    hora.innerHTML =`${dia}/${mes}/${año}`;
    setTimeout("showTime()", 5000);
    
}

function salir(){
    //redirecciona al index del inicio/LOGIN
    window.location.href = "../index.html";
}

function habilitarMenuNuevoUser(){
    //devuelve una colección activa de DOMTokenList de los atributos de clase del elemento.
    habilitarDeNuevoUser.classList.toggle("queryNuevoUsuario");
    
}

function  habilitarMenu(){

    menu.classList.toggle("menuDesplegableUsuario");
    
}

function borrarTexto(id){

    document.querySelector(id).value = ``
}


function nuevoUser(){

    var numeroDeFilas = document.getElementsByName('descripcion').length;
    datosATraer.innerHTML +=
    `
    <tr id="${document.getElementsByName('descripcion').length} "name="filas"> 
        <th><img width="40" height="40" src="${misImagenes[Math.round(Math.random()*15)]}"></img></th>
        <th class="descripcion"  name="descripcion">${document.querySelector("#textoNuevoUsuario").value}</th>
        <th>${false}</th>
        <th><input type="checkbox"  name="check" onclick="onlyOne(this)"></th>
     </tr>  
    `;
        if(document.getElementsByName('descripcion').length!==numeroDeFilas){
            borrarTexto("#textoNuevoUsuario");habilitarMenuNuevoUser()
    }
    
}


// Botones -->>

function botonEliminar(){

    var checkboxes = document.getElementsByName('check');

    for (let i = 0; i <  checkboxes.length; i++) {
        var filas = document.getElementsByName('filas');
        if(checkboxes[i].checked){
                filas[i].remove();
            }
    }
}

 function modificarUser(){

    var descripcion = document.getElementsByName('descripcion');
    var checkboxes = document.getElementsByName('check');

    for (let i = 0; i <  checkboxes.length; i++){
        if(checkboxes[i].checked){
            var textoViejo = descripcion[i].value;
                descripcion[i].innerHTML=`${document.querySelector("#textoModifUser").value}`
                    if(textoViejo!==descripcion[i]){borrarTexto("#textoModifUser");habilitarMenu();}
            }
    }
}

//check individual

function onlyOne(checkbox) {
    var checkboxs = document.getElementsByName('check')
    checkboxs.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

//funcion para traer el avatar de forma random
function cargarAvatar(){

    for (let index = 0; index < 16; index++){
        misImagenes.push(`../imagenes/avatars/${index+1}.png`)
    }
    
}

function traerJson(){

      fetch('index.json')
      .then(res => res.json())
        .then(datos => {
                tabla(datos);
             })
}

function tabla(datos){
    
    var contadorTr =0;
    for (let valor of datos) {
        datosATraer.innerHTML +=
        `
        <tr id="${contadorTr} "name="filas">
            <th  ><img width="40" height="40" src="${misImagenes[Math.round(Math.random()*15)]}"></svg></th>
            <th class="descripcion" name="descripcion">${valor.Nombre}</th>
            <th>${valor.Activo}</th>
            <th><input type="checkbox"  name="check" onclick="onlyOne(this)"></th>
         </tr>  
        `
        contadorTr++;
    }
}

cargarAvatar()