let nombre = prompt("Ingresa tu nombre");

//.setItem("nombre de lo que guardo", "valor de lo guardado")
localStorage.setItem("nombreUsuario", nombre);

setTimeout(function() {
    //Leer contenido del LocalStorage
    //.getItem("nombre_algo_guardado_en_el_LS")
    let obtenido = localStorage.getItem("nombreUsuario");
    alert(obtenido);
},4000);

setTimeout(function() {
    //eliminar algo
    //removeItem("nombreUsuario");
    localStorage.removeItem("nombreUsuario");
},12000);

setInterval(function(){
    console.log(Holaaaaaa);
}, 1000);


//function inicio() {}

//inicio()

//ejecuta algo en un intervalo, de forma periódica
//setInterval

let objeto = {
    modelo: "Iphone",
    pantalla: 6.5,
    colores: ["blanco", "dorado", "negro"],
    año: 2021,
};

let objAJson = JSON.stringify(objeto);

console.log(objAJson);

console.log(typeof objAJson);

localStorage.setItem("objeto", objAJson);

setTimeout(function () {
    let jsonObtenido = localStorage.getItem("objeto");
    //convertirlo de nuevo a un objeto de JS
    //.parse() recibe Texto y lo va a transformar en JS
    console.log(jsonObtenido);
}