$(document).ready(function () {
  /*Funciones para clase hoverAgranda:aumenta y disminuye tamaño según este el mouse encima */
  $(".hoverAgranda").mouseenter(function () {
    //Primera funcion para que dispare cuando el mouse entra.
    let anchura = $(this).width();
    let altura = $(this).height();
    $(this).animate(
      {
        // Quiero que se agrande porcentualmente para mantener un diseño responsive
        width: anchura * 1.1 + "px",
        height: altura * 1.1 + "px",
      },
      100
    );
  });
  $(".hoverAgranda").mouseleave(function () {
    //Segunda funcion para que dispare cuando el mouse salga
    let anchura = $(this).width();
    let altura = $(this).height();
    $(this).animate(
      {
        width: anchura / 1.1 + "px",
        height: altura / 1.1 + "px",
      },
      100
    );
  });
  /*Funcionalidad para menu lateral:*/
  $("#Categoria").click(function () {
    let menu = $("aside");
    let anchoPantalla=$(window).width();
    let main = $(".CategoriasProductos");
    if(anchoPantalla>925){
      // Caso pantalla mayor de 925, se mueve lateralmente
      if (menu.css("left") === "-250px" ) {
        menu.css("left", "0");
        main.addClass("encogido");
      } else {
        menu.css("left", "-250px");
        main.removeClass("encogido");
      }
    }else{
      // Caso menor, quiero que el aside ocupe todo el lateral
      console.log(menu.css("left") );
      if (menu.css("left") === "-1000px" ) {
        menu.css("left", "0");
        
      } else {
        menu.css("left", "-1000px");
      
      }
    }
  });
  $("aside ul li").mouseenter(function () {
    let img = $(this).find("img");
    img.attr("src", img.attr("src").slice(0, -4) + "Hover.png");
  });
  $("aside ul li").mouseleave(function () {
    let img = $(this).find("img");
    let src = img.attr("src");
    let newSrc = src.slice(0, -9) + ".png";
    img.attr("src", newSrc);
  });
  // Mostrar la ventana emergente
  $("#recibirOfertas").click(function () {
    $("#ventanaEmergente").removeClass("escondido").addClass("show");
  });
  $("#cerrarVentana").click(function () {
    $("#ventanaEmergente").removeClass("show").addClass("escondido");
  });
  $("#pais").change( function () {
    const prefijo = $(this).val(); 
    $("#prefijo").val(prefijo);   
  });
  $("#formularioEmergente").submit(function (e) {
    e.preventDefault(); // Evitar la recarga de la página
    const nombre = $("#nombre").val();
    const email = $("#email").val();
    const prefijo= $("#prefijo").val();
    const numero=$("#numero").val();
    alert(
      `Formulario enviado con éxito:\nNombre: ${nombre}\nEmail: ${email}\nMovil:${prefijo} ${numero}`
    );
    // Cerrar la ventana emergente después del envío
    $("#ventanaEmergente").removeClass("show").addClass("escondido");
  });
});
