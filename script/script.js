/*<!--=============== HAMBURGER MENU ===============-->*/
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile_menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    mobileMenu.classList.toggle('menu-mobile');
});

/*<!--=============== SCROLL REVEAL ===============-->*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true,
})

sr.reveal(`.navbar`)
sr.reveal(`.hero-text`, {delay: 400, origin: 'bottom'})
sr.reveal(`.footer-menu`)
sr.reveal(`.social-media`, {delay: 400, origin: 'bottom'})
sr.reveal(`.footer-logo`)