const menuBtn = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });
}

let picole = [
    { texto: "ABACAXI", src: "Sabor-Picole/Abacaxi.png" },
    { texto: "ACEROLA", src: "Sabor-Picole/Acerola.png" },
    { texto: "BRIGADEIRO", src: "Sabor-Picole/Brigadeiro.png" },
    { texto: "CHOCOLATE", src: "Sabor-Picole/Chocolate.png" },
    { texto: "COALHADA", src: "Sabor-Picole/Coalhada.png" },
    { texto: "COCO-BRANCO", src: "Sabor-Picole/Coco-Branco.png" },
    { texto: "COCO-QUEIMADO", src: "Sabor-Picole/Coco-Queimado.png" },
    { texto: "CREME", src: "Sabor-Picole/Creme.png" },
    { texto: "FLOCOS", src: "Sabor-Picole/Flocos.png" },
    { texto: "GROSELHA", src: "Sabor-Picole/Groselha.png" },
    { texto: "LEITE CONDENSADO", src: "Sabor-Picole/Leite-Condensado.png" },
    { texto: "LIMãO", src: "Sabor-Picole/Limao.png" },
    { texto: "MILHO VERDE", src: "Sabor-Picole/Milho-Verde.png" },
    { texto: "MINI-SAIA", src: "Sabor-Picole/Mini-Saia.png" },
    { texto: "MORANGO", src: "Sabor-Picole/Morango.png" },
    { texto: "SKIMO", src: "Sabor-Picole/Skimo.png" },
    { texto: "TANGERINA", src: "Sabor-Picole/Tangerina.png" },
    { texto: "UVA", src: "Sabor-Picole/Uva.png" }
];

const listaPicole = document.getElementById("listaPicole");

function exibirPicole() {
    let html = "";
    for (let i = 0; i < picole.length; i++) {
        const item = picole[i];
        html += `
            <div class='card'> 
                <div class='produto-img'> 
                    <img src='${item.src}' alt='${item.texto}'> 
                </div> 
                <div class='info'>
                    <h3 class='produto-titulo'>${item.texto}</h3> 
                </div>
            </div>`;
    }
    listaPicole.innerHTML = html;
}

exibirPicole();

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