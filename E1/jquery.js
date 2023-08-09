$(document).ready(function(){
    $(".informacion #info").click(function(){
        $(".informacion").css("background-image", "url('media/imagen-curso.jpg')");
$(".informacion h1,p").css("color", "#ffff00")
    })
    $("#accesible").click(function(){
        $("body, button").css("font-size", "120%");
})
$( function() {
    $( "#seccion3" ).accordion();
  } );

  $( function() {
    $( document ).tooltip();
  } );

$("#noche").click(function(){
    $("body").css("background-color", "#000000" );
    $("button").css("background-color", "#000000" );
    $("button, a").css("color", "#ffffff" );
    $("#seccion3").css("background-color", "#000000");
    $("#seccion2").css("color", "#ffffff" );
    $(".ui-accordion .ui-accordion-content").css("background-color", "#000000");
    $(".ui-accordion .ui-accordion-content").css("color", "#ffffff");
    $(".ui-accordion .ui-accordion-header ").css("background-color", "#000000");
    $(".ui-accordion .ui-accordion-header ").css("color", "#ffffff");
})

})