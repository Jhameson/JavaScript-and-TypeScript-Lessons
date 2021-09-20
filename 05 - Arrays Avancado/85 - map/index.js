//MAP

//cria um novo array -> altera os valores do array
//mapeia

const numeros = [1, 5, 7, 8, 9, 0, 4, 5, 13, 17];

//dobre os valores
const dobrarValores = numeros.map(value => value*2);
console.log("Valores em dobro: ", dobrarValores);


//
const pessoas = [
    {nome: 'Lucas', idade: 18},
    {nome: 'Daniel', idade: 22},
    {nome: 'Ray', idade: 31},
    {nome: 'Isa', idade: 14},
    {nome: 'Bia', idade: 25},
    {nome: 'Maria', idade: 28},
];

//para cada elemento retorne apenas uma String com o nome da pessoa
const nomes = pessoas.map(value => value.nome);
// ou
// const nomes = pessoas.map(value => ({nome: value.nome}));
console.log("Nome: ", nomes);

//adicionar a chave Id
const ids = pessoas.map( (value, indice)=>{
    const newObj = {...value};
    newObj.id = indice;
    return newObj;
});
console.log("Inserindo chave Id: ", ids);