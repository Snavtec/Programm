//Inventarios

/**
 *  Una bodega quiere hacer un inventario de sus productos.
 * Actualmente vende 03 productos, gaseosas, leche, galleta.
 * 
 * queremos saber por cada tipo de producto, cuantos tiene en existencia
 * 
 * eso sí, sabemos el total de productos pero no su contidad correspondiente a cada tipo
 */

/**
 * Descomposición
 * 
 * Manejamos 03 productos
 * Dice que sabemos el total de todo pero no el tipo
 * Tendremos que preguntar producto por producto
 */

/**
 * a) Que datos necesito?
 * total de gaseosa + leche + galletas
 * b) de donde obtengo esos datos?
 * se los pregunto al usuario prompt
 * c) estan de la forma que necesito?
 * necestio contar 1 x 1, number
 */

let cantProductos = +prompt("Cuantos productos en total tienes?");

let gaseosa = 0;
let leche = 0;
let galletas = 0;

for(let i = 0; i < cantProductos; i++){
    let producto = +prompt("Ingresa 1.Gaseosa 2.Leche 3.Galletas");

    switch(producto){
        case 1:
            gaseosa = gaseosa + 1;
            break;
        case 2:
            leche++;
        case 3:
            galletas++;
            break;
        default:
            alert("Numero erroneo")
    }
}

console.log(`En total hay:
                Gaseosa: ${gaseosa}
                Leche:   ${leche}
                Galletas: ${galletas}`)