document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("input", function () {
        let filter = searchBar.value.toLowerCase();
        let secciones = document.querySelectorAll(".categoria");

        secciones.forEach(seccion => {
            let productos = seccion.querySelectorAll(".producto");
            let hayCoincidencias = false;

            productos.forEach(producto => {
                let nombre = producto.getAttribute("data-name").toLowerCase();
                let descripcion = producto.getAttribute("data-desc").toLowerCase();

                if (nombre.includes(filter) || descripcion.includes(filter)) {
                    producto.style.display = "block";
                    hayCoincidencias = true;
                } else {
                    producto.style.display = "none";
                }
            });

            // Mostrar u ocultar la sección completa según si tiene productos visibles
            if (hayCoincidencias) {
                seccion.style.display = "block";
            } else {
                seccion.style.display = "none";
            }
        });
    });
});
