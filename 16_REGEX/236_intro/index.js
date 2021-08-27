//usado para encontrar padrões

const {texto} = require('../base');

/*
FLAGS

g - global  (todas as ocorrências)
i - insensitive 
() - groups
| - ou
*/
const regExp1 = /Casa/; //busca pela palavra "Casa" (C maiusculo)

const regExp2 = /Casa/gi; //busca pela palavra "casa" com letras maiusculas ou minusculas

const regExp3 = /(Casa )(de)/i; //busca pela palavra "casa" com letras maiusculas ou minusculas

const regExp4 = /Torre/gi; //busca pela palavra "casa" com letras maiusculas ou minusculas

const regExp5 = /(gostavam |casa |andar )(de)/i; //busca por "casa de" ou "gostavam de"

console.log("Busca: "+regExp1.test(texto));//procura pela expressão criada (regExp1) - boolean
console.log("Busca: "+regExp2.test(texto));//procura pela expressão criada (regExp2) - boolean

console.log("Retorna: "+regExp2.exec(texto));//retorna a expressão criada 
console.log("Retorna em grupo: "+regExp3.exec(texto));//retorna a expressão criada 
console.log("Retorna: "+regExp4.exec(texto));//retorna a expressão criada 

const found = regExp3.exec(texto);
console.log("Retorna o index: "+ found[1]);

console.log("Exp5: "+regExp5.exec(texto));//retorna a expressão criada 