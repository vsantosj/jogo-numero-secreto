//selecionar um elemento  = document.querySelector(elemento)
//colocar algo nesse elemento  nomedavariaveldoelemento.innerHTML
//

let numeroSecreto = gerarNumeroAleatorio();




function exibirTextosNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*100 +1)
    
}


exibirTextosNaTela('h1','Jogo do número secreto')
exibirTextosNaTela('p',`Ecolha um numero entre 1 e 100`)
console.log(numeroSecreto)

//função para clique de botão chutar
function verificarChute(){
    let chute = document.querySelector('input').value;

    if(numeroSecreto == chute){
        exibirTextosNaTela('p', 'Você acertou!!!')
    }
    console.log(numeroSecreto)
    
}   




