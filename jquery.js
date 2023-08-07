$(document).ready(function(){
    $(".informacion #info").click(function(){
        $(".informacion").css("background-image", "url('media/imagen-curso.jpg')");
$(".informacion h1,p").css("color", "#ffff00")
    })
    $("#accesible").click(function(){
        $("body, button").css("font-size", "120%");
})
$("#noche").click(function(){
    $("body").css("background-color", "#000000" );
    $("footer").css("color", "#ffffff" );
    $("button, li").css("background-color", "#ffffff" );
    $("button").css("color", "#000000" );
})

const modal_container = document.getElementById("modal_container")
    const modal_btn1 = document.getElementById("modal_btn1")
    const modal_btn2 = document.getElementById("modal_btn2")

    window.addEventListener("load", () => {
      createModal(`
        <h3 class="modal-title">Abrir modal Emergente</h3>
        <img class="modal-img" src="media/7498232_33144.jpg" alt="">
        <p class="modal-description">Hola modal emergente</p>
        <button class="modal-btn">Contratar</button>
        <a href="#" target="_blank" rel="noopener noreferrer" class="modal-link">Link</a>
      `, "modal-aparecer")
    })

    modal_btn1.addEventListener("click", () => {
      createModal(`
        <h3>Abrir modal 1</h3>
        <img src="media/7498232_33144.jpg" alt="">
        <a href="#" target="_blank" rel="noopener noreferrer">Contratar !!</a>
      `, "modal-desdeArriba")
    })

    modal_btn2.addEventListener("click", () => {
        createModal(`
        <h3>Abrir modal 2</h3>
        <img src="media/7498232_33144.jpg" alt="">
        <a href="#" target="_blank" rel="noopener noreferrer">Contratar !!</a>
      `,"modal-desdeAbajo" )
    })

    const createModal = (content = "sin contenido", style = "") => {
      modal_container.innerHTML = `
        <div class="modal" id="modal">
          <div class="modal-content ${style}">
            ${content}
            <button class="modal-btn-closed" id="modal_btn_closed">x</button>
          </div>
        </div>
      `

      document.getElementById("modal").addEventListener("click", (e) => {
        console.log(e.target.id)
        if (e.target.id === "modal" || e.target.id === "modal_btn_closed") {
          modal_container.innerHTML = ""
        }
      })
    }


// $("#profesor").click(function(){
//     $().window.open
//     (`
//         <div class="registro">
//         <form action="">
//             <label for="">Usuario</label>
//             <input type="text">
    
//             <label for="">Contraseña</label>
//             <input type="password">
            
//             <input type="submit">
//         </form>
//         <p>En caso de no estar registrado.</p>
//         <button>Registrarse</button>
//     </div>`);

// })


})