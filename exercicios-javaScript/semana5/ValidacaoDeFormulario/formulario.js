const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");

emailInput.addEventListener("blur", () => {
    if (!emailInput.value.includes("@")) {
    erroEmail.textContent = "Email deve conter @";
    }
});

emailInput.addEventListener("input", () => {
    erroEmail.textContent = "";
});

senhaInput.addEventListener("blur", () => {
    if (senhaInput.value.length < 6) {
    erroSenha.textContent = "Senha deve ter pelo menos 6 caracteres";
    }
});

senhaInput.addEventListener("input", () => {
    erroSenha.textContent = "";
});