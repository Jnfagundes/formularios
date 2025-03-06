let apagada = document.getElementById("apagada");

apagada.style.backgroundImage = "url(Images/apagada.png)";
apagada.style.backgroundSize = "cover";
apagada.style.backgroundRepeat = "no-repeat";

function acender(){
    apagada.style.backgroundImage = "url(Images/acesa.png)"
}

function apaga(){
    apagada.style.backgroundImage = "url(Images/apagada.png)"
}

function quebra(){
    apagada.style.backgroundImage = "url(Images/quebrada.png)"
    apagada.addEventListener("mousemove", () => {
        apagada.style.backgroundImage = "url(Images/quebrada.png)"
    })
    apagada.addEventListener("mouseout", () => {
        apagada.style.backgroundImage = "url(Images/quebrada.png)"
    })
}

function quebraMuito(){
    apagada.style.backgroundImage = "url(Images/muitoQuebrada.png)"
    apagada.addEventListener("mouseout", () => {
        apagada.style.backgroundImage = "url(Images/muitoQuebrada.png)"
    })
    apagada.addEventListener("mousemove", () => {
        apagada.style.backgroundImage = "url(Images/muitoQuebrada.png)"
    })
    apagada.addEventListener("click", () => {
        apagada.style.backgroundImage = "url(Images/muitoQuebrada.png)"
    })
    apagada.addEventListener("dblclick", () => {
        apagada.style.backgroundImage = "url(Images/muitoQuebrada.png)"
    })
}


