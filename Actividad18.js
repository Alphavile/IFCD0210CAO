function grabar(){
let datos=[];
codigo = document.getElementById("codigo").value;
nombre = document.getElementById("nombre").value;
edad = document.getElementById("edad").value;
correo = document.getElementById("correo").value;
telefono = document.getElementById("telefono").value;
selector = document.getElementById("selector").value;
datos.push(codigo,nombre,edad,correo,telefono,selector);
console.log(datos);
document.getElementById("resultado").innerHTML = "Los datos del formulario son: " + "</br>" + datos[0] + "</br>" + datos[1] + "</br>" + datos[2] + "</br>" + datos[3] + "</br>" + datos[4] + "</br>" + datos[5] + "</br>"
}