// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile_menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    mobileMenu.classList.toggle('menu-mobile');
});