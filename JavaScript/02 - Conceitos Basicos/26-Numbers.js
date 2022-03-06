/*
    Numbers

*/
let num1 = 12;
let num2 = 2.1435453;
let num3 = 24;

console.log(num1.toString()+num2);
//num1 = num1.toString();
console.log(typeof(num1));

console.log(num3.toString(2)); //mostra em binario
console.log(num2.toFixed(2)); //casas decimais após a virgula

console.log(Number.isInteger(num1)); //retorna boll => se o numero é inteiro ou não
console.log(Number.isNaN(num1)); // verifica se é um numero => pode ser usado paar verificar se a conta é valida

// IEEE 754-2008 PADRÃO JS PARA DECIMAIS
//imprecisão
let n1 = 0.5;
let n2 = 0.1;

n1 += n2;
n1 += n2;
n1 += n2;

//solução 01
n1 = Number(n1.toFixed(2));

//solução 02
// n1 = ((n1 * 100) + (n2 * 100))/100;
// n1 = ((n1 * 100) + (n2 * 100))/100;
// n1 = ((n1 * 100) + (n2 * 100))/100;

console.log("IEEE: "+n1);



console.log();
console.log();
