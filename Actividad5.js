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