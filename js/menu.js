document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Escucha el clic en el botón de hamburguesa
    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'is-active' en el menú
        navLinks.classList.toggle('is-active');
        
        // También cambia el atributo aria-expanded para accesibilidad
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
});