var datosATraer = document.querySelector("#datos_atraer_usuarios");
var nuevo_usuario = document.getElementById("nuevo_usuario");
var checkbox = document.querySelectorAll('input[type=checkbox]'); 
var eliminarSolicitud = document.getElementById("eliminar_usuario");
var botonEnviar = document.getElementById("enviar");
var menu = document.querySelector(".menuDesplegableUsuario");
var habilitarMenuNuevaSolicitudes = document.querySelector(".isNuevoUsuario"); 
var misImagenes=[]
function cargarImg()
{
    for (let index = 0; index < 16; index++) {
        misImagenes.push(`../imagenes/avatars/${index+1}.png`)
    }
    
}
function salir(){
    
    window.location.href = "../index.html";
}

function habilitarMenuNuevaSolicitud(){

    habilitarMenuNuevaSolicitudes.classList.toggle("isNuevoUsuario");
    habilitarMenuNuevaSolicitudes.classList.toggle("prueba");
}


function nuevaSolicitud(){

    
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
        if(document.getElementsByName('descripcion').length!==numeroDeFilas)
        {
            borrarTexto("#textoNuevoUsuario");habilitarMenuNuevaSolicitud()
    }
    
}

function  habilitarMenu(){

    menu.classList.toggle("menuDesplegableUsuario");
    menu.classList.toggle("prueba");
}

function borrarTexto(id){

    document.querySelector(id).value = ``
}



function botonEliminar(){

    var checkboxes = document.getElementsByName('check');
    for (let i = 0; i <  checkboxes.length; i++) {
        var filas = document.getElementsByName('filas');
        if(checkboxes[i].checked)
            {
                filas[i].remove();
            }
    }
}

 function modificarSolicitudes(){

    
    var descripcion = document.getElementsByName('descripcion');
    var checkboxes = document.getElementsByName('check');
    for (let i = 0; i <  checkboxes.length; i++) {
        if(checkboxes[i].checked)
            {
                var textoViejo = descripcion[i].value;
                    descripcion[i].innerHTML=`${document.querySelector("#textoSolicitud").value}`
                        if(textoViejo!==descripcion[i]){borrarTexto("#textoSolicitud");habilitarMenu();}
            }
    }
}

//funcion para agregar el check dentro de los users

function onlyOne(checkbox) {
    var checkboxs = document.getElementsByName('check')
    checkboxs.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function traer(){

      fetch('index.json')
      .then(res => res.json())
        .then(datos =>
            {
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

cargarImg()
console.log(misImagenes)