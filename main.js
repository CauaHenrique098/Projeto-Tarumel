const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const texto = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".card, .card2");

    cards.forEach(function (card) {

        const titulo = card
            .querySelector(".produto-titulo")
            .textContent
            .toLowerCase();

        if (titulo.includes(texto)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});