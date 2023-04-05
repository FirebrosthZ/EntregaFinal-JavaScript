alert("Hola Gracias por ingresar a nuestro sitio Web, a continuacion le pondremos un recuadro para iniciar sesion")
/*let nombre = prompt("Ingresa tu Usuario");
let pass = prompt("Ingresa tu contraseña");*/
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
}

