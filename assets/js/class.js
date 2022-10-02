let producto = [];
const cargarProductos = async() =>{
    const response = await fetch("/productos.json")
    const data = await response.json()
    console.log(data)
    console.log(producto)
    
    for (let prod of data) {
        let productoNuevo = new Productos(prod.id, prod.nombre, prod.precio , prod.imagen)
        producto.push(productoNuevo)
    }
    console.log(producto)
}

//Utilizo el OR ||
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
cargarProductos()