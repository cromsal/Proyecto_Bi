window.onload = function() {
    // Selecciona el botón "Volver arriba".
    const backToTopButton = document.getElementById('backToTop');

    // Añade un evento de clic al botón "Volver arriba".
    backToTopButton.addEventListener('click', function() {
        // Selecciona la etiqueta 'nav'.
        const nav = document.querySelector('nav');
        
        // Desplaza la ventana suavemente hasta la etiqueta 'nav'.
        window.scrollTo({ top: nav.offsetTop, behavior: 'smooth' });
    });
};
