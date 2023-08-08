function grabar(){
    let datos=[];
    for (i=1;i<=3;i++){
    codigo = document.getElementById("codigo").value;
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    selector = document.getElementById("selector").value;
    datos.push(codigo,nombre,edad,correo,telefono,selector);

    let usuario1 = [datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]];
    let usuario2 = [datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]];
    let usuario3 = [datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]];
    // let usuario2 = [datos.push(codigo,nombre,edad,correo,telefono,selector)]
    // let usuario3 = [datos.push(codigo,nombre,edad,correo,telefono,selector)]
    // usuario1.forEach.apply(function(user1, index))
    // document.getElementById("resultado").innerHTML = "Los datos del primer usuario son: " + "</br>" + datos[0] + "</br>" + datos[1] + "</br>" + datos[2] + "</br>" + datos[3] + "</br>" + datos[4] + "</br>" + datos[5] + "</br>"
    document.getElementById("resultado1").innerHTML = "Los datos del primer usuario son: " + usuario1+ "</br>";

    document.getElementById("resultado2").innerHTML = "Los datos del segundo usuario son: " + usuario2+ "</br>";

    document.getElementById("resultado3").innerHTML = "Los datos del tercer usuario son: " + usuario3+ "</br>";
}
}
