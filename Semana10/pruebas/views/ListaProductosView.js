import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //<d>
import { obtenerProductos } from "../service/productosService";

export default function ListaProductosView() {
    const [ producto, setProductos ] = useState([]);

    const getProductos = async () => {
    };
        try {
            const productosObtenidos = await obtenerProductos();
            // console.table(productosObtenidos)
            console.table(productosObtenidos);
        } catch (error) {
            console.log(error);
        }
    
};

const verificarEliminar = async (id) => {
    const respuesta = await Swal.fire({
        icon: "warning",
        title: "Desea eliminar el producto?",
        text: "Esta acción es irreversible",
        showConfirmButton: true,
        showDenyButton: true,
        confirmButton: "Sí, Eliminar",
        denyButtonText: "No, cancelar",
    })
}

useEffect(() => {
   getProductos();
}, []);

return (
     <div>
        <h1>Productos Registrados</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(({ nombre, descripción, precio }, i) => (
                    <tr key={i}>
                        <td>{nombre}</td>
                        <td>{descripción}</td>
                        <td>{precio}</td>
                        <td>
                            <link className="btn btn-info me-2" to={`/editarproducto/${id}`}>
                                Editar
                            </link>
                            <button 
                            className="btn btn-danger"
                            onclick=
                            ></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
     </div>
);

