
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log("Letras: ", letras);

//splice  -> pop, push. shift, unshift
//letras.splice(qual indice que quer começar a mexer, quantos elementos quer remover, elementos que quer add);
//letras.splice(indice, delete, elem1, elem2...);


//simular o shift
const simulaShift = letras.splice(0,1);
console.log("Simula Shift: ", letras, simulaShift);
//simular o pop
const simulaPop = letras.splice(-1, 1); //retorna um array ao inves de um elemento
const simulaMax = letras.splice(2, Number.MAX_VALUE); //retorna um array ao inves de um elemento
console.log("Simula pop:",letras, simulaPop);
console.log("Simula pop:",letras, simulaMax);

//simula push
letras.splice(Number.MAX_VALUE, 0, 'w');
console.log("Simula push: ",letras);

//simula unshift
letras.splice(0, 0, 'y');
console.log("Simula unshift: ",letras);

letras.splice(0, 0, '0', '1', '2');
console.log("Simula unshift: ",letras);
