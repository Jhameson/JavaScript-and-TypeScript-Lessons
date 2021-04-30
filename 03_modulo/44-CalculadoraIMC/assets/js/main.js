//capturar o evento submit do usuario
//seleciona o formulário
const form = document.querySelector('#form');

//parar o envio do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso'); //elemento com id peso
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value); //pega o valor digitado
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
   // console.log(nivelImc);
    setResultado(`Seu IMC é: ${imc} (${nivelImc})`,true)
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso',
        'Peso Normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarP() {
    const p = document.createElement('p'); // criar um <p></p>
    //p.classList.add('paragrafo'); //adiciona uma classe ao <p>
    return p;

}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado'); //seleciona o elemento com a #id resultado
    resultado.innerHTML = '';
    const p = criarP();

    if(isValid){
        p.classList.add('paragrafo-result');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}


