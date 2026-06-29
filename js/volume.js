// Modal
const modal = document.getElementById("modal");
const titulo = document.getElementById("titulo-volume");
const descricao = document.getElementById("descricao-volume");
const fechar = document.querySelector(".close");

// Informações dos volumes
const volumes = {
    1: {
        titulo: "Volume 1 - The Beginning After The End",
        descricao: "Arthur Leywin nasce em um novo mundo após sua morte como Rei Grey. Neste volume conhecemos sua família, seu talento para a magia e o início de sua jornada."
    },

    2: {
        titulo: "Volume 2 - New Heights",
        descricao: "Arthur continua seu treinamento e faz novas amizades enquanto aprende mais sobre magia e sobre o continente de Dicathen."
    },

    3: {
        titulo: "Volume 3 - Beckoning Fates",
        descricao: "Arthur enfrenta desafios cada vez maiores e começa a descobrir ameaças que podem mudar o destino do continente."
    },

    4: {
        titulo: "Volume 4 - Horizon's Edge",
        descricao: "A entrada na Academia Xyrus marca uma nova fase da vida de Arthur, trazendo aliados, rivais e perigos inesperados."
    },
    5: {
        titulo: "Volume 5 - Convergence",
        descricao: "A entrada na Academia Xyrus marca uma nova fase da vida de Arthur, trazendo aliados, rivais e perigos inesperados."
    },
    6: {
        titulo: "Volume 6 - Transcendence",
        descricao: "A entrada na Academia Xyrus marca uma nova fase da vida de Arthur, trazendo aliados, rivais e perigos inesperados."
    },
    7: {
        titulo: "Volume 7 - Divergence",
        descricao: "A entrada na Academia Xyrus marca uma nova fase da vida de Arthur, trazendo aliados, rivais e perigos inesperados."
    },
    8: {
        titulo: "Volume 8 - Ascension",
        descricao: "Depois de Arthur ter seu corpo totalmente desintegrado no ultimo volume junto de sylvie, ele acorda em um lugar diferente, com um corpo diferente, e com um parceiro diferente, uma bola de fogo roxa, oque poderia ter acontecido e onde ele estaria?"
    },
    8.5: {
        titulo: "Volume 8.5 - Amongst the fallen",
        descricao: "A entrada na Academia Xyrus marca uma nova fase da vida de Arthur, trazendo aliados, rivais e perigos inesperados."
    },
    9: {
        titulo: "Volume 9 - Reckoning",
        descricao: "A entrada na Academia Xyrus marca uma nova fase da vida de Arthur, trazendo aliados, rivais e perigos inesperados."
    },
    10: {
        titulo: "Volume 10 - Retribution",
        descricao: "A entrada na Academia Xyrus marca uma nova fase da vida de Arthur, trazendo aliados, rivais e perigos inesperados."
    },
    11: {
        titulo: "Volume 4 - Providence",
        descricao: "A entrada na Academia Xyrus marca uma nova fase da vida de Arthur, trazendo aliados, rivais e perigos inesperados."
    },
    12: {
        titulo: "Volume 12 - Apotheosis",
        descricao: "A entrada na Academia Xyrus marca uma nova fase da vida de Arthur, trazendo aliados, rivais e perigos inesperados."
    }
};

// Botões
const botoes = document.querySelectorAll(".detalhes-btn");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const numero = botao.dataset.volume;

        titulo.textContent = volumes[numero].titulo;
        descricao.textContent = volumes[numero].descricao;

        modal.style.display = "flex";

    });

});

// Fechar clicando no X
fechar.addEventListener("click", () => {

    modal.style.display = "none";

});

// Fechar clicando fora do modal
window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});