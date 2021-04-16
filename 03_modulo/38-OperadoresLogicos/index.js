/*
    Operadores Lógicos:
    && -> AND -> E -> todas expressões verdadeiras para retornar true
    || -> OR -> OU -> ao menos uma expressão verdadeira para retornar true
    ! -> NOT -> NÃO -> nega a expressão
*/
let n1 = 4;
let n2 = 9;

console.log(n1>=2 && n2<9);
console.log(n1>=2 || n2<9);
console.log(n1>=2 && !(n2<9));
