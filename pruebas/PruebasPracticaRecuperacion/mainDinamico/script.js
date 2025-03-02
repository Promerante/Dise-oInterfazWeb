document.querySelector(".toggle-btn").addEventListener("click", function () {
    const aside = document.querySelector("aside");
    const main = document.querySelector("main");
  
    if (aside.style.left === "0px") {
      aside.style.left = "-250px"; // Ocultar el aside
      main.classList.remove("shrink"); // Elimina la clase que ajusta el margen
    } else {
      aside.style.left = "0px"; // Mostrar el aside
      main.classList.add("shrink"); // Ajusta el margen del main
    }
  });
  