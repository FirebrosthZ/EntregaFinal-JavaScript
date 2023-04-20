let carritoVisible = false;

let carrito = JSON.parse(localStorage.getItem("GuardarCarrito")) || [];

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
    saveLocal();
}
carrito
function ready(){
    let botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(let i=0;i<botonesEliminarItem.length; i++){
        let button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }
    let botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(let i=0;i<botonesSumarCantidad.length; i++){
        let button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }
    let botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(let i=0;i<botonesRestarCantidad.length; i++){
        let button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }
    let botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(let i=0; i<botonesAgregarAlCarrito.length;i++){
        let button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
    saveLocal();
}

function pagarClicked(){
    alert("Gracias Su Compra");
    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
    saveLocal();
}

function agregarAlCarritoClicked(event){
    let button = event.target;
    let item = button.parentElement;
    let titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    let precio = item.getElementsByClassName('precio-item')[0].innerText;
    let imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);
    agregarItemAlCarrito(titulo, precio, imagenSrc);
    hacerVisibleCarrito();
    saveLocal();
}

function hacerVisibleCarrito(){
    carritoVisible = true;
    let carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';
    let items =document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
    saveLocal();
}

function agregarItemAlCarrito(titulo, precio, imagenSrc){
    let item = document.createElement('div');
    item.classList.add = ('item');
    let itemsCarrito = document.getElementsByClassName('carrito-items')[0];
    let nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(let i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("Este producto ya se añadio al carrito");
            return;
        }
    saveLocal();
    }

    let itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    let botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);

    let botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    actualizarTotalCarrito();
    saveLocal();
}

function sumarCantidad(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
    saveLocal();
}

function restarCantidad(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
    saveLocal();
}

function eliminarItemCarrito(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    actualizarTotalCarrito();
    ocultarCarrito();
    saveLocal();
}

function ocultarCarrito(){
    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        let carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;

        let items =document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    
    }
    saveLocal();
}

function actualizarTotalCarrito(){
    let carritoContenedor = document.getElementsByClassName('carrito')[0];
    let carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    let total = 0;
    for(let i=0; i< carritoItems.length;i++){
        let item = carritoItems[i];
        let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        let precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        let cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";
    saveLocal();
}


const saveLocal = ( )=>{
    localStorage.setItem("GuardarCarrito", JSON.stringify(carrito));
}

/*
{
id: 1,
nombre: "Lavarropas Samsung",
cantidad: 1,
precio: 130.000,
img: "/asset/lavarropas png.png",
},
{
id: 2,
nombre: "Tv samsung 50'",
cantidad: 1,
precio: 144.000,
img: "/asset/Samsung-TV-PNG-Pic.png",
},
{
id: 3,
nombre: "Notebook Asus 19'",
cantidad: 1,
precio: 240.000,
img: "/asset/png-clipart-laptop-asus-rog-gl552-asus-rog-g501jw-intel-core-laptop-laptop-asus-rog-removebg-preview.png",
},



alert("Hola Gracias por ingresar a nuestro sitio Web, a continuacion le pondremos un recuadro para iniciar sesion");
let User = "david";
for (let i = 0; i <= 1000; i++) {
    let usero = prompt("Ingrese el usuario para iniciar sesion");
    if (usero==User) {
        alert("USUARIO CORRECTO");
        break;
    }else{
        alert("USUARIO INCORRECTO!");
    }
}
let passw = "david1428";
for (let i = 0; i <= 1000; i++) {
    let contrao = prompt("Ingrese el usuario para iniciar sesion");
    if (contrao==passw) {
        alert("CONTRASENIA CORRECTA");
        break;
    }else{
        alert("CONTRASENIA INCORRECTA!");
    }
}
let edad = prompt("Ingrese su edad para verificar que sea mayor de edad!")
while(edad < 18 ){;
    alert("Usted es menor de edad, no puede acceder a la pagina")
    edad=prompt("Introduzca una edad valida para poder ingresar!")
}
alert("Esperamos que disfrute de nuestros productos!")

class Producto {
    constructor(nombre, precio, iva, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.iva = iva;
        this.id = id;
        this.precioConIva = precio * iva;
    }
}

const productos = [
    new Producto("TV Samsung 30'", 30000, 1.21, 1),
    new Producto("TV Phillips 70'", 70000, 1.21, 2),
    new Producto("TV LG 55'", 54000, 1.21, 3),
]

const carrito = []

let entrada = true;
if (entrada) {
    let inicio = prompt("¿Que desea hacer?: \n1. Ver Catalogo de Productos!. \n2. Comprar directamente un producto.");
    switch (inicio) {
        case "1":
            let eleccion = parseInt(prompt("Elija como quiere que se ordenen los productos: \n1. Nombre (A-Z). \n2. Nombre (Z-A). \n3. Del mas barato al mas caro. \n4. Del mas caro al mas barato."));

            function ordenar(eleccion, array) {
                let listaOrdenados = array.slice(0);

                switch (eleccion) {
                    case 1:
                        let nombreAscendente = listaOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
                        return nombreAscendente;
                    case 2:
                        let nombreDescendente = listaOrdenados.sort((a, b) => b.nombre.localeCompare(a.nombre));
                        return nombreDescendente;
                    case 3:
                        let precioAscendente = listaOrdenados.sort((a, b) => a.precioConIva - b.precioConIva);
                        return precioAscendente;
                    case 4:
                        let precioDescendente = listaOrdenados.sort((a, b) => b.precioConIva - a.precioConIva);
                        return precioDescendente;
                    default:
                        alert('Su eleccion no es valida');
                        break;
                }

            }

            function mostrar(array){
                let lista ='';

                array.forEach(elemento=>{
                lista += 'Nombre: ' + elemento.nombre + '\nPrecio: ' + elemento.precioConIva + '.\n\n'
                });

                return lista;
            }

            alert(mostrar(ordenar(eleccion, productos)));
            break;
        case "2":
            let venta = prompt("¿Que producto desea comprar?: \n1- TV Phillps 30'. \n2- TV Phillps 70'. \n3- TV Phillps 55'.");
            let productoElegido = productos.find((producto) => producto.id == parseInt(venta));
            carrito.push(productoElegido);
            alert("Se añadio " + productoElegido.nombre + " a tu carrito de compras con un precio especial de $" + productoElegido.precioConIva);
            break;
        default:
            alert("La opcion que ha ingresado no es valida.");
            break;
    }
*/