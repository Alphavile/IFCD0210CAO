function actividad12(){
    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function actividad2(){
    var primerNumero = Number(document.getElementById ("primerNumero").value);
    var segundoNumero = Number(document.getElementById ("segundoNumero").value);
    
    let suma = 0;
    suma = primerNumero + segundoNumero;
    document.getElementById("sumar").innerHTML = "Total de la suma: " + suma + "<br/>";

    let resta = 0;
    resta = primerNumero - segundoNumero;
    document.getElementById("resta").innerHTML = "Total de la resta: " + resta + "<br/>";

    let multiplicacion = 0;
    multiplicacion = primerNumero * segundoNumero;
    document.getElementById("multiplicacion").innerHTML = "Total de la multiplicacion: " + multiplicacion + "<br/>";

    let division = 0;
    division = primerNumero / segundoNumero;
    document.getElementById("division").innerHTML = "Total de la división: " + division + "<br/>"
    }

    function actividad3(){
        var firstNumber  = Number(document.getElementById ("firstNumber").value);
        var secondNumber = Number(document.getElementById ("secondNumber").value);
        if (firstNumber == secondNumber){
        document.getElementById("igual").innerHTML = "Los dos números son iguales" + "<br/>";
        }
        else if (firstNumber > secondNumber){
        document.getElementById ("mayor").innerHTML = "El primer número es mayor" + "<br/>";
        }
        else{
        document.getElementById ("menor").innerHTML = "El primer número es menor" + "<br/>";
        }  
    }

    function actividad4(){
    var ninos  = Number(document.getElementById ("ninos").value);
    var ninas = Number(document.getElementById ("ninas").value);
    
    var totalninos  = ninos + ninas
    var porcentninos = (ninos*100)/totalninos;
    var porcentninas = (ninas*100)/totalninos;
    
    document.getElementById ("porcentninas").innerHTML = "El porcentaje de niñas es: " + porcentninas.toFixed(2) + "%<br/>";
    document.getElementById ("porcentninos").innerHTML = "El porcentaje de niños es: " + porcentninos.toFixed(2) + "%<br/>";
    }

    function actividad5(){
    var compra  = Number(document.getElementById ("compra").value);
    var mes = document.getElementById ("mes").value;


    if (mes == "octubre"){
    let total = compra * 0.85;
    document.getElementById ("total").innerHTML = total + "€<br/>";
    }
    else{
    document.getElementById ("total").innerHTML = compra + "€<br/>";
    }
    }
    
function actividad6(){

    for (var n= 1; n<=3; n++){
        var clave = prompt("Introduce una clave de 6 caracteres" );
        if (clave == "123456"){
            document.getElementById ("n").innerHTML = "Su clave es correcta" + "<br/>";
            break;
        }      
    else{
    document.getElementById ("n").innerHTML = "Su acceso esta restringido"  + "<br/>";
    }
}}

function actividad10(){
    var buy  = Number(document.getElementById ("buy").value);
    var moth = document.getElementById ("moth").value;
    var descuento;
    switch (moth){
        case "octubre":
            descuento = buy * 0.15;
            document.getElementById("total2").innerHTML = " El descuento es "  + descuento + "€";
            document.getElementById("total3").innerHTML = " El precio es " + (buy - descuento) + "€";
            break;
        case "enero": case "febrero":
            descuento = buy * 0.20;
            document.getElementById("total2").innerHTML = " El descuento es "  + descuento + "€";
            document.getElementById("total3").innerHTML = " El precio es " + (buy - descuento) + "€";
            break;
        case "julio": case "agosto":
            descuento = buy * 0.15;
            document.getElementById("total2").innerHTML = " El descuento es "  + descuento + "€";
            document.getElementById("total3").innerHTML = " El precio es " + (buy - descuento) + "€";
            break;
        case "noviembre": case "diciembre":
            descuento = buy * 0.25;
            document.getElementById("total2").innerHTML = " El descuento es "  + descuento + "€";
            document.getElementById("total3").innerHTML =  " El precio es " + (buy - descuento) + "€";
            break;
        default:
            document.getElementById("total2").innerHTML = " No hay descuento ";
            document.getElementById("total3").innerHTML = buy + "€";  
        }
}

function actividad11(){
    var usuario = prompt("Introduce tu nombre de usuario");
    usuario = usuario.toLowerCase();
    if (usuario == "admin"){  
        var contraseña = prompt("Introduce tu contraseña");
    contraseña = contraseña.toLowerCase();
    if (contraseña == "webmaster"){
        document.getElementById("total4").innerHTML = " Bienvenido ";
    }
    else if (contraseña === "" || contraseña === null){
        document.getElementById("total4").innerHTML = " Cancelado ";
    }
    else {
        document.getElementById("total4").innerHTML = " Incorrecto ";
    } 
    }
    else if (usuario === "" || usuario === null){
        document.getElementById("total4").innerHTML = " Cancelado ";
   
    }
    else {
        document.getElementById("total4").innerHTML = " Incorrecto ";
   
    }
    }

