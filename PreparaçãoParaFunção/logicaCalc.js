// Capturar elementos
let tela = document.getElementById('tela');
let adicionar = document.getElementById("adicionar");
let subtrair = document.getElementById("subtrair");
let op = document.getElementById("op");

// Criar as funções para a manipulação
function atualizarMultiplicacao() {
    op.value = Number(tela.value) * 10;  // Atualiza o input "op" com a multiplicação por 10
}

function adicionarNum() {
    tela.value = Number(tela.value) + 1;
    atualizarMultiplicacao();  // Atualiza a multiplicação sempre que o número muda
}

function subtrairNum() {
    if (Number(tela.value) > 0) {  // Evita números negativos
        tela.value = Number(tela.value) - 1;
        atualizarMultiplicacao();  // Atualiza a multiplicação sempre que o número muda
    }
}

// Adicionar eventos aos botões
adicionar.addEventListener("click", adicionarNum);
subtrair.addEventListener("click", subtrairNum);
tela.addEventListener("input", atualizarMultiplicacao);