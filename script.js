document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle für das Hamburger-Menü
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('open'); // Öffnen/Schließen des Menüs
    });

    // Dropdown-Menüs ein- und ausklappen
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('a');
        toggle.addEventListener('click', (event) => {
            event.preventDefault(); // Verhindert das normale Link-Verhalten
            dropdown.classList.toggle('open'); // Toggle das Dropdown-Menü
        });
    });

    // Schließen der Dropdowns, wenn außerhalb geklickt wird
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.menu')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
            });
        }
    });
});
