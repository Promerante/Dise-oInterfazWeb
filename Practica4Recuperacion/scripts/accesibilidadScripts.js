$(document).ready(function () {
  // Cuando se hace clic en una categoría
  $(".criterios").click(function () {
    const subcategoria = $(this).next("ul");
    subcategoria.slideToggle();
  });
});
