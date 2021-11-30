function clickear(){

    let dato1 = +prompt("¿Cuántos Litros de Leche ha vendido?")
    let dato2 = +prompt("¿Cuál es el precio por Galón?")
    let dato3 = dato1/3.785
    let dato4 = dato2*dato3
    
    swal(`¡LOS RESULTADOS DE SU VENTA!`,`Cantidad de Litros que produce (L):            ${dato1} Litros
    Precio del Galón (PG):                     S/. ${dato2} Nuevos Soles
    Cantidad de Galones que produce (TG):          ${dato3} Galones
    Ganancia por la entrega de leche (GA):      S/. ${dato4}.00 Nuevos Soles
    ¿Es conforme?`,{
        dangerMode: true,
        buttons: true,
    })
    .then((value) => {
        swal(`Listo!`);
      });
    }
    
    // console.log(`Cantidad de Litros que produce (L):            ${dato1} Litros
    // Precio del Galón (PG):                     S/. ${dato2} Nuevos Soles
    // Cantidad de Galones que produce (TG):          ${dato3} Galones
    // Ganancia por la entrega de leche(GA):      S/. ${dato4}.00 Nuevos Soles`)