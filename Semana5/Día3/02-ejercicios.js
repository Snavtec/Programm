let precioSimple = 5;
let precioDoble = 9;

let cantidadSimple = 0;
let vantidadDoble = 0;

let finalizar = false

do{
    let eleccion = +prompt("Ingrese 1.para una simple, 2. para una Doble y 3 para finalizar el pedido")

    switch (eleccion){
        case 1:
            console.log("Una simple!!!!")
            cantidadSimple ++;
            break;
        case 2:
            console.log("Una doble!!!!")
            cantidadDobles ++;
            break;
        default:
            console.log("Opción Incorrecta")
    }
}while(finalizar == false)

let total = precioSimple * cantidadDobles + precioDoble * cantidadDobles;

console.log(`El total a pagar sera de: ${total} por ${cantidadSimple} hamburguesas Simples y ${cantidadDobles} por hamburguesas Dobles`);

