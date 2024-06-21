document.addEventListener('DOMContentLoaded',function(){

    let btnCalculo = document.querySelector('#btn-calcular'); // acessa o botão 'Calcular'
    
    btnCalculo.onclick = function(){ // Cria uma função que será acionada após o evento "click";

        const nome = document.querySelector('#nome').value; // acessando valor do input e armazenando na variável nome
        const altura = parseFloat(document.querySelector('#altura').value); // acessando valor do input e armazenando na variável altura
        const peso = parseFloat(document.querySelector('#peso').value);// acessando valor do input e armazenando na variável peso
        const divResultado = document.querySelector('#resultado');// acessando o elemento que futuramente irá receber textos.
    
        if(nome !== '' && altura !== '' && peso !== ''){ // Se nome for diferente de vazio....

            let valorIMC = (peso/(altura*altura)).toFixed(2); // valorIMC recebe calculo. / toFixed(2) => filtra para 2 casas decimais.

            let classificacao = ''; // criando variável vazia

            // Verificando IMC
            if(valorIMC < 18.5){
                classificacao = 'abaixo do peso`'
            }else if(valorIMC < 25){
                classificacao = 'com peso ideal. Parabéns!!'
            }else if(valorIMC < 30){
                classificacao = 'Levemente acima do peso.'
            }else if(valorIMC < 35){
                classificacao = 'com obesidade grau I.'
            }else if(valorIMC < 40){
                classificacao = 'com obesidade grau II.'
            }else{
                classificacao = 'com obesidade grau III.'
            }

            divResultado.textContent = `${nome} seu IMC é de ${valorIMC} e você esta ${classificacao}` // Adicionando texto após verificação do IMC
        }else{
            divResultado.textContent = 'Preencha todos os campos!' // Caso não seja preenchido todos os campos!
        }

    };
});
