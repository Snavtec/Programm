let ShopLift = [
    {
        id: 1,
        nombre: "Razer Raptor 27'",
        descripcion: "QHD (2560 x 1440) - 165Hz THX",
        precio: 470.0,
        stock: 3,
        imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/07/analisis-razer-raptor-27-2021-2420571.jpg?itok=SC1UHjll",
    },
    {
        id: 2,
        nombre: "Samsung Odyssey Neo G9",
        descripcion:
            "Dual QuadHD 1000R curve Mini LED - 240Hz",
        precio: 2500.0,
        stock: 3,
        imagen: "https://assets-prd.ignimgs.com/2021/08/04/samsung-odyssey-neo-g9-blogroll-1628088383960.jpg",
    },
    {
        id: 3,
        nombre: "LG UltraGear",
        descripcion: "Pantalla Nano IPS 38' 21.9 curvada WQHD+ (3840 X 1600) - 144 Hz/ 175 Hz",
        precio: 2076.0,
        stock: 3,
        imagen: "https://www.lg.com/hk_en/images/MN/features/MNT-38GN950-09-02-2-Sphere-Lighting-Video-Sync.jpg",
    },







    /*{
        id: 4,
        nombre: "Pizza de la casa",
        descripcion: "Pizza con recetea original de la casa",
        precio: 14.0,
        stock: 7,
        imagen: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 5,
        nombre: "Ceviche de la casa",
        descripcion: "Plato Bandera Peruano acompañado con bebida a elección",
        precio: 20.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 6,
        nombre: "Ramen Fusión",
        descripcion: "Ramen preparado con ingredientes Peruanos",
        precio: 19.0,
        stock: 6,
        imagen: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },*/
];

function addProduct(item)
{
    let tresumen = document.getElementById("tbody-resumen");
    let resumen = document.createElement("tr");

    resumen.innerHTML = `<td>Total</td>
        <td></td>
        <td></td>
        <td class="totalPagar"></td>`;
    tresumen.appendChild(resumen);

    let miMain = document.getElementById("contenido");

    for (let i = 0; i < item.length; i++) {
        let miTarjeta = document.createElement("div");

        miTarjeta.classList.add("tarjeta");
        miMain.appendChild(miTarjeta);

        let miImagen = document.createElement("div");

        miImagen.classList.add("imagen");
        miTarjeta.appendChild(miImagen);

        let miImg = document.createElement("img");

        miImg.setAttribute("src",`${item[i].imagen}`);
        miImagen.appendChild(miImg);

        let miTexto = document.createElement("div");

        miTexto.classList.add("texto");
        miTarjeta.appendChild(miTexto);
        miTexto.innerHTML = `<h4>${item[i].nombre}</h4>
        <p>${item[i].descripcion}</p>`;

        let miPrecio = document.createElement("div");

        miPrecio.classList.add("precio");
        miTexto.appendChild(miPrecio);
        miPrecio.innerHTML = `<span>S/ ${item[i].precio}</span>`;

        let miBoton = document.createElement("button");

        miBoton.classList.add("btn-agregar", `boton${i}`);
        miPrecio.appendChild(miBoton);
        miBoton.innerText = "Agregar";
        carritoPC(item, i);
        sumaDeTotales(item, i);
    }
}

function carritoPC(item, i)
{
    miBoton = document.querySelector(`.boton${i}`);

    let tbody = document.getElementById("tbody-carrito");
    let evento = true;

    miBoton.addEventListener('click' ,function() {
        if (evento === true) {
            let tr = document.createElement("tr");

            tr.innerHTML = `<td>${item[i].nombre}</td>
                <td class="cantidad${i}">1</td>
                <td>${item[i].precio}</td>
                <td class="pagar${i}">${item[i].precio}</td>`;
            tbody.appendChild(tr);
            evento = false;
            agregarLS(item, i);
        }
    });
}

let sumaTotal = 0;

function sumaDeTotales(item, i)
{
    let total = 0;

    miBoton.addEventListener('click', function() {
        total++;

        let tdvalor = document.querySelector(".totalPagar");
        let cantidad = document.querySelector(`.cantidad${i}`);
        let pagar = document.querySelector(`.pagar${i}`);
        cantidad.innerText = `${total}`;
        pagar.innerText = `${total * item[i].precio}`;
        sumaTotal = sumaTotal + item[i].precio;
        tdvalor.innerText = `${sumaTotal}`;
    });
}

let array = [];

function agregarLS(item, i)
{
    array.push(item[i].nombre,item[i].precio);

    let arrJSON = JSON.stringify(array);

    localStorage.setItem("Productos", arrJSON);
}
addProduct(ShopLift);