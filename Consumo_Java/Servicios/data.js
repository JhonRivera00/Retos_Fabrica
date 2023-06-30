
const getProductos = async ()=>{
    try {
    const url = "https://fakestoreapi.com/products"
    const productos = await fetch(url)
    const datos = await productos.json()
    return datos
} catch (error) {
    console.log(error)
}
}

