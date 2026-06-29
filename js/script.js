// ==========================
// ANO AUTOMÁTICO NO RODAPÉ
// ==========================

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// ==========================
// SCROLL SUAVE
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ==========================
// AVISO DE SPOILER
// ==========================

const aviso = document.getElementById("spoiler-warning");
const fecharAviso = document.getElementById("closeWarning");

if (aviso && fecharAviso) {

    fecharAviso.addEventListener("click", () => {

        aviso.style.display = "none";

    });

}

// ==========================
// BOTÃO VOLTAR AO TOPO
// ==========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 200) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    });

backToTop.addEventListener("click", () => {

    console.log("Cliquei!");

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

});
}
console.log("Script carregou!");

const botao = document.getElementById("backToTop");

console.log(botao);