function actividad2(){
var primerNumero = parseInt (prompt ("Introduce el primer número"));
console.log("El primer número es: " + primerNumero);
var segundoNumero = parseInt (prompt ("Introduce el segundo número"));
console.log("El segundo número es: " + segundoNumero);
let suma = 0;
suma = primerNumero + segundoNumero;
console.log( "El resultado de la suma es: " + suma);
let resta = 0;
resta = primerNumero - segundoNumero;
console.log( "El resultado de la resta es: " + resta);
let multiplicar = 0;
multiplicar = primerNumero * segundoNumero;
console.log( "El resultado de la multiplicación es: " + multiplicar);
let dividir = 0;
dividir = primerNumero / segundoNumero;
console.log( "El resultado de la división es: " + dividir);
}

function actividad3(){
    var primerNumero = parseInt (prompt ("Introduce el primer número"));
    document.write(" El primer número es: " + primerNumero);
    var segundoNumero = parseInt (prompt ("Introduce el segundo número"));
    document.write(" El segundo número es: " + segundoNumero);
    if (primerNumero == segundoNumero){
        document.write (" El primer número es igual que el segundo ")
    }
    else if (primerNumero > segundoNumero){
        document.write (" El primer número es mayor que el segundo ")
    }
    else{
        document.write (" El primer número es menor que el segundo ")
    }  
}

function actividad4(){
    var ninos = parseInt (prompt ("Introduce el número de niños"));
document.write(" Número de niños: " + ninos);
var ninas = parseInt (prompt ("Introduce el número de niñas"));
document.write(" Número de niñas: " + ninas);

var totalninos  = ninos + ninas
var porcentninos = (ninos*100)/totalninos;
var porcentninas = (ninas*100)/totalninos;

document.write(" El porcentaje de niñas es: " + porcentninas);
document.write(" El porcentaje de niños es: " + porcentninos);
}

function actividad5(){
    var compra = parseInt (prompt ("Escribe el importe de la compra"));
var mes = (prompt ("Introduce el mes"));
if (mes == "octubre"){
    let total = 0;
total = compra * 0.85;
document.write( "Importe: " + total);
}
else{
    document.write (" Importe " + compra)
}
}

function actividad6(){
    var clave = prompt("Introduce una clave de 6 caracteres");
if (clave == "123456"){
alert( "Su clave es correcta ");
}
else{
    for (var n= 1; n<=3; n++){
        if (n<3){
alert("Su clave es incorrecta. Inténtelo de nuevo ") + prompt ("Introduce una clave de 6 caracteres");
        }
    else{
        alert( "Su acceso está restringido. Pongase en contacto con el administrador ");
    }
}}
}
function actividad9(){
let tabla = parseInt(prompt( " Escoge que tabla de multiplicar quieres ver? "));
alert (" ¿Quieres ver la tabla del? " + tabla);
document.write(" La tabla del " + tabla + "<br/>");
for (var n=0; n<=10; n++){
    document.write( n + " x "+ tabla + " = " + (n*tabla) + "<br/>");
}

for (var i=0; i<=10; i++){
    document.write(" La tabla del " + i + "<br/>");  
    for (var n=0; n<=10; n++){
    document.write( n + " x "+ i + " = " + (n*i) + "<br/>");
}}

for (var i=0; i<=tabla; i++){
    document.write(" La tabla del " + i + "<br/>");  
    for (var n=0; n<=10; n++){
    document.write( n + " x "+ i + " = " + (n*i) + "<br/>");
}}
}

function actividad10(){
    var compra = parseInt (prompt ("Escribe el importe de la compra"));
var mes = (prompt ("Introduce el mes"));
var descuento;

    switch (mes){
        case "octubre":
            descuento = compra * 0.15;
            document.write(  " El descuento es " + descuento + "€" + "<br/>") 
            document.write(  " El precio es " + (compra - descuento) + "€")
            break;
        case "enero":
            descuento = compra * 0.20;
            document.write(  " El descuento es " + descuento + "€" + "<br/>")
            document.write(  " El precio es " + (compra - descuento) + "€")
            break;
        case "febrero":
            descuento = compra * 0.20;
            document.write(  " El descuento es " + descuento + "<br/>")
            document.write(  " El precio es " + (compra - descuento))
            break;
        case "julio":
            descuento = compra * 0.15;
            document.write(  " El descuento es " + descuento + "<br/>")
            document.write(  " El precio es " + (compra - descuento))
            break;
        case "agosto":
            descuento = compra * 0.15;
             document.write(  " El descuento es " + descuento + "<br/>")
             document.write(  " El precio es " + (compra - descuento))
            break;
        case "noviembre":
            descuento = compra * 0.25;
            document.write(  " El descuento es " + descuento + "<br/>")
            document.write(  " El precio es " + (compra - descuento))
            break;
        case "diciembre":
            descuento = compra * 0.25;
            document.write(  " El descuento es " + descuento + "<br/>")
            document.write(  " El precio es " + (compra - descuento))
            break;
        default:
            document.write(  " No hay descuento " + compra)   
        }
}


var usuario = prompt("Introduce tu nombre de usuario");
usuario = usuario.toLowerCase();
if (usuario == "admin"){  
    var contraseña = prompt("Introduce tu contraseña");
contraseña = contraseña.toLowerCase();
if (contraseña == "webmaster"){
    alert ("bienvenido");
}
else if (contraseña === "" || contraseña === null){
    alert ("cancelado");
}
else {
    alert ("incorrecto");
} 
}
else if (usuario === "" || usuario === null){
    alert ("cancelado");
    contraseña = prompt("Introduce tu usuario");
}
else {
    alert ("incorrecto");
    contraseña = prompt("Introduce tu usuario");
}