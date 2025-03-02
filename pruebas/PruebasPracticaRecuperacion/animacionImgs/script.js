$(document).ready(function() {
    // Cuando el mouse se posa sobre el contenedor
    $('.contenedor-imagen').hover(
        function() {
            // Mueve la imagen al centro
            $(this).find('.imagen').css('left', '0');
        },
        function() {
            // Retorna la imagen al lado izquierdo
            $(this).find('.imagen').css('left', '-100%');
        }
    );
});
