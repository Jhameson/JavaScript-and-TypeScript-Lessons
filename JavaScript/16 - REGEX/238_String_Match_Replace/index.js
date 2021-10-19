const {texto} = require('../base');

//g - global
//i - insensitive

const exp01 = /casa/gi;
const exp02 = /casa|disse/gi; //"casa" ou "disse"

console.log("\nRetorna todas as ocorrências exp01-> "+texto.match(exp01)); 
console.log("\nRetorna todas as ocorrências exp02-> "+texto.match(exp02)); 

console.log("\nReplace-> "+texto.replace(/casa|pequena/gi,'####')); //substitui todas as "casa" ou "pequena" por "####"

console.log("\nReplace-> "+texto.replace(/(casa|pequena)/gi,'"$1"')); //não substitue, mas coloca algo. No ex uma " "
console.log("\nReplace-> "+texto.replace(/((casa|pequena))/gi,'#$1#')); //não substitue, mas coloca algo ao redor
console.log("\nPassando funções-> "+texto.replace(/((casa|pequena))/gi, function(value){
    return `### ${value.toUpperCase()} ###`;
}));