import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { crearProducto } from "../service/productosService";
import FormProducto from "../components/FormProducto";
import Swal from "sweetalert2";

let imagen;  //basicamente es una variable global que no esta definida

export default function CrearProductoView() {
    const [value, setValue] = useState({
    });

    const navigate = useNavigate();

    const actualizarInput = (e) => {
        e.preventDefault();

        try {
            const urlImagenSubida = await subirImagen(Imagen);
            await crearProducto(value);
            //después de que haya terminado de crear el producto
            Swal.fire({
                icon: "success",
                tittle: "Éxito",
                text: "Producto Creado",
                showComfirmButton: false, //es para que no me muestre un boton de cierre
                timer: 2000, //ms
            });
            //antes de dirigirme a navigate
            navigate("/");
        } catch (error) { 
            console.log(error);
        }
    };

    const manejarImagen = {e} => {
        e.preventDefault();
    }

    return (
        <div>
            <FormProducto value={value} actuaLizarInput={actualizarInput} manejarSubmit={manejarSubmit}/>
        </div>  )
}
