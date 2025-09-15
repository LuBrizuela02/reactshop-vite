import { fetchProductosByID } from "./API"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import './productos.css'

function DetalleProductos() {

const {id} = useParams();
const [producto, setProducto] = useState([null]);
const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductosByID(id);
                setProducto(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return <div><p>Cargando detalle...</p></div>
    if (!producto) return <div><p>No se encontró el producto.</p></div>
    
    return (
        <div className="producto-detalle">
            <img src={producto.image} alt={producto.title} />
            <div className="producto-info">
                <h2>Detalles del producto:</h2>
                <h3>{producto.title}</h3>
                <p><strong>Precio:</strong> ${producto.price}</p>
                <p><strong>Stock:</strong> {producto.stock} unidades</p>
                <p><strong>Código:</strong> {producto.id}</p>
                <p><strong>Categoría:</strong> {producto.category}</p>
                <p><strong>Descripción:</strong> {producto.description}</p>
            </div>
        </div>
    )
}

export default DetalleProductos