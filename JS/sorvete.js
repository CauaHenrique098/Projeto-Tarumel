const menuBtn = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });
}

let sorvete200ML = [
    { texto: "ABACAXI", src: "Sabor-Sorvete/200ML/Abacaxi.webp" },
    { texto: "CHOCOLATE", src: "Sabor-Sorvete/200ML/Chocolate.webp" },
    { texto: "COCO BRANCO", src: "Sabor-Sorvete/200ML/Coco-Branco.webp" },
    { texto: "FLOCOS", src: "Sabor-Sorvete/200ML/Flocos.webp" },
    { texto: "LEITE CONDENSADO", src: "Sabor-Sorvete/200ML/Leite-Condensado.webp" },
    { texto: "MORANGO", src: "Sabor-Sorvete/200ML/Morango.webp" },
    { texto: "NINHO TRUFADO", src: "Sabor-Sorvete/200ML/Ninho-Trufado.webp" },
    { texto: "SONHO DE VALSA", src: "Sabor-Sorvete/200ML/Sonho-De-Valsa.webp" },
];

let sorvete1L = [
    { texto: "ABACAXI", src: "Sabor-Sorvete/1L/Abacaxi.webp" },
    { texto: "CHOCOLATE", src: "Sabor-Sorvete/1L/Chocolate.webp" },
    { texto: "COCO BRANCO", src: "Sabor-Sorvete/1L/Coco-Branco.webp" },
    { texto: "COCO QUEIMADO", src: "Sabor-Sorvete/1L/Coco-Queimado.webp" },
    { texto: "FLOCOS", src: "Sabor-Sorvete/1L/Flocos.webp" },
    { texto: "LEITE CONDENSADO", src: "Sabor-Sorvete/1L/Leite-Condensado.webp" },
    { texto: "MORANGO", src: "Sabor-Sorvete/1L/Morango.webp" },
    { texto: "NINHO TRUFADO", src: "Sabor-Sorvete/1L/Ninho-Trufado.webp" },
    { texto: "OVO MALTINE", src: "Sabor-Sorvete/1L/Ovo-Maltine.webp" },
];

const listaSorvete200ML = document.getElementById("listaSorvete200ML");
function exibirSorvete200ML() {
    let html = "";
    for (let i = 0; i < sorvete200ML.length; i++) {
        const item = sorvete200ML[i];
        html += `
            <div class='card2'>
                <div class='produto-img2'>
                    <img src='${item.src}' alt='${item.texto}'>
                </div>
                <div class='info'>
                    <h3 class='produto-titulo'>${item.texto}</h3>
                </div>
            </div>`;
    }
    listaSorvete200ML.innerHTML = html;
}
exibirSorvete200ML();


const listaSorvete1L = document.getElementById("listaSorvete1L");
function exibirSorvete1L() {
    let html = "";
    for (let i = 0; i < sorvete1L.length; i++) {
        const item = sorvete1L[i];
        html += `
            <div class='card2'>
                <div class='produto-img2'>
                    <img src='${item.src}' alt='${item.texto}'>
                </div>
                <div class='info'>
                    <h3 class='produto-titulo'>${item.texto}</h3>
                </div>
            </div>`;
    }
    listaSorvete1L.innerHTML = html;
}
exibirSorvete1L();



const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card, .card2');
const mensagemIndisponivel = document.getElementById('mensagemIndisponivel');
const blackLine = document.getElementById('blackLine');

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
            mensagemIndisponivel.style.marginBottom = '80px';
            blackLine.style.display = 'none'
        } else {
            mensagemIndisponivel.style.display = 'none';
        }
    });
}