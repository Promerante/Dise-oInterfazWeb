$(window).ready(function(){
    $(".CategoriasProductos").accordion({
        collapsible: true
    })
    $( function() {
        var availableTags = [
          "Roomba",
          "Auriculares Razork",
          "MacBook Pro",
          "Intel I5 12400F",
        ];
        $( "#buscadorHeader" ).autocomplete({
          source: availableTags
        });
      } );

      $( function() {
        $( ".boton1" ).button();
        $( "button, input, a" ).on( "click", function( event ) {
          event.preventDefault();
        } );
      } );
      $( function() {
        $( "#datepicker" ).datepicker();
      } );
      
})