var primerNumero = parseInt (prompt ("Introduce el primer número"));
document.write("El primer número es: " + primerNumero);
var segundoNumero = parseInt (prompt ("Introduce el segundo número"));
document.write("El segundo número es: " + segundoNumero);

if (primerNumero == segundoNumero){
    document.write (" El primer número es igual que el segundo ")
}
else if (primerNumero > segundoNumero){
    document.write (" El primer número es mayor que el segundo ")
}
else{
    document.write (" El primer número es menor que el segundo ")
}


