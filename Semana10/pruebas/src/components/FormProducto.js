import { useRef } from "react";

export default function FormProducto( {} ) {
    return <div>
        <form>
            <div className="mb-3">
                <label className="form-label">
                    Nombre Producto
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={value.name}
                    />
            </div>
            
            <div className="mb-3">
                <label className="form-label">
                    Descripción de Producto
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="descripcion"
                    value={value.descripcion}
                    />
            </div>
            
            <div className="mb-3">
                <label className="form-label">
                    Precio Producto
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="precio"
                    value={value.precio}
                    />
            </div>

            <div className="mb-3">
                <input className="form-label">Imagen</label>
                <input 
                types="file" 
                className="form-control" 
                ref
            </div>

        </form>
    </div>
}