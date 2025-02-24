//Captura dos elementos
let nome = document.getElementById('nome');
let usuario = document.getElementById('usuario');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let enviar = document.getElementById('enviar');
let form = document.getElementsByTagName('form');

//criar um evento que ocorre no botão enviar
//usar uma função anônima com o parametro (event)
//usar "event.preventDefault()"
enviar.addEventListener('click', function (event){
    event.preventDefault();
    
//Crie duas variáveis de controle, uma para controlar as falhas no formulário e outra para guardar as menssagens.
//a variável para as falhas dever ser booleana começando com o valor verdadeiro
    
    let falhas = true;
    let mensagens = [];

//validando o nome:
//busque o valor do nome e verifique se ele está vazio usando o método "trim()".
//Imprima uma mensagem avisando da obrigatoriedade de preencher esse campo e altere o valor da variável acima para falso
    if (nome.value.trim() == 0){
        alert("É obrigatório o preenchemento do campo 'nome'");
        falhas = false
    }

//use um else para continuar o if acima e descobrir se foram digitados pelo menos duas palavras
//para isso use o método "trim()" para remover os espaços e use o método "split(" ")" para transformar o texto em palavras
// Busque o tamanho do array para saber se ele contém duas palavras
//altere a variável booleana para falso
else{
    if (nome.value.trim().split(" ") >= 2){
        
    }
};
})





