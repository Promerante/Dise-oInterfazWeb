$(document).ready(function () {
    // Abrir la ventana emergente
    $("#botonEmergente").on("click", function () {
      $("#ventanaEmergente").removeClass("escondido").addClass("show");
    });
  
    // Cerrar la ventana emergente
    $("#cerrarVentana").on("click", function () {
      $("#ventanaEmergente").removeClass("show").addClass("escondido");
    });
  
    // Cambiar el prefijo automáticamente según el país seleccionado
    $("#pais").on("change", function () {
      const prefijo = $(this).val(); // Obtener el prefijo seleccionado del <select>
      $("#prefijo").val(prefijo); // Rellenar el input de prefijo
    });
  
    // Manejar el envío del formulario
    $("#formularioEmergente").on("submit", function (e) {
      e.preventDefault(); // Evitar recarga de página
      const pais = $("#pais option:selected").text(); // Obtener el nombre del país
      const prefijo = $("#prefijo").val(); // Obtener el prefijo seleccionado
      const numero = $("#numero").val(); // Obtener el número de móvil
  
      // Simular el envío del formulario
      alert(`Formulario enviado con éxito:\nPaís: ${pais}\nMóvil: ${prefijo} ${numero}`);
  
      // Cerrar la ventana emergente
      $("#ventanaEmergente").removeClass("show").addClass("escondido");
    });
  });
  