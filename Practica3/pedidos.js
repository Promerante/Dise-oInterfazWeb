$(document).ready(function () {
  $(".archivar").click(function () {
    // Esto será para que siempre que se dé click en los botones de archivar,realice la función. De forma generalizada:
    let fila = $(this).closest("tr");
    // Recogemos la fila,es decir, todo el nodo tr para pasarlo en los futuros append
    var container, tabla;
    //Y esto para recoger el contenedor que contiene la tabla, si esta vacio,que vuelva a aparece
    if ($(this).closest("table").attr("id") == "pendiente") {
      // *CASO TABLA PENDIENTE
      $("#archivados").append(fila);
      tabla = $("#pendiente");
      container = $("#contArchivados");
    } else {
      // *CASO TABLA ARCHIVADOS
      $("#pendiente").append(fila);
      tabla = $("#archivados");
      container = $("#contPendiente");
    }
    if (container.css("display") == "none") {
      // *CASO DE ESTAR EL CONTENEDOR DONDE SE PASE LA FILA ESTÉ INVISIBLE
      container.css("display", "block");
    }
    if (tabla.find("tr").length == 1) {
      //*CASO DE QUE LA TABLA PIERDA SU ULTIMO ELEMENTO PASANDOLO A LA OTRA
      alert("Has pulsado para cambiar la ultima fila que tenia la tabla");
      tabla.closest("div").css("display", "none");
      console.log(tabla.find("tr").length);
    }
  });

  $(".eliminar").click(function () {
    // Caso click en los botones eliminar
    let tabla = $(this).closest("table");
    let container = tabla.closest("div");
    if (tabla.find("tr").length == 2) {
      //*CASO de que elimine el ultimo elemento que contiene la tabla
      alert("Has pulsado para eliminar la ultima fila que tenia la tabla");
      container.css("display", "none");
      $(this).closest("tr").remove();
    } else {
      $(this).closest("tr").remove();
    }
  });

  $(".archivarTodo").click(function () {
    var container=$(this).closest("div")
    var tabla=container.find("table")
    var filas = tabla.find("tr");
    $.each(filas, function (nodo, valor) {
      if(nodo!=0){
        //Para que no tome el nodo donde esta puesto id,imagen,fecha....
        $(valor).remove();
      }
    });
   container.css("display","none")
   //Hacemos invisible el contenedor
  });

  $("#cambiarTema").click(function () {
    let fondo = $("body").css("background-color");
    if (fondo == "rgb(0, 0, 0)") {
      // *CASO fondo oscuro
      $("body").addClass("bodyTemaClaro");
      $("nav").toggleClass("navegacionClaro");
      $(".contLogo img").attr("src", "imagenes/logo/logoICONRAW.png");
      $(".contLogo img").css({
        width: "75px",
        height: "75px",
      });
      $(".menuElemento").toggleClass("menuElementoClaro");
      $(".contCarrito img").attr("src", "imagenes/carrito.png");
      $(".contBuscador").css("background-color", "#c3c3c3");
      $("footer").css("background-color", "#c3c3c3");
      $(".tablaPedidos th, .tablaPedidos td").css(
        "border",
        "2px solid #000000"
      );
      $(".tablaArchivados th, .tablaPedidos td").css(
        "border",
        "2px solid #000000"
      );
      $(".archivarTabla").toggleClass("archivarTablaClaro");
    } else {
      // *CASO fondo claro
      $("body").removeClass("bodyTemaClaro");
      $("nav").toggleClass("navegacionClaro");
      $(".contLogo img").attr("src", "imagenes/logo/logo1Rectangulo.png");
      $(".contLogo img").css({
        width: "150px",
        height: "auto",
      });
      $(".menuElemento").toggleClass("menuElementoClaro");
      $(".contCarrito img").attr("src", "imagenes/carritoBlanco.png");
      $(".contBuscador").css("background-color", "#242527");
      $("footer").css("background-color", "#c3c3c3");
      $(".tablaPedidos th, .tablaPedidos td").css(
        "border",
        "2px solid whitesmoke"
      );
      $(".tablaArchivados th, .tablaPedidos td").css(
        "border",
        "2px solid whitesmoke"
      );
      $(".archivarTablaClaro").removeClass("archivarTablaClaro");
    }
  });
  $(".buscadorTablaInput").on("keyup",function () {
    // Con este evento hacemos que siempre que se introduzca un valor en el buscador de las tablas empieze a buscar
    var busqueda = $(this).val();
    var tabla = $(this).closest("table");
    var arrayID = [];
    var filas = tabla.find("tr");
    // Con esto "filas" contiene todas las filas de la tabla mas cercana
    $.each(filas, function (indice, valor) {
      if(indice!=0){
        // Para que no busque en la primera fila que tiene los titulos
        arrayID[indice]=$(valor).find("td:first").text().includes(busqueda);
        $(valor).toggle(arrayID[indice])
        // Ahora la arrayId contiene el texto de las primeras celdas de cada fila  
      }
    });
  });
  $("#cambiarFuente").click(function(){
    var cambiar=$(this).text();
    if(cambiar=="Aumentar Tamaño"){
      //*Caso aumentar tamaño
      $("*").each(function(){
        //Esto lo hacemos para que lo haga en cada elemento html(a eso se refiere el *)
        var tamaño=parseInt($(this).css("font-size"))
        $(this).css("font-size",`${tamaño+1}px`)
      })
      $(this).text("Disminuir Tamaño")
    }else{
      $("*").each(function(){
        var tamaño=parseInt($(this).css("font-size"))
        $(this).css("font-size",`${tamaño-1}px`)
      })
      $(this).text("Aumentar Tamaño")
    }

  })

});
