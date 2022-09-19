import { Productos } from "./Producto.js"

//Dom Carrito
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let precioTotal = document.getElementById('precioTotal')


const ID1 = new Productos("id1", "HOME SPRAY AMBAR CITRUS BEACH 250ML" , 2700, "../assets/img/compras/ID1.jpg");
const ID2 = new Productos("id2", "DIFUSOR CRISTAL CLASSIC SWEET VAINILLA" , 2900, "../assets/img/compras/ID2.jpg");
const ID3 = new Productos("id3", "VELA CRISTAL BLACK CITRUS BEACH 250 GR" , 3300, "../assets/img/compras/ID3.jpg");
const ID4 = new Productos("id4", "VELA CRISTAL BLACK HOT CHOCOLATE 250 GR" , 3300, "../assets/img/compras/ID4.jpg");
const ID5 = new Productos("id5", "VELA CRISTAL BLACK SWEET VAINILLA 250 GR" , 3300, "../assets/img/compras/ID5.jpg");
const ID6 = new Productos("id6", "VELA CRISTAL AMBAR SWEET VAINILLA 250 GR" , 3300, "../assets/img/compras/ID6.jpg");
const ID7 = new Productos("id7", "DIFUSOR PARA AUTO HOT CHOCOLATE" , 990, "../assets/img/compras/ID7.jpg");
const ID8 = new Productos("id8", "MANTA MONTREAL AVELLANA 1.4*1" , 7900, "../assets/img/compras/ID8.jpg");
const ID9 = new Productos("id9", "FLOR CHICA" , 750, "../assets/img/compras/ID9.jpg");
const ID10 = new Productos("id10", "DIFUSOR CRISTAL CLASSIC SWEET CANELA 200 ML" , 2200, "../assets/img/compras/ID10.jpg");
const ID11 = new Productos("id11", "BOMBA DE BAÑO VAINILLA" , 990, "../assets/img/compras/ID11.jpg");
const ID12 = new Productos("id12", "BOMBA DE BAÑO LAVANDA" , 3300, "../assets/img/compras/ID12.jpg");

let carrito = [];
let producto =[];
producto.push(ID1, ID2, ID3, ID4, ID5, ID6, ID7, ID8, ID9, ID10, ID11, ID12);


//Función para agregar productos al array carrito
function agregarArrayCarrito(ID){
    carrito.push(ID)
    console.log(carrito)
    }
    
//FunciónAgregarProductosAlCarrito
function AgregarAlCarrito(array){ 
    modalBody.innerHTML = "";
    array.forEach((productoEnCarrito)=>{
    modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoEnCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="../assets/${productoEnCarrito.imagen}" alt="${productoEnCarrito.nombre}" style="max-width: 300px;">
                <div class="card-body">
                        <h4 class="card-title">${productoEnCarrito.nombre}</h4>
                        <p class="card-text">$${productoEnCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>`
    })
    CalculoDelTotal(array)
}    
    
//Función De Calculo Del Total
function CalculoDelTotal(array){
    let acumulador = 0;
    acumulador = array.reduce((acumulador , carrito)=>{
        return acumulador + carrito.precio
    },0)
    if(acumulador == 0){
        precioTotal.innerText = `Carrito vacio`
    }
    else{
        precioTotal.innerText = `El precio total de su compra es : $${acumulador}`
    }
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
                                        <button id="agregarAlCarrito${ID.id}" class="btn btn-warning btnCompra">AGREGAR AL CARRITO</button>
                                    </div>
                                </div>
                            </div>`
    divProductos.append(nuevoProducto)
    /* 3 - Capturamos el id "agregarAlCarrito${ID.id}" que se encuentra en el boton de AGREGAR AL CARRITO, para luego
    a traves del addEventListener asignarle la funcionalidad de agregar producto al carrito  */
    let btnAgregarAlCarrito = document.getElementById(`agregarAlCarrito${ID.id}`)         
    btnAgregarAlCarrito.addEventListener("click", ()=>{
        agregarArrayCarrito(ID);
        AgregarAlCarrito(carrito);

    botonCarrito.addEventListener("click", ()=>{
        AgregarAlCarrito(carrito);
})            
})     
});



let botones = document.getElementsByClassName("btnCompra");
for (let compra of botones) {
    compra.addEventListener("click", ()=>{
        alert("el producto ha sido agregado al carrito")
    })
}

botonFinalizarCompra.addEventListener("click", ()=>{
    alert("gracias por su compra")                               
})
