//criando arrays
const nomes = ['Jhameson', 'Lucas', 'Farias', 'Julie'];
const frutas = ['manga', 'banana', 'uva', 'maçã'];
console.log("Array nome: ",nomes);

//alterando o valor do array pelo índice
nomes[2] = 'Iasmin';
console.log("Array alterado: ",nomes);

//deletar sem remover o indice
delete nomes[0];
console.log("Delete sem remover o indice: ",nomes); //result <1 empty item>

//remove o ultimo
nomes.pop()
console.log("Remove o ultimo: ", nomes);

//remove no inicio
frutas.shift()
console.log("Remove no inicio: ", frutas);

//insere no final
frutas.push("jaca");
console.log("insere no final: ", frutas);

//insere no inicio
frutas.unshift("tangerina");
console.log("insere no inicio: ", frutas);

//remove e retorna o valor
const oNome = nomes.pop();
console.log("O nome: ", oNome);

console.log("Array frutas: ", frutas);

//"fatiar" o array de um ponto a outro
const sliceFrutas = frutas.slice(0,1); // o indice final não é incluído
console.log("Slice: ", sliceFrutas);

const sliceFrutas2 = frutas.slice(0,-1); // remove o ultimo
console.log("Slice remove ultimo: ", sliceFrutas2);

//Split separa string em substrings dentro de um array
const nomeTeste = 'Jhameson Lucas Farias';
const nomeSplit = nomeTeste.split(' ');
console.log("Split: ", nomeSplit)

//une os valores do array
const unir = nomeSplit.join();
// const unir = nomeSplit.join(',');
console.log("Unir: ",unir);