// JSON - javascrip object notation
// Nos permite crear objetos de forma rápida

var alumno= {
    nombre: "Juan López",
    correo: "juanlopez@gmail.com", 
    telefono: "555 555 555"
}

// var alumnodos = {
//     nombre: "José García",
//     correo: "josegarcia@gmail.com",
//     telefono: "555 777 777"
// }

// alumno.nombre = "Juan López López"

// var alumnos = [alumno, alumnodos];
// console.log(alumnos);

// var total_alumnos = document.querySelector("#totalalumnos");

// var indice;
// for(indice in alumnos){
// var p=document.createElement("p");
// p.append(alumnos[indice].nombre +"------");
// p.append(alumnos[indice].correo +"------");
// p.append(alumnos[indice].telefono +"------");
// total_alumnos.append(p);
// }

// localstorage
// memoria en el navegador

// comprobación de que el navegador tiene disponible el localstorage
if(typeof(Storage) !=='undefined'){
console.log("disponible");
}else{
    console.log("no disponible");
}

//guardar datos
localStorage.setItem("listado","listado de alumnos");
//la primera palabra es la clave (key) la segunda el (valor) lo que guardas.

//recuperar datos
localStorage.getItem("listado");

//guardar datos JASON
localStorage.setItem("alumno", JSON.stringify(alumno));

//recuperar datos JASON
var alumnojs = JSON.parse(localStorage.getItem("alumno"));

document.querySelector("#totalalumnos").append(alumnojs.nombre +"------"+ alumnojs.correo +"------"+ alumnojs.telefono);

//borra el elemento seleccionado
localStorage.removeItem("listado");

//borra todo el caché (todos los elementos guardados)
localStorage.clear();
