const calcular = document.getElementById("calcular")//pega infomações do botão calcular

function imc(){
    const nome = document.getElementById("nome").value //pega o valor escrito no nome
    const altura = document.getElementById("altura").value //pega o valor escrito na altura
    const peso = document.getElementById("peso").value //pega o valor escrito no peso
    const resultado = document.getElementById("resultado") //valor que vai ser imprimido no display

    if(nome !== '' && altura !=='' && peso !==''){ //se o nome, altura e peso for diferente de vazio, então
        
        const valorIMC = (peso/(altura*altura)).toFixed(1)// opração do imc, fixando uma casa após a virgula

        let classificacao = '' //variavel para exibir o estado eme que a pessoa se encontra

        if(valorIMC<18.5){
            classificacao = "abaixo do peso."
        }else if(valorIMC<25) {
            classificacao = "com o peso ideal."
        }else if(valorIMC<30){
            classificacao = "levemente acima do peso."
        }else if(valorIMC<35){
            classificacao = "com obesidade grau I."
        }else if(valorIMC<40){
            classificacao = "com obesidade grau II."
        } else{
            classificacao = "com obesidade grau III,"
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}, e você está ${classificacao}` //escreve o valor do imc no display resultado

    }else{
        resultado.textContent = 'Preencha todos os campos' // se algum campo estiver vazio imprime no display esssa mensagem
    }
}

calcular.addEventListener("click",imc)//quando clicar no botão de calcular, adicionar um evento com uma função chamada imc