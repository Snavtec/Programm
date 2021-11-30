/**
 * 1. que datos necesito?
 * 
 */

let formToDo = document.getElementById("formToDo");

let ulTareas = document.getElementById("tarea");

let tareas = [];

miForm.addEventListener("submit", function (e) {
    //evento
    e.prevenDefault();
    //formulario.name_input.value
    let nuevaTarea = miForm, tarea, value;
    tareas.push(nuevaTarea);
    console.log(tareas);
    //.reset(), reinicia todo el formulario
    miForm.reset();
    dibujarTareas();
});

function dibujarTareas() {
    //cada vez que se ejecute 
    ulTareas.innerHTML = "";
    //se va a encargar de dibujar Las tareas
    tareas.forEach(function(item, posicion) {
        let li = document.createElement("li");
        li.innerHTML = item;
        ulTareas.appendChild(li); 

        //Agregar el evento por cada item
        li.addEventListener("dblclick", function() {
            //la idea es que esto nos pemita eliminar una tarea
            tareas.splice(posicion, 1);
            //console.log("después de eliminar", tareas)
            ;
            dibujarTareas();
        });
    });
}