import axios from "axios"; //fetch pero mejor

//conjunto de funciones para hacer peticiones

const URL = "https://616b5ead16c3fa001717167c.mockapi.io/producto";

const obtenerProductos = async () => {
    try {
        const { data } = await axios.get(URL);
        // console.log(rpta);
        return data;
    } catch (error) {
        throw error;
    }
};

const crearProducto = async () => {
    try {
        const { data } = await axios.get(URL);
        //console.log(rpta);
        return data;
    } catch (error) {
        throw error; //reject
    }
};

const crearProducto = async (nuevoProducto) => {
    try {
        const headers = {
            "content-Type": "application/json"
        }
        //axios siempre me va a devolver La prioridad data, donde esta la rpta del servidor
        //axios cuando hace POST, PUT necesita no sale La URL
        //axios.post(URL, objACrear, {headers})
        const  { data } = await axios.post(URL, nuevoProducto, { headers });
        return data;
    } catch (error) {
        throw error;
    }
};

const obtenerProductoPorId = async (id) => {
    try {
        const { data } = await axios.get(`$(URL)/$(id)`);
        return data;
    } catch (error) {
        throw error;
    }
};

const editarProductoId = async (id, objProducto) => {
    try {
        const headers = {
            "content-Type": "application/json"
        };
        await axios.put(`${URL}/$(id)`, objProducto, [ headers ]);
    } catch (error) {
        throw error;
    }
};

const subirImagen = (imagen) => {
    //
    let refStorage = storage.ref('fotos/${imagen.none}');
    let tareaSubir = refStorage.put(imagen);

    tareaSubir.on(
        "state_changed",
        () => {},
        (error) => {
            PromiseRejectionEvent(error);
        },
        () => {
            tareaSubir.snapshot.ref.getDownloadURL().then(urlImagen) => {
                resolve(urlImagen);
            };
        }
    )
}

const eliminarProducto = async 

export { obtenerProductos };