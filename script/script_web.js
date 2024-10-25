// Selecciona todos los elementos <li> dentro de la lista de navegación del menú.
var enlaces = document.querySelectorAll('nav ul li');

// Selecciona todos los elementos <li> dentro de las listas de ítems secundarias dentro de las secciones principales.
var enlaces2 = document.querySelectorAll('main section ul li');

// Esta función se ejecuta cuando la página se ha cargado completamente.
window.onload = inicializar;

function inicializar() {
    // Añade eventos a cada elemento de la lista de navegación del menú.
    enlaces.forEach(function(enlace) {
        // Cuando el cursor se desplaza sobre el elemento de la lista de navegación...
        enlace.addEventListener('mouseover', function() {
            // Aplica un efecto de transformación al elemento para aumentar su escala.
            enlace.style.borderRadius =("50%");
            enlace.style.transform = "scale(1.5)";
            enlace.style.transition= ("transform 0.3s ease");
        });
        // Cuando el cursor se aleja del elemento de la lista de navegación...
        enlace.addEventListener('mouseout', function() {
            // Restaura el estado original del elemento.
            enlace.style.transform = '';
        });
    });

    // Añade eventos a cada elemento de las listas de ítems secundarias dentro de las secciones principales.
    enlaces2.forEach(function(enlace) {
        // Cuando el cursor se desplaza sobre el elemento de la lista de ítems secundaria...
        enlace.addEventListener('mouseover', function() {
            // Aplica un efecto de transformación al elemento para aumentar su escala.
            enlace.style.transform = "scale(1.1)";
            enlace.style.transition= ("transform 0.3s ease");
        });
        // Cuando el cursor se aleja del elemento de la lista de ítems secundaria...
        enlace.addEventListener('mouseout', function() {
            // Restaura el estado original del elemento.
            enlace.style.transform = '';
        });
    });

    // Selecciona el botón "Volver arriba".
    const backToTopButton = document.getElementById('backToTop');

    // Añade un evento de clic al botón "Volver arriba".
    backToTopButton.addEventListener('click', function() {
        // Selecciona la etiqueta 'nav'.
        const nav = document.querySelector('nav');
        
        // Desplaza la ventana suavemente hasta la etiqueta 'nav'.
        window.scrollTo({ top: nav.offsetTop, behavior: 'smooth' });
    });
}