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
