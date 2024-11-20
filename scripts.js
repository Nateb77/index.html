document.addEventListener('DOMContentLoaded', function() {
    const planets = document.querySelectorAll('.planet');

    planets.forEach(planet => {
        planet.addEventListener('click', () => {
            // Toggle the "active" class to show/hide the fun fact
            planet.classList.toggle('active');
        });
    });
});