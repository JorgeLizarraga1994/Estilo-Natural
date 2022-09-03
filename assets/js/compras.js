let inicio = confirm("Bienvenido a Estilo Natural, muchas gracias por ingresar")
if (inicio == true){
    let nombreCliente  = prompt("Ingrese su nombre")   

    let velas = parseInt(prompt("Elija su vela (Ingresar precio): \n vela comun $1000 \n vela aromatizante $1500"))  
    if ((velas == 1000) || (velas == 1500)) { 
        alert(`Agregado a su Compra`)
        }else{
            let velas = 0 (alert("Usted ingreso un valor incorrecto, por favor vuelva a empezar"))  
            Actualizar();
        }

    let cuadro = parseInt(prompt("Elija su cuadro (Ingresar Numeros): \n cuadro de 1m x 50cm $5000 \n cuadro de 1m x 70 cm $7000 \n cuadro de 1m x 1.50m $10000"))  
    if ((cuadro == 5000) || (cuadro == 7000) || (cuadro == 10000) ) {
        alert(`Agregado a su Compra`)
        }else{
            let cuadro = 0 (alert("Usted ingreso un valor incorrecto, por favor vuelva a empezar"))  
            Actualizar();
        }


    compra = confirm(`Cliente: ${nombreCliente} - Su orden incluye: 
    velas $ ${velas} - 
    cuadro $ ${cuadro} - 
    SUBTOTAL $ ${velas + cuadro} 
    `)

    Compras(velas , cuadro);
}

//FUNCIONES
function Compras(vela, cuadro) { //Funcion de Suma
    let compra = vela + cuadro;
    let precioFinal = compra
    confirm(`El precio Final de su pedido es \n Precio Final: $${precioFinal}`)
    let usuario = prompt("Desea Cargar un nuevo Pedido? \n Si o NO ") 
    if(usuario.toLowerCase() == "si"){
        Actualizar();
    }else{
        (alert(`Muchas gracias Por su Compra`))   
    }
}

function Actualizar(){       // Funcion para Actualizar
    location.reload(true);} 
    