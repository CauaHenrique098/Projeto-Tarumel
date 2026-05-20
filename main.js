const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card, .card2');
const mensagemIndisponivel = document.getElementById('mensagemIndisponivel');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let cardsVisiveis = 0;

    cards.forEach(card => {
        const title = card.querySelector('.produto-titulo').textContent.toLowerCase();
        const description = card.querySelector('.desc').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
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