$(document).ready(function() {
    // Abrir/cerrar el menú lateral
    $('.toggle-menu').click(function() {
        let menu = $('.menu-categorias');
        if (menu.css('left') === '-250px') {
            menu.css('left', '0');
        } else {
            menu.css('left', '-250px');
        }
    });

    // Mostrar/ocultar subtipos al hacer clic en una categoría
    $('.categoria').click(function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        $(this).next('.subtipos').slideToggle(); // Muestra u oculta la lista de subtipos
    });
});
    