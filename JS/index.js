const menuBtn = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });
}