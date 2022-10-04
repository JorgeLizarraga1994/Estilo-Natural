class Productos{
    constructor(id,nombre,precio, imagen){
        this.id = id,
        this.nombre = nombre , 
        this.precio = precio ,
        this.imagen = imagen
    }
}



//Función para agregar productos al array carrito
function agregarArrayCarrito(id){
    carrito.push(id)
    localStorage.setItem("carrito" , JSON.stringify(carrito))
}

//Función AgregarProductosAlCarrito
function agregarProductosAlCarrito(array){ 
    let modalBody = document.getElementById("modal-body")
    modalBody.innerHTML = "";
    array.forEach((productoEnCarrito)=>{
    modalBody.innerHTML += `
            <div class="card border-primary mb-3" id="productoCarrito${productoEnCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="../assets/${productoEnCarrito.imagen}" alt="${productoEnCarrito.nombre}" style="max-width: 100px;">
                <div class="card-body">
                        <h4 class="card-title">${productoEnCarrito.nombre}</h4>
                        <p class="card-text">$${productoEnCarrito.precio}</p> 
                        <button id="eliminarProductos${productoEnCarrito.id}"  class= "btn btn-danger" ><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>`
           
        })
        array.forEach(productoEnCarrito=>{
            eliminarProductosDelCarrito(productoEnCarrito.id, array);
    })
    calculoDelTotal(array);
}

//Función EliminarProductosDelCarrito
function eliminarProductosDelCarrito(productoEnCarritoid, array){
        let eliminarProductos = document.getElementById(`eliminarProductos${productoEnCarritoid}`)
            let id = productoEnCarritoid
            eliminarProductos.addEventListener("click", ()=>{
            let productosIndex = array.findIndex(element => element.id == id)
            console.log(productosIndex);
            array.splice(productosIndex ,1)
            localStorage.setItem("carrito", JSON.stringify(array))
            agregarProductosAlCarrito(array)
            })
            
}           
            
//Función De Calculo Del Total
function calculoDelTotal(array){
    let acumulador = 0;
    acumulador = array.reduce((acumulador , array)=>{
        return acumulador + array.precio
    },0)
    //Utilizo el operador ternario    
    acumulador == 0 ? precioTotal.innerText = `Carrito vacio`  : precioTotal.innerText = `El precio total de su compra es : $${acumulador}`
}

//Swal para la alerta de "Gracias por su compra".
function swalCompra(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por su compra',
        showConfirmButton: false,
        timer: 1500
      })   
}

//Toastify para la alerta de "Gracias por su compra".
function toastifyAgregadoCarrito(){
Toastify({
    text: "Agregado al carrito",
    className: "info",
    duration: 1000 ,
    style: {
      background: "rgb(255, 220, 175)",
      color: "black"
    }
  }).showToast();
}

//APP
// 1- Capturar el id "productos" y lo almacenamos en divProductos
let divProductos = document.getElementById("productos")

// 2 - Recorremos el array producto creando un elemento div que contenga otro div mediante innerHTML.
producto.forEach((ID) => {
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML = `<div class="d-flex text justify-content-center">
                                    <div class="card p-2 margin-card" style="width: 18rem;">
                                        <img src="${ID.imagen}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title card-js">${ID.nombre}</h5>
                                            <p class="card-text">Precio: $${ID.precio}</p>
                                            <button id="agregarAlCarrito${ID.id}" class="btn btn-color btnCompra">AGREGAR AL CARRITO</button>
                                        </div>
                                    </div>
                                </div>` 
                                                      
        divProductos.append(nuevoProducto)
    
    /* 3 - Capturamos el id "agregarAlCarrito${ID.id}" que se encuentra en el boton de AGREGAR AL CARRITO, para luego
    a traves del addEventListener asignarle la funcionalidad de agregar producto al carrito y luego poder borrarlo si es necesario  */
    let btnAgregarAlCarrito = document.getElementById(`agregarAlCarrito${ID.id}`)         
    btnAgregarAlCarrito.addEventListener("click", ()=>{
        agregarArrayCarrito(ID);
        agregarProductosAlCarrito(carrito);
})  
});

    
let botones = document.getElementsByClassName("btnCompra");
for (let compra of botones) {
compra.addEventListener("click", ()=>{
    toastifyAgregadoCarrito();    
})
}

let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")  
botonFinalizarCompra.addEventListener("click", ()=>{
    swalCompra();                        
})




    

    
 