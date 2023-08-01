
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(screen.width);
// console.log(screen.height);

// console.log(window.location);

// function redirect(url){
//     window.location.href="https://www.google.com/";
// }

// function ventananueva( url){
// window.open(url, "", "with=400", "height= 300")
// }
window.addEventListener('load', () =>{
    var boton = document.querySelector('#boton2');

    function cambiarColor(){
        if(boton.style.background == "green"){
            boton.style.background = "red"
        }else{
            boton.style.background = "green"
        }
    }


var boton= document.querySelector('#boton2');

boton.addEventListener('click', function(){
    cambiarColor();
    this.style.border = "10px solid black";
})
var input= document.querySelector('#nombre');
input.addEventListener('focus',
function(){
    console.log("estas dentro del input");
})

var input= document.querySelector('#nombre');
input.addEventListener('blur',
function(){
    console.log("estas fuera del input");
})
input.addEventListener('keydown', function(event){
    console.log("has pulsado la tecla"+String.fromCharCode(event.keycode));
})
input.addEventListener('keypress', function(event){
    console.log ("has presionado la tecla"+String.fromCharCode(event.keycode));
})
})