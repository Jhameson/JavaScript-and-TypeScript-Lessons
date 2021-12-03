//criar array

const arr1 = [1,2,3,4,5,6,7];
const arr2 = new Array(10,4,7,1,6,89,2,3);
const arr3 = Array.of('Lucas', 5, 'John');

// Iterar elementos
// map
// pega o array passado e aplica a expressão passada
const numbers = [10,4,7,1,6,89,2,3];
console.log(numbers.map(value => value * 2)); //pega cada elemento do array e multiplica por 2
// [ 20, 8, 14, 2, 12, 178, 4, 6 ]
