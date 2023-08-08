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





