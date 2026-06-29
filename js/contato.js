// ==========================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// ==========================

const formulario = document.querySelector("#formContato");
const mensagem = document.querySelector("#mensagemStatus");

formulario.addEventListener("submit", function(event) {

    event.preventDefault(); // impede atualizar a página

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const texto = document.querySelector("#texto").value.trim();


    // Verifica campos vazios
    if (nome === "" || email === "" || texto === "") {

        mensagem.textContent = "❌ Preencha todos os campos.";
        mensagem.className = "erro";

        return;
    }


    // Validação simples de email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {

        mensagem.textContent = "❌ Digite um email válido.";
        mensagem.className = "erro";

        return;
    }


    // Sucesso
    mensagem.textContent = "✅ Mensagem enviada com sucesso!";
    mensagem.className = "sucesso";


    // limpa o formulário
    formulario.reset();

});