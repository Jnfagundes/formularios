//Captura dos elementos
let nome = document.getElementById('nome');
let usuario = document.getElementById('usuario');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let enviar = document.getElementById('enviar');

//Validando o nome
function nomeCerto(){

    if (nome.length < 7);{
        alert("Nome inválido");
    }
};


enviar.addEventListener('submit', nomeCerto)


// let pessoa = "Ana Carolina";

// console.log(pessoa.length);
