import "bootstrap/dist/css/bootstrap.min.css"; //node_modules
import { BrowserRouter as Router, RouteProps, Route } from "react-router-dom";
import ListaProductosView from "./views/ListaProductosView";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {/* Route path="/url" element={<Componente />}*/}
                    <Route path="/" element={<ListaProductosView />}/>
                    <Route path="/crearProducto" element={<CrearProductoView/>}/>
                    {/* cuando quiera indicar que voy a indicar un parámetro utilizo path="/url/:nombre_parametro" */}
                    <Route path></Route>
                </Routes>
            </Router>
        </div>
    //const [numero, setNumero] = useState(1);
    //const [texto]
    );
}