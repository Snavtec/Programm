// Se va a encargar de hacer peticiones

const URL = "https://616b5ead16c3fa001717167c.mockapi.io/productos";

const obtenerProductos = async () => {
    try {
        //intenta esto
        //await, Le decimos aguanta, esto se tiene que resolver
        //respuesta del fetch, me da status, 200, cabeceras del response, NO ME DA UN JSON
        const respuesta = await fetch(URL); //solamente La URL, es un GET, respuesta de la petición
        const productos = await respuesta.json(); //aqui
        return productos; //resolver(productos)
    } catch (error) {
        //y si falta me pasas La voz
        throw error;

    }
};

const crearProducto = async (objProducto) => {
    try {
        //POST
        let configuración = {
            method:"POST",
            body: JSON.stringify(objProducto), //de obj de JS Lo convertimos a JSON que es texto
            headers: { "Content-Type": "application/json" }, //API sepa como interpretarlo
        };
        const respuesta = await fetch(URL, configuration)
        const productoCreado = await respuesta.json();
        return productoCreado;
    } catch (error) {
        throw error;
    }
}; 

//este es el export
export { obtenerProductos, crearProducto };