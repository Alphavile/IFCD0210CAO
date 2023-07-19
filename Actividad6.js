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
