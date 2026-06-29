// ==========================
// DADOS DOS PERSONAGENS
// ==========================

const personagens = {

    arthur: {
        nome: "Arthur Leywin",
        descricao: "Protagonista da obra e reencarnação do Rei Grey. Um mago extremamente talentoso que também domina o Éter."
    },

    tessia: {
        nome: "Tessia Eralith",
        descricao: "Princesa do Reino Élfico e amiga de infância de Arthur. Especialista em magia da natureza."
    },

    sylvie: {
        nome: "Sylvie",
        descricao: "Filha de Sylvia e companheira inseparável de Arthur durante boa parte da história."
    },

    regis: {
        nome: "Regis",
        descricao: "Companheiro criado através do Éter. Possui personalidade divertida e grande poder."
    },

    virion: {
        nome: "Virion Eralith",
        descricao: "Antigo rei dos elfos e mentor de Arthur. Um dos estrategistas mais respeitados de Dicathen."
    },

    bairon: {
        nome: "Bairon Wykes",
        descricao: "Uma das Lanças de Dicathen e usuário de magia de relâmpago."
    }

};

// ==========================
// PESQUISA
// ==========================

const pesquisa = document.getElementById("search");
const cards = document.querySelectorAll(".character-card");

pesquisa.addEventListener("keyup", () => {

    const texto = pesquisa.value.toLowerCase();

    cards.forEach(card => {

        const nome = card.dataset.name;

        if (nome.includes(texto)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ==========================
// FILTROS
// ==========================

const filtros = document.querySelectorAll(".filter-btn");

filtros.forEach(botao => {

    botao.addEventListener("click", () => {

        filtros.forEach(btn => btn.classList.remove("active"));

        botao.classList.add("active");

        const categoria = botao.textContent.toLowerCase();

        cards.forEach(card => {

            if (categoria === "todos") {

                card.style.display = "block";

            }

            else if (card.dataset.raca === categoria.slice(0, -1)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

// ==========================
// MODAL
// ==========================

const modal = document.getElementById("modal");
const nome = document.getElementById("nomePersonagem");
const descricao = document.getElementById("descricaoPersonagem");
const fechar = document.querySelector(".close");

const botoes = document.querySelectorAll(".detalhes-personagem");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const id = botao.dataset.personagem;

        nome.textContent = personagens[id].nome;
        descricao.textContent = personagens[id].descricao;

        modal.style.display = "flex";

    });

});

fechar.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});