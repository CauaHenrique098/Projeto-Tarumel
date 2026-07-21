const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card, .card2');
const mensagemIndisponivel = document.getElementById('mensagemIndisponivel');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let cardsVisiveis = 0;

        cards.forEach(card => {
            const title = card.querySelector('.produto-titulo').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                card.classList.remove('escondido');
                cardsVisiveis++;
            } else {
                card.classList.add('escondido');
            }
        });

        if (cardsVisiveis === 0) {
            mensagemIndisponivel.style.display = 'block';
        } else {
            mensagemIndisponivel.style.display = 'none';
        }
    });
}

const menuBtn = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });
}