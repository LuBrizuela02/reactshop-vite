export const fetchProductos = async() =>{
    const BASE_URL = 'https://fakestoreapi.com/products';
try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
} catch (error) {
    console.error("Error fetch data", error);
    throw error;
}}

export const fetchProductosByID = async(id) =>{
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        return {
        ...data,
        stock: Math.floor(Math.random() * 20) + 1
    };
    } catch (error) {
        console.error("Error fetch data by ID", error)
        throw error;
    }
}