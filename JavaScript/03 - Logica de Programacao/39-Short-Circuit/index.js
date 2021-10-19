/*
    ||
    && -> para a checagem quando acha um false e retorna o "valor mesmo"

    FALSY -> valores que avaliam em false quando necessário
    são eles:
        0
        ' ', " " -> string vazia
        null / undefined
        NaN

    *false é o valor literal "false"
*/

let expressao1 = 'a' && 0 && 'b'; // retorna o 0 -> parou a checagem pois 0 é uma expressão false
let expressao2 = 'a' && true && 'b'; // retorna o b -> o ultimo pois todos sao trues
let expressao3 = 'a' && true && ' '; // retorna o ' ' -> FALSY

console.log(expressao1);
console.log(expressao2);
console.log(expressao3);


//exemplo de circuit

let corEscolhida = null; //usuario pode ou não escolher
let corPadrao = corEscolhida || 'Preto'; //se o usuário não selecionar nenhuma cor ele retorna a ultima, pois é um valor verdadeiro

console.log(corPadrao);
