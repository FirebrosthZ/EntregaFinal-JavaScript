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
        alert("USUARIO CORRECTO");
        break;
    }else{
        alert("USUARIO INCORRECTO!");
    }
}
let edad = prompt("Ingrese su edad para verificar que sea mayor de edad!")
while(edad < 18 ){;
    alert("Usted es menor de edad, no puede acceder a la pagina")
    edad=prompt("Introduzca una edad valida para poder ingresar!")
}
alert("Esperamos que disfrute de nuestros productos!")

let elecciones = prompt (
    "Selecciona una de las siguientes obsiones con sus precios \n 1- Tv Samsung 30', $30000. \n 2- Tv Phillips 70', $70000. \n 3- Tv LG 55', $54000"
)
switch (elecciones) {
    case "1":
        alert ("TV Samsung 30'. \n $30000.");
        let CuotasSam = prompt ("Seleccione en cuantas cuotas desea comprar el producto! \n Cuotas: \n 1   Cuotas         $30000. \n 3   Cuotas         $10000. \n 6   Cuotas         $5000. \n 12 Cuotas         $2500.");
        switch (CuotasSam) {
            case "1":
                alert ("Gracias por comprar su TV SAMSUNG 30' en un solo Pago de $30.000!")
                break;

            case "3":
                alert ("Gracias por comprar su TV SAMSUNG 30' en 3 Cuotas de $10.000!")
                break;

            case "6":
                alert ("Gracias por comprar su TV SAMSUNG 30' en 6 Cuotas de $5.000!")
                break;

            case "12":
                alert ("Gracias por comprar su TV SAMSUNG 30' en 12 Cuotas de $2.500!")
                break;

            default:
                break;
        }
        break;
    case "2":
        alert ("TV Phillps 70'. \n $70.000.");
        let CuotasPhill = prompt ("Seleccione en cuantas cuotas desea comprar el producto! \n Cuotas: \n 1   Cuotas         $70.000. \n 3   Cuotas         $23.333,33. \n 6   Cuotas         $11.666,66. \n 12 Cuotas         $5.833,33.")
        switch (CuotasPhill) {
            case "1":
                alert ("Gracias por comprar su TV PHILLIPS 70' en un solo Pago de $70.000!")
                break;

            case "3":
                alert ("Gracias por comprar su TV PHILLIPS 70' en 3 Cuotas de $23.333,33!")
                break;

            case "6":
                alert ("Gracias por comprar su TV PHILLIPS 70' en 6 Cuotas de $11.666,66!")
                break;

            case "12":
                alert ("Gracias por comprar su TV PHILLIPS 70' en 12 Cuotas de $5.833,33!")
                break;

            default:
                break;
        }
        break;
    case "3":
        alert ("TV LG 55'. \n $54.000.");
        let CuotasLG = prompt ("Seleccione en cuantas cuotas desea comprar el producto! \n Cuotas: \n 1   Cuotas         $54.000. \n 3   Cuotas         $18.000. \n 6   Cuotas         $9.000. \n 12 Cuotas         $4.500.")
        switch (CuotasLG) {
            case "1":
                alert ("Gracias por comprar su TV LG 55' en un solo Pago de $54.000!")
                break;

            case "3":
                alert ("Gracias por comprar su TV LG 55' en 3 Cuotas de $18.000!")
                break;

            case "6":
                alert ("Gracias por comprar su TV LG 55' en 6 Cuotas de $9.000!")
                break;

            case "12":
                alert ("Gracias por comprar su TV LG 55' en 12 Cuotas de $4.500!")
                break;

            default:
                break;
        }
        break;

    default:
        break;
}