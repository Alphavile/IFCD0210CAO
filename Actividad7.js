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
