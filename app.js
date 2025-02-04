//selecionar um elemento  = document.querySelector(elemento)
//colocar algo nesse elemento  nomedavariaveldoelemento.innerHTML
//
let listaNumeroSecreto =[];
let numeroMaximo = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa=1;


function mensagemInicial(){
    exibirTextosNaTela('h1','Jogo do número secreto');
    exibirTextosNaTela('p',`Escolha um numero entre 1 e 100`);

}

// funções
function exibirTextosNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}

function gerarNumeroAleatorio(){
    let numeroGerado = parseInt(Math.random()*numeroMaximo+1);
    let quantidadeElementos = listaNumeroSecreto.length;
//para que fique rodando o jogo sem parar
    if(quantidadeElementos == numeroMaximo){
        listaNumeroSecreto =[];
    } if(listaNumeroSecreto.includes(numeroGerado)){
            return gerarNumeroAleatorio();
        }else{
            listaNumeroSecreto.push(numeroGerado);
            console.log(listaNumeroSecreto);
            return numeroGerado;
        }
    }
//


// função reiniciar 
function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativa = 1;
   mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}


//Funcção de limpar o input
function limparCampo(){
    chute = document.querySelector('input');
    chute.value='';
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa';
    let mensagemTentativa= `Você descobriu o numero secreto com ${tentativa} ${palavraTentativa}`; 
    if(numeroSecreto == chute){
        exibirTextosNaTela('h1', 'Você acertou!');
        exibirTextosNaTela('p', `${mensagemTentativa}`);
        document.getElementById('reiniciar').removeAttribute('Disabled')
    }else {
        if(numeroSecreto > chute){
        exibirTextosNaTela('p','O número secreto é maior. Tente outra vez.')
    }else{
        exibirTextosNaTela('p','O número secreto é menor. Tente outra vez.');
    }

     tentativa +=1;
     limparCampo();
        }

    }






