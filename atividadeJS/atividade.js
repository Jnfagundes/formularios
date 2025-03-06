let acesa = document.getElementById('acesa');

function corAmarela(){
    let amarelo = document.getElementById('amarelo');
    amarelo.style.background = 'yellow'
}

function corVermelha(){
    let amarelo = document.getElementById('amarelo');
    amarelo.style.background = 'red'
}

function acender(){
    acesa.style.backgroundImage = "url(Images/lampadaAcesa.png)"
}

function apagar(){
    acesa.style.backgroundImage = "url(Images/lampadaApagada.png)"
}

function quebrar(){
    acesa.style.backgroundImage = "url(Images/lampadaQuebradaC.png)"
}

