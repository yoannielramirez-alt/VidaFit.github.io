// app.js corregido
function mostrarMensaje() {
    alert('Bienvenido al mejor Sitio Web de contenido Fitness');
}

function HacerClick() {
    // Si quieres que el mensaje aparezca al hacer click en algún elemento
    // primero asegúrate de que el elemento existe
    let elemento = document.getElementById('hora');
    if (elemento) {
        elemento.addEventListener('click', mostrarMensaje, false);
    }
}

// Solo un event listener para load
window.addEventListener('load', function () {
    // Si quieres que el mensaje aparezca automáticamente al cargar:
    // mostrarMensaje();

    // O si quieres asignar el click al elemento:
    HacerClick();
}, false);

