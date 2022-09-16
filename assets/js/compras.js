class Productos{
    constructor(nombre,precio, imagen){
        this.nombre = nombre , 
        this.precio = precio ,
        this.imagen = imagen
    }
    }
const ID1 = new Productos("HOME SPRAY AMBAR CITRUS BEACH 250ML" , 2700, "../assets/img/compras/ID1.jpg");
const ID2 = new Productos("DIFUSOR CRISTAL CLASSIC SWEET VAINILLA" , 2900, "../assets/img/compras/ID2.jpg");
const ID3 = new Productos("VELA CRISTAL BLACK CITRUS BEACH 250 GR" , 3300, "../assets/img/compras/ID3.jpg");
const ID4 = new Productos("VELA CRISTAL BLACK HOT CHOCOLATE 250 GR" , 3300, "../assets/img/compras/ID4.jpg");
const ID5 = new Productos("VELA CRISTAL BLACK SWEET VAINILLA 250 GR" , 3300, "../assets/img/compras/ID5.jpg");
const ID6 = new Productos("VELA CRISTAL AMBAR SWEET VAINILLA 250 GR" , 3300, "../assets/img/compras/ID6.jpg");
const ID7 = new Productos("DIFUSOR PARA AUTO HOT CHOCOLATE" , 990, "../assets/img/compras/ID7.jpg");
const ID8 = new Productos("MANTA MONTREAL AVELLANA 1.4*1" , 7900, "../assets/img/compras/ID8.jpg");
const ID9 = new Productos("FLOR CHICA" , 750, "../assets/img/compras/ID9.jpg");
const ID10 = new Productos("DIFUSOR CRISTAL CLASSIC SWEET CANELA 200 ML" , 2200, "../assets/img/compras/ID10.jpg");
const ID11 = new Productos("BOMBA DE BAÑO VAINILLA" , 990, "../assets/img/compras/ID11.jpg");
const ID12 = new Productos("BOMBA DE BAÑO LAVANDA" , 3300, "../assets/img/compras/ID12.jpg");

let producto =[];
producto.push(ID1, ID2, ID3, ID4, ID5, ID6, ID7, ID8, ID9, ID10, ID11, ID12);

let divProductos = document.getElementById("productos")
producto.forEach((ID) => {
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML = `<div class="d-flex text justify-content-center">
                                <div class="card p-2 margin-card" style="width: 18rem;">
                                    <img src="${ID.imagen}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title card-js">${ID.nombre}</h5>
                                        <p class="card-text">Precio: $${ID.precio}</p>
                                        <a href="#" class="btn btn-warning">AGREGAR AL CARRITO</a>
                                    </div>
                                </div>
                            </div>`
    divProductos.append(nuevoProducto)                        
});






