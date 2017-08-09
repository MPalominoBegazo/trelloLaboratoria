//VARIABLES GLOBALES
var tareas = [];
var id=0;
var btnAdd = document.getElementById("Add"); 
var btnDesplegar = document.getElementById("addList");
var lista = document.getElementById("lista");
var resultado = document.getElementById("desplegar");
var btnListar = document.getElementById("buttonList");

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
   // btnListar.style.display = "none";
    resultado.style.display = "block";

}

//BOTON AÑADIR TAREA
btnAdd.onclick = function (){
    id++;
    var inputTask = document.getElementById("task").value;
    var task = new Tarea(inputTask,id);
    tareas.push(task);
    printHTML(task.toHTML());
    printHTML(mergeHTML());
    document.getElementById("task").value = "";

}   
