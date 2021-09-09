const {alfabeto} = require('../base');

// [] = conjuntos
// ^ = negação
// [-] = range


const exp01 = /[abc]/gi; 
const exp02 = /[abc]+/gi;
const exp03 = /[^abcde1234]+/gi;
const exp04 = /[a-j]+/g;
const exp05 = /[0-9]+/g;

// console.log(alfabeto.match(exp01));
// console.log(alfabeto.match(exp02));
// console.log(alfabeto.match(exp03));
// console.log(alfabeto.match(exp04));
// console.log(alfabeto.match(exp05));

// console.log("Range: "+alfabeto.match(/[^a-zA-Z0-9]+/g));
// console.log("Range: "+alfabeto.match(/[A-Z0-9]+/g));

console.log("Equivale a [a-zA-Z0-9]: "+alfabeto.match(/[\wçã]+/g)); // equivale a [a-zA-Z0-9_]
// console.log("Range: "+alfabeto.match(/[\W+]/g)); // equivale a [^a-zA-Z0-9]

// console.log("Documentação: "+alfabeto.match(/[ab*c]+/gi));

console.log("Atalho 0 a 9: "+alfabeto.match(/[\d]+/g));
console.log("Atalho negação 0 a 9: "+alfabeto.match(/[\D]+/g));