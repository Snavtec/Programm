const obtenerProductos = async() => {
    try {    
        let rpta = await fetch("https://616b5ead16c3fa001717167c.mockapi.io/productos");
        let productos = await rpta.json();
        console.table(productos);
    } catch (error) {
        console.log(error);
    }

};


//he creado un selector para la etiqueta body </body>
let body = document.querySelector("body")

obtenerProductos().then((misProductos) => {
    let htmlProductos = '';
    misProductos.forEach(prod => {
        htmlProductos = htmlProductos + 
        `
        <tr>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
        </tr>
    `;
    });

})