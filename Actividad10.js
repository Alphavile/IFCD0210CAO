var compra = parseInt (prompt ("Escribe el importe de la compra"));
var mes = (prompt ("Introduce el mes"));
var descuento;

// if (mes == "octubre"){
//     let total = 0;
// total = compra * 0.85;
// document.write( "Importe: " + total);
// }
// else{
//     document.write (" Importe " + compra)
// }

// switch (mes){
// case "octubre":
//     descuento = compra * 0.85;
//     document.write(  " El descuento es " + descuento)
//     break;
//     case "enero": case "febrero":
//     descuento = compra * 0.20;
//     document.write(  " El descuento es " + descuento)
//     break;
//     case "julio": case "agosto":
//     descuento = compra * 0.15;
//     document.write(  " El descuento es " + descuento)
//     break;
//     case "noviembre": case "diciembre":
//     descuento = compra * 0.25;
//     document.write(  " El descuento es " + descuento)
//     break;
//     default:
//     document.write(  " No hay descuento " + compra)   
// }

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
