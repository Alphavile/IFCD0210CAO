// var ninos = parseInt (prompt ("Introduce el número de niños"));
// document.write(" Número de niños: " + ninos);
// var ninas = parseInt (prompt ("Introduce el número de niñas"));
// document.write(" Número de niñas: " + ninas);

// var totalninos  = ninos + ninas
// var porcentninos = (ninos*100)/totalninos;
// var porcentninas = (ninas*100)/totalninos;

// document.write(" El porcentaje de niñas es: " + porcentninas);
// document.write(" El porcentaje de niños es: " + porcentninos);

// function calcular(nro1, nro2){
//     document.write ("sumar: " + (nro1+nro2) + "<br/>");
//     document.write ("restar: " + (nro1-nro2) + "<br/>");
//     document.write ("multiplicación: " + (nro1*nro2) + "<br/>");
//     document.write ("dividir: " + (nro1/nro2) + "<br/>");
//     document.write("<hr>")

    function calcular(nro1, nro2, ver = false){
        if(ver == false){
        document.write ("sumar: " + (nro1+nro2) + "<br/>");
        document.write ("restar: " + (nro1-nro2) + "<br/>");
        document.write ("multiplicación: " + (nro1*nro2) + "<br/>");
        document.write ("dividir: " + (nro1/nro2) + "<br/>");
        document.write("<hr>")
} else {
    document.write("No tengo nada que mostrar!!!")
}
}
calcular(20, 5, false);

// for (var n= 1; n<=5; n++){
//     document.write(n + "<br/>");
//     calcular(n, 5);
// }
    
// calcular(10, 12);
// calcular(24, 65);
// calcular(6, 9);
// calcular(21, 76);