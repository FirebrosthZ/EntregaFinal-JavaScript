alert("Hola Gracias por ingresar a nuestro sitio Web, a continuacion le pondremos un recuadro para iniciar sesion")
let nombre = prompt("Ingresa tu Usuario");
let pass = prompt("Ingresa tu contraseña");

if (nombre != "" && pass != ""){
    alert("Bienvenido!")
}else{
    alert("Porfavor Rellene los campos requeridos")
}

//alert ("Porfavor Ingrese su edad para verificar que sea mayor de edad en el siguiente recuadro!")
let edad = prompt("Ingrese su edad para verificar que sea mayor de edad!")
while(edad < 18 ){;
    alert("Usted es menor de edad, no puede acceder a la pagina")
    edad=prompt("Introduzca una edad valida para poder ingresar!")
}
alert("Esperamos que disfrute de nuestros productos!")

/*intente de varias formas como hacer funcionar este mini menu de abajo 
pero no comprendi como hacerlo para que hacerlo mas interactivo y no tan
lineal y facil.


let product = prompt("Ingrese que producto le gustaria consultar el precio",
"1-TV Samsung 30'", "2-TV Phillps 70'", "3-TV LG 55'")
if (product = 1){
    alert("$30000")
}else if(product = 2){
    alert("$70000")
}else if (product = 3){
    alert("$54000")
}else{ 
    (product >= 4)
    alert("Gracias por elegir sus productos")
}

Queria hacer ese menu para despues poder hacer que me sacara un 
presupuesto de cuanto saldria por cuota comprar uno de los productos 
pero no me sale hacer este menu para despues continuar con las divisiones
porque despues de hacer este menu queria probar hacer un menu adentro de cada
producto para poder elegir entre 3,6,9 y 12 cuotas y que me diera el precio de 
cada respectiva cuota dependiendo de cual elijamos.
*/

