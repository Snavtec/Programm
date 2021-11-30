/**
 * App.js mi js principal
 * 1. Tener mockAPI listo
 * 2. Obtener los datos (GET) fetch
 * 3. Convertir estos datos a HTML entendible por el navegador
 * ...
 */

//importar
import { obtenerProductos, crearProducto } from "./Comunicación.js"; //Importamos la función obtenerProductos
import { imprimirProductos } from "./Interfaz.js";

//variable globales - Los elementos de DOM
let bitCrear = document.getElementById("btnCrear");

let modalCrear = new bootstrap.Modal(document.getElementById)

const getProductos = async () => {
    //por eso el async
    try {
        let productosObtenidos = await obtenerProductos()
        console.log(productosObtenidos);
    } catch (error) {
        console.log(error);
    }

    }; 
        
getProductos();   

//Llamar al evento click de btnCrear
btnCrear.addEventListener("Click", () => {
    modalCrear.show();
});

btnGuardar.addEventListener("click", () => {
    let formulario = document.getElementById("formCrear");
    //NuevoProducto tiene Los datos del form
    let nuevoProducto = {
        //formulario.name_del_input.value
        nombre: formulario.nombre.value, //por el name="nombre" obtiene el valor de cada input dentro del form
        descipción: formulario.descripción.value,
        precio: formulario.precio.value,
    };
    //Utilizo crearProducto de comunicación y Le paso el objeto con La info de lo inputs
    try {
        let productoCreado = await crearProducto(nuevoProducto);
        //EXITO CREANDO EL PRODUCTO
        console.log(error); //Limpia Los campos del formulario, Los input
        formulario.reset();
        modalCrear.hide();
        getProductos();
    } catch (error) {
         console.log(error);
    }
   // console.log(nuevoProducto);
   //POST
});


