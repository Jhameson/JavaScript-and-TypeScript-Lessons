//https://www.w3schools.com/js/DEFAULT.asp
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
//Strings são indexadas

let umaString = "um \"texto\" para teste de string";
let outraString = "um \\texto";

console.log("String: "+umaString);
console.log("String: "+outraString);
console.log("Indezadas: "+outraString[6]); //indexadas
console.log("CharAt: "+outraString.charAt(6)); //indexadas
console.log(outraString.concat(' ', ' teste', ' concatenando')); //concatenar
//console.log(`${outraString} teste concatenando`);
console.log("indexOf: "+umaString.indexOf('texto')); //encotrar em qual indice inicia a palavra passada
console.log(outraString.lastIndexOf('m', 3));

//
console.log("Match "+umaString.match(/[a-z]/g));
console.log(umaString.search('e')); // procura o index do char passado
console.log(umaString.search(/x/));
console.log(umaString.replace('texto', 'TEXTO')); //substitue algo por algo
console.log(umaString.replace(/e/g, '#')); //funções regulares => substitue todos 'e' por #
console.log(umaString.length); //tamnho
console.log(umaString.slice(4,9)); //corta
console.log(umaString.slice(2)); //corta
console.log(umaString.split(' ')); //separa a string a cada espaço
console.log(umaString.split(' ', 2));
console.log(umaString.toUpperCase()); //tudo em maiusculo
console.log(umaString.toLowerCase());//tudo em minusculo




