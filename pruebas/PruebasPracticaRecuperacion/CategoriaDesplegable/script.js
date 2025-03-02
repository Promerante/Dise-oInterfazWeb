// Usando jQuery para hacer el menú lateral desplegable
$(document).ready(function() {
    $('.toggle-menu').click(function() {
        $('.menu-lateral').toggleClass('active');
    });
});
