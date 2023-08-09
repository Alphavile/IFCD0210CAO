$(document).ready(function(){

    $("#uno").click(function(){
        $(".cont1").css("background-color", "#000000");
        $(".cont1").css("color", "#ffffff");
    })

    $("#dos").click(function(){
        $(".textcont2").draggable();
    })

    $("#tres").click(function(){
        $(".textcont3").resizable();
    })

    $("#cuatro").click(function(){
        $(".cont4").dialog();
    })

    $("#cinco").click(function(){
        $(".cont5").tooltip();
    })

    $("#seis").click(function(){
        $(".cont6").css("background-image", "url('media/imagen-curso.jpg')").css("background-size", "cover");
    })

    $("#siete").click(function(){
        $("main").css("background-image", "url('media/avatar1.jpg')").css("background-size", "cover");
    })

    $("#ocho").click(function(){
        $( ".parrafocont8" ).remove();
    });

    $("#nueve").click(function(){
        $( ".textcont9" ).hide();
        $( ".parrafocont9" ).hide();
        $( ".cont9" ).datepicker();
    });

    $("#diez").click(function(){
        $( "main" ).toggle(1000,);
    });

    
    $("#once").click(function(){
        $( "#menu" ).show();
        $( "#menu" ).menu();
    });

    $("#doce").click(function(){
        $( ".cont12" ).effect("explode", 2000);
    });


})