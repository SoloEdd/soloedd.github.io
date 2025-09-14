document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('is-active');
        // Cambia el aria-expanded para accesibilidad
        menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('is-active'));
    });
});
