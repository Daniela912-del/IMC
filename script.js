const calcular = document.getElementById('calcular');

function imc() {
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');
 if (nome !== '' && peso !== '' && altura !== '') {
    const valorIMC = (peso.value / (altura.value * altura.value)).toFixed(1);
    let classificacao = '';
    if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso.';
    } else if (valorIMC < 25) {
        classificacao = 'com peso ideal. Parabéns!';
    } else if (valorIMC < 30) {
        classificacao = 'levemente acima do peso.';
    } else if (valorIMC < 35) {
        classificacao = 'com obesidade grau I.';
    } else if (valorIMC < 40) {
        classificacao = 'com obesidade grau II.';
    } else {
        classificacao = 'com obesidade grau III. Cuidado!';
    }
    resultado.textContent = `${nome.value} seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Por favor, preencha todos os campos.';
    }

}
calcular.addEventListener('click', imc);
