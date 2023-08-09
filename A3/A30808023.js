$(document).ready(function(){

    $( function() {
        $( "#dialog01" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        $( "#opener01" ).on( "click", function() {
          $( "#dialog01" ).dialog( "open" );
        });
      } );
      
      $( function() {
        $( "#dialog02" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        $( "#opener02" ).on( "click", function() {
          $( "#dialog02" ).dialog( "open" );
        });
      } );

      $( function() {
        $( "#dialog03" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        $( "#opener03" ).on( "click", function() {
          $( "#dialog03" ).dialog( "open" );
        });
      } );

      $( function() {
        $( "#dialog04" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        $( "#opener04" ).on( "click", function() {
          $( "#dialog04" ).dialog( "open" );
        });
      } );
      
      $( function() {
        $( "#dialog05" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        $( "#opener05" ).on( "click", function() {
          $( "#dialog05" ).dialog( "open" );
        });
      } );


})