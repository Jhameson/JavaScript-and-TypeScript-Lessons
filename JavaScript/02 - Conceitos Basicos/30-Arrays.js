/*
    em js os arrays aceitam vários tipos de dados

    arrays são objetos indexados

*/

let alunos = ['Lucas','Pedro','Luiz','Maria', 1, 2];

console.log(alunos);
console.log(alunos[1]);

alunos[3] = 'Eduarda'; //editar array

console.log(alunos.length); //tamanho do array

alunos[alunos.length] = 'Kaio'; //adiciona ao fim do array
alunos.push('Joaquin'); //adiciona ao fim do array

alunos.unshift('Jhameson'); //adiciona no inicio do array

alunos.pop();//remove o ultimo
let removido = alunos.pop();
console.log(alunos);

alunos.shift(); //remove o primeiro

delete alunos[1]; //remove pelo indice e não altera a posição dos outros
//=> o valor do indice fica vazio <1 empty item>
// console.log("Aqui: "+alunos)

alunos[1] = 'Jhameson'; //editar array

console.log("Corta: "+alunos.slice(0,3)); //"corta" o array

console.log(alunos);

console.log(alunos);
console.log(alunos);


