const { texto, arquivos } = require('../base');

// * - zero ou mais /opcional
// + - uma ou mais /obrigatório
// ? - zero ou uma /opcional
// \ - caractere de escape
// {n, m} mínimo, máximo
// {x} especifico X vezes

const exp01 = /casa+/ig;
const exp02 = /\.(jpe?g)/ig;

console.log("Retorno: " + texto.match(exp01));
for (arquivo of arquivos) {
    console.log(arquivo, arquivo.match(exp02));
}