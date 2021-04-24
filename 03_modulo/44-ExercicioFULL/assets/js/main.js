
//capturar o evento submit do usuario

//seleciona o formulário
const form = document.querySelector('#peso');

//parar o envio do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();
    setResultado('Olá, mundo')
    console.log('aqui')
});

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}


