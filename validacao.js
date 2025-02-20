//Captura dos elementos
let usuario = document.getElementById('usuario');
let email = document.getElementById('email');
let senha = document.getElementById('senha');

let nome = ['Maria', 'Joana', 'Carla'];
let sobrenome = ['Santos', 'Lima', 'Rocha'];
let idade = [5, 15, 41];

let arrayPessoa = [['Maria', 'Joana', 'Carla'], ['Santos', 'Lima', 'Rocha'],[5, 15, 41]];
console.log(nome);
console.log(arrayPessoa)

let objetoPessoa = {
    nome: "Maria", 
    sobrenome: "Santos",
    idade: 15
}

console.log(objetoPessoa);
console.log(objetoPessoa.sobrenome)