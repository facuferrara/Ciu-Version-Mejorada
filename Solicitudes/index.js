var datosFrontEnd = document.querySelector("#datos_atraer");
var nueva_solicitud = document.getElementById("nueva_solicitud");
var checkbox = document.querySelectorAll('input[type=checkbox]'); 
var eliminarSolicitud = document.getElementById("eliminar_solicitud");
var botonEnviar = document.getElementById("enviar");
var menu = document.querySelector(".menuDesplegable");
var habilitarMenuNuevaSolicitudes = document.querySelector(".isNuevaSolicitud");

function salir()
{

    window.location.href = "../index.html";
}
function habilitarMenuNuevaSolicitud()
{
    habilitarMenuNuevaSolicitudes.classList.toggle("isNuevaSolicitud");
    habilitarMenuNuevaSolicitudes.classList.toggle("prueba");
}
function nuevaSolicitud()
{
    var numeroDeFilas = document.getElementsByName('descripcion').length;
    datosFrontEnd.innerHTML +=
    `
    <tr id="${document.getElementsByName('descripcion').length} "name="filas">
        <th class="descripcion"  name="descripcion">${document.querySelector("#textoNuevaSolicitud").value}</th>
        <th>${false}</th>
        <th>${hora.innerHTML}</th>
        <th><input type="checkbox"  name="check" onclick="onlyOne(this)"></th>
     </tr>  
    `;
        if(document.getElementsByName('descripcion').length!==numeroDeFilas)
        {borrarTexto("#textoNuevaSolicitud");habilitarMenuNuevaSolicitud()}
    
}

function  habilitarMenu()
{
    menu.classList.toggle("menuDesplegable");
    menu.classList.toggle("prueba");
}
function borrarTexto(id)
{
    document.querySelector(id).value = ``
}
function botonEliminar()
{
    var checkboxes = document.getElementsByName('check');
    for (let i = 0; i <  checkboxes.length; i++) {
        var filas = document.getElementsByName('filas');
        if(checkboxes[i].checked)
            {
                filas[i].remove();
            }
    }
}
 function modificarSolicitudes()
{
    
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

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
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
function tabla(datos)
{
    var contadorTr =0;
    for (let valor of datos) {
        datosFrontEnd.innerHTML +=
        `
        <tr id="${contadorTr} "name="filas">
            <th class="descripcion"  name="descripcion">${valor.Descripción}</th>
            <th>${valor.Estado}</th>
            <th>${valor.Fecha}</th>
            <th><input type="checkbox"  name="check" onclick="onlyOne(this)"></th>
         </tr>  
        `
        contadorTr++;
    }
}
//NUEVA SOLICITUD
var hora = document.getElementById("fecha");
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
showTime();