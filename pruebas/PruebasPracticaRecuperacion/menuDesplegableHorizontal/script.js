$(document).ready(function() {
    // Cuando se hace clic en una categoría
    $(".categoria").on("click", function(e) {
      e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  
      // Buscar el <ul> (subcategoría) directamente dentro del <li> actual
      const subcategoria = $(this).next("ul");
  
      // Ocultar las demás subcategorías abiertas
      $(".menu-categorias ul ul").not(subcategoria).slideUp();
  
      // Mostrar/ocultar la subcategoría seleccionada
      subcategoria.slideToggle();
    });
    // Botón para abrir/cerrar todo el menú lateral (opcional)
    $(".toggle-menu").on("click", function() {
      $(".menu-categorias").slideToggle();
    });
  });
  