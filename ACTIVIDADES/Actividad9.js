// 1.- Crear una tabla de multiplicar en documento html de un número introducido por ventana.
let tabla = parseInt(prompt( " Escoge que tabla de multiplicar quieres ver? "));
alert (" ¿Quieres ver la tabla del? " + tabla);
document.write(" La tabla del " + tabla + "<br/>");
for (var n=0; n<=10; n++){
    document.write( n + " x "+ tabla + " = " + (n*tabla) + "<br/>");
}

// 2.- Crear todas las tablas de multiplicar hasta el 10, mostrar en el mismo documento html.
for (var i=0; i<=10; i++){
    document.write(" La tabla del " + i + "<br/>");  
    for (var n=0; n<=10; n++){
    document.write( n + " x "+ i + " = " + (n*i) + "<br/>");
}}
// 3.- Crear tablas de multiplicar hasta el número introducido en el apartado 1. Mostrar en el mismo documento html.
for (var i=0; i<=tabla; i++){
    document.write(" La tabla del " + i + "<br/>");  
    for (var n=0; n<=10; n++){
    document.write( n + " x "+ i + " = " + (n*i) + "<br/>");
}}