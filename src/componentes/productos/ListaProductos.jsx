import { fetchProductos } from "./API"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './productos.css'


function ListaProductos() {
const [producto, setProducto] = useState([]);
const [loading, setLoading] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductos();
                setProducto(data);
                setLoading(false);
            } catch(error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    
    return (
        <div>
            <h2>Conocé nuestros productos</h2>

            {loading ? ( 
                <p>Cargando productos...</p>
            ) : (
                <ul className="producto-lista">
                    {producto.map((producto) => (

                        <li key={producto.title} className="producto-item">
                            <img src={producto.image} alt={producto.title} />
                            <h3>{producto.title}</h3>
                            <p>$ {producto.price}</p>
                            <Link to={`/DetalleProductos/${producto.id}`}>Ver detalles</Link>
                        </li>
                    )

                    )}

                </ul>
            )}

        </div>
    )
}

export default ListaProductos