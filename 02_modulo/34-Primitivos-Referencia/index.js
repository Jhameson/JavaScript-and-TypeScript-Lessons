/*
    ♦Primitivos - string, number, boolean, undefined, null, bigint, symbol

    São imutáveis

    ♦Referencia (mutavel) -array, object, function

    //////
    let a = 'algo';
    let b = a;
    a = b => a esta apontando para o mesmo local que b

*/

let nome = 'Lucas';
nome[0] = 'R'; //não faz nada => imutavel

let a = 'A';
let b = a; //copia => b nao vai mudar

/////////////////////////////////////

let c = [1,2,3];
let d = c;

c.push(4);
console.log(c , d); //o valor de D tambem foi alterado

d.pop();
console.log(c , d); //c tambem foi alterado


//copiar um array para outro
//operador spread
//copia sem que o novo array aponte para o mesmo local da memoria
let copia = [...c];

const a1 ={
    nome: 'Lucas',
    idade: 21
};

const b1 = {...a1}; //spread operator
a1.nome = 'Jhameson';

console.log(a1);
console.log(b1);

