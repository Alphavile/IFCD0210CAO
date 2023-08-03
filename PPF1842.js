window.addEventListener('load', ()=>{
    let inicio, curso, contacto, contenido;
    inicio = document.querySelector("#inicio");
    curso = document.querySelector("#curso");
    contacto = document.querySelector("#contacto");
    contenido = document.querySelector(".informacion");
    
    contenido.innerHTML=`
    <img src="" alt="">
    <h1>Entra en nuestra academia</h1>
    <p>Crea tu itinerario formativo</p>
    <button><a href="PPF1842_contacto.html">información</a></button>
    `
    inicio.addEventListener('click', function(){
        contenido.innerHTML=`
        <img src="" alt="">
        <h1>Entra en nuestra academia</h1>
        <p>Crea tu itinerario formativo</p>
        <button><a href="PPF1842_contacto.html">información</a></button>
        `
    })
    curso.addEventListener('click', function(){
        contenido.innerHTML=`
        <video controls src="media/VideoClase.mp4"></video>
        <img src="" alt="">
        `
    })
    contacto.addEventListener('click', function(){
        contenido.innerHTML=`
        <form action="">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre">
        <label for="correo">Correo electrónico</label>
        <input type="text" id="correo">
        <label for="asunto">Asunto</label>
        <input type="text" id="asunto">
        <label for="mensaje">Mensaje</label>
        <textarea name="" id="mensaje" cols="30" rows="10"></textarea>
        <input type="submit" value="enviar" id="enviar" onclick= "formulario()">
        </form>
        <p>Texto legal</p>
        `
    })

})


function saveAlocal(llave, vSave){
localStorage.setItem(llave, JSON.stringify(vSave))
}
function gAlocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos;
}

let alumnos = gAlocal('alumnos') || [];

function formulario(){
    var alumno={
    nombres: document.querySelector("#nombre").value,
    correo: document.querySelector("#correo").value,
    asunto: document.querySelector("#asunto").value,
    mensaje: document.querySelector("#mensaje").value
    }

    alumnos.push(alumno);
    saveAlocal('alumnos', alumnos);
}


