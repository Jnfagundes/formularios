document.addEventListener("DOMContentLoaded", function () {
    // Captura dos elementos
    const form = document.querySelector("form");
    const nome = document.getElementById("nome");
    const usuario = document.getElementById("usuario");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const botaoEnviar = document.getElementById("enviar");

    botaoEnviar.addEventListener("click", function (event) { // evento do mouse quando clicar no botão; função anônima
        event.preventDefault(); // Impede o envio automático do formulário
        // Criando variáveis de validação e um array para receber mensagens
        let valid = true;
        let mensagens = [];

        // Validação do Nome
        if (nome.value.trim() === "") { // Se não tiver nada dentro da variável nome, sem os espaços desnecessários, o programa 
            mensagens.push("O campo Nome é obrigatório.");
            valid = false;
        } else if (nome.value.trim().split(" ").length < 2) {
            mensagens.push("Digite seu nome completo.");
            valid = false;
        }

        // Validação do Usuário
        if (usuario.value.trim() === "") {
            mensagens.push("O campo Usuário é obrigatório.");
            valid = false;
        } else if (usuario.value.length < 3) {
            mensagens.push("O nome de usuário deve ter pelo menos 3 caracteres.");
            valid = false;
        }

        // Validação do Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            mensagens.push("O campo Email é obrigatório.");
            valid = false;
        } else if (!emailRegex.test(email.value)) {
            mensagens.push("Digite um email válido.");
            valid = false;
        }

        // Validação da Senha
        if (senha.value.trim() === "") {
            mensagens.push("O campo Senha é obrigatório.");
            valid = false;
        } else if (senha.value.length < 6) {
            mensagens.push("A senha deve ter pelo menos 6 caracteres.");
            valid = false;
        }

        // Exibir mensagens de erro
        const erroDiv = document.getElementById("mensagens-erro");
        if (!erroDiv) {
            const novoErroDiv = document.createElement("div");
            novoErroDiv.id = "mensagens-erro";
            novoErroDiv.style.color = "red";
            novoErroDiv.style.marginTop = "10px";
            form.insertAdjacentElement("beforebegin", novoErroDiv);
        } else {
            erroDiv.innerHTML = "";
        }

        if (!valid) {
            document.getElementById("mensagens-erro").innerHTML = mensagens.join("<br>");
        } else {
            alert("Cadastro realizado com sucesso!");
            form.submit(); // Envia o formulário se estiver tudo certo
        }
    });
});
