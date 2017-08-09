//VARIABLES GLOBALES
var tareas = [];
var id=0;
var btnAdd = document.getElementById("Add"); 
var btnDesplegar = document.getElementById("addList");
var lista = document.getElementById("lista");
var resultado = document.getElementById("desplegar");
var btnListar = document.getElementById("buttonList");
var imgClose = document.getElementById("close");

//OBJETO
function Tarea(nameTask, taskID){
    this.nameTask = nameTask;
    this.taskID = taskID;

}

Tarea.prototype.toHTML = function () {
  var html = '';
  html += this.nameTask.toUpperCase() + '<br>';
  html += '<br>';
  return html;
}

function mergeHTML (){
  var html = '';
  for (i=0; i<tareas.length; i++){   
    html += tareas[i].toHTML();  
  }
  return html;
}

function printHTML (html){
  lista.innerHTML = '';
  lista.innerHTML = html;  //variable mal escrita htm
}
//BOTON PARA MOSTRAR AÑADIR TAREA
btnDesplegar.onclick = function (){
    resultado.style.display = "block";
    //btnListar.style.display = "none";
}

//BOTON AÑADIR TAREA
btnAdd.onclick = function (){
    var crearLista = document.getElementById("resultado");
    id++;
    var inputTask = document.getElementById("task").value;
    var task = new Tarea(inputTask,id);
    tareas.push(task);
    //creamos un DIV para la lista creada
    var divLista = document.createElement("div");
    divLista.setAttribute("id",inputTask);

    //creamos los elementos del Div
    var par = document.createElement("p");
    par.setAttribute("class", "ParrafoLista");
    par.setAttribute("textContent",inputTask);

    
    resultado.appendChild(divLista);
    document.getElementById("task").value = "";

}   

//Eliminar
imgClose.onclick = function(){
    resultado.style.display = "none";

}



