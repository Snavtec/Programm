let divContenido = document.getElementById("contenido");

let miBoton = document.createElement("button");

miBoton.innerHTML = "Clickeame!";

divContenido.appendChild(miBoton);

//elelementoHTML, addEventListener("evento", function()(); 
miBoton.addEventListener("click", function (){
    alert("Haz hecho click!");
});

let películas = [  
    "Parasite",
    "Shang chi",
    "Interstellar",
    "Matrix",
    "El bueno, el malo y el feo",
    "Geo tormenta",
    "Jhon Wick",
    "Constantine",
    "Godfather",
    "El Señor de los anillos",
];

peliculas.forEach(function(peli) {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo,innerHTML = peli;
    divContenido.appendChild(nuevoParrafo);

    nuevoParrafo.style.cursor = "pointer";

    nuevoParrafo.addEventListener("dblclick", function () {
        alert(`Hiciste click en ${peli}`);
        nuevoParrafo.style.backgroundColor = "steelblue";
    });
});

//
let minput = document .createElement("input");
minput.setAttribute("type", "password");
divContenido.appendChild(minput);

let btnVer = document.createElement("button");
btnVer.innerText = "Ver";
divContenido.appendChild(btnVer);

let esVisible = false; //flag

btnVer.addEventListener("click", function () {
    esVisible = !esVisible;
    if (esVisible == false) {
        minput.setAttribute("type", "text");
    }else{
        minput.setAttribute("type", "password");
    }
});

//Capturar eventos

let irAGoogle = document.createElement("a");

irAGoogle.setAttribute("href", "https://google.com");

irAGoogle.innerText = "Llevame a Google";

divContenido.appendChild(irAGoogle);

///----
//previene la acción por defecto de un evento, preventDefault()
irAGoogle.addEventListener("click", function (evento) {
    evento.preventDefault();
    console.log(evento);
});

//Capturar primero el formulario
let miFormulario = document.getElementById("formulario");

//submit, es la acción de enviar datos
miFormulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    console.log("Submiiit!!!");
    //vamos a hacer envio de datos Javascript
    let nuevoUsuario = {
        //he obtenido los datos de los input
        // formulario.nombre_input.value
        nombres: miFormulario.nombres.value,
        apellidos: miFormulario.apellidos.value,
    };
    console.log(nuevoUsuario);
});