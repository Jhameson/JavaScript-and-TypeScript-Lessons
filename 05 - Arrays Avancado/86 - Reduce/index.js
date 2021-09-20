// Reduce
// usado para reduzir o array

//reduce(acumulador, valor, indice, array)

const numeros = [1, 5, 7, 8, 9, 0, 4, 5, 13, 17];

//somar os valores do array

const soma = numeros.reduce((acumulador, valor) =>{
    return acumulador += valor;
}, 0);

console.log("Soma: ",soma)
