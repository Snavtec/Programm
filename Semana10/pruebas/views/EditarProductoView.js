import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import FormProducto from "../components/FormProducto"; 
import { obtenerProductoPorId } from "../services/productosService";
import { useNavigate } from "react-router";
import Swal from "sweetaltert2";

export default function EditarProductoView() {
    const [value, setValue] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
    });

    const { id } = useParams(); //1. con esto tenemos la id de la url
    //console.log{( id )};
    const navigate = useNavigate();
    
    const getProducto = async () => {
        try {
            const prodObtenido = await obtenerProductoPorId(id); //2.Obtiene
            setValue(prodObtenido); //2.1 La rpta de mockapi La ponga en el 
        } catch 
    };
    const manejarSubmit = async (e) => {
        e.preventDefault();
        try {
            await editarProductoPorId(id, value);
            await Swal.fire({ 
                icon: "success",
                title: "Éxito",
                text: "Producto Editado Exitosamente",
            });
            navigate 
        }
    }
        try {
            const prodObtenido = await obtenerProductoPorId(id);
            setvalue 
        }
    }
    return 
        <div>
            
        </div>;
    
}

const actualizarInput = (e) => {
    console.log(e.target.name, e.target.value);
    setValue({
        value, //cogiendo el estado de value, spreadoperator
        [e.target.name]: e.target.value,
    });
};
useEffect(() => {
    getProducto(); //3. con un useEffect Llamamos a la función que me trae 01 producto por su ID

}, []);

return (
    <div>
        <FormProducto value={value}
        actuaLizarInput={actualizarInput}
        manejarSubmit={manejarSubmit} />
    </div>
);