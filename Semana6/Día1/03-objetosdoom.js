//window.console.log("Hola");

//Info del navegador
console.log(`Info Navegator: ${window.navigator.userAgent}`);

//Cuál es mi url
console.log(`URL: ${window.location}`);

navigator.geolocation.getCurrentPosition(function (ubicación) {
    console.log(ubicación);
});
//Javascript a traves del objeto window
//window = pestaña del navegador

console.log(window.document);

//estoy capturando un elemento
let miTitulo = document.querySelector("h1");

console.log(miTitulo);

//innerHTML, es el contenido HTML de un elemento
miTitulo.innerHTML = "Hola soy un nuevo Titulo";

//El HTML DENTRO DE LA ETIQUETA
console.log(miTitulo.innerHTML);

//Obtener un elemento
let miCaja = document.getElementById("caja");

console.log(miCaja);

//innerHTML, representa el contenido HTML de un elemento
miCaja.innerHTML = "<h2>Título Caja</h2>";

miCaja.style.backgroundColor = "purple";
miCaja.style.color = "white";

let misitems = document.getElementsByClassName("lista_items");

console.log(misitems);

//Array.from(htmlcollection), crea un arreglo
let arregloitems = Array.from(misitems);

console.log(arregloitems);

//Anotación importante acerca de forEach, map, filter, find 
arregloitems.forEach(function (items, indice) {
    item.style.backgroundColor = "skyblue";
    item.innerHTML = `"Patata" ${indice}`;
    console.log("mostrando el arreglo", conjunto);
});

let miTexto = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach(function (bx) {
    bx.innerHTML = `<p>Soy un párrafo</p>`;
});

console.log(boxes[0].innerHTML);

//CREAR ELEMENTOS
let series = [
    "Squid Game",
    "Pasión de Gavilanes",
    "Dark",
    "Billions",
    "Got",
    "Suits",
    "Mr. Robot",
    "House of dragons",
    "Chernobyl",
    "Breaking Bad",
    "Lupin",
];

let divContenido = document.getElementById("contenido");

let lista = document.createElement("ul");


divContenido.aprendChild(lista);

let textoLI = "";
series.forEach(function (programaTv) {
    textoLI = textoLI + `<li>${programaTv}</li>`;
});

// console.log(textoLI);

lista.innerHTML = textoLI;

let imagen = document.createElement("img");

divContenido.appendChild(imagen);

imagen.setAttribute("src", "https://picsun.photos/200/300");

//clases de CCS
//a un elemto le podemos aplicar varias clases
//add "nombredelaclase"
lista.classList.add("resaltado");
lista.classList.add("redondeado");
//lista.classList.add("verdecito");
lista.classList.remove("resaltado");

