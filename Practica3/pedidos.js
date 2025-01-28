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
      alert("Has pulsado para archivar la ultima fila que tenia la tabla");
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
  $("#archivarTabla").click(function(){
    var tablaPendiente=$("#pendiente").find("tr");
    var tablaArchivados=$("#archivados") 
    $.each(tablaPendiente,function(nodo,valor){
        if(nodo!=0){
            //Para que no tome el nodo donde esta puesto id,imagen,fecha....
            tablaArchivados.append(valor);
        }
    })
    $("#contArchivados").css("display","block")
    $("#contPendiente").css("display","none")
  })

});
