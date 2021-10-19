//Filter -> sempre retorna um array, com a mesma qtd de elementos ou menos

const numeros = [1, 5, 7, 8, 9, 0, 4, 5, 67, 4, 44, 22, 31, 4, 11, 13, 17, 87];

//filtrando valores maiores que 10 => recebe uma função de callback

//versões da função
function callback1 (value){
    if(value>10){
        return true
    }else{
        return false
    }
}
function callback2 (value){
    return value > 10;
}


const callbackFilter1 = numeros.filter(function(value){
    return value > 10;
});

const callbackFilter2 = numeros.filter((value)=>{
    return value > 10
});

const callbackFilter3 = numeros.filter(value => value > 20);

console.log("Valores maior que 10: ",callbackFilter3);


//exemplo 2

const pessoas = [
    {nome: 'Lucas', idade: 18},
    {nome: 'Daniel', idade: 22},
    {nome: 'Ray', idade: 31},
    {nome: 'Isa', idade: 14},
    {nome: 'Bia', idade: 25},
    {nome: 'Maria', idade: 28},
];

//retornar pessoas que tem o nome com mais de três letras
console.log("Nomes com mais de 3 letras: ", pessoas.filter( value=> value.nome.length > 3));

//retornar pessoas com mais de 25 anos
console.log("Mais de 25 anos: ", pessoas.filter(value=> value.idade > 25));

//retornar pessoas que o nome termina com A
console.log("Nomes terminados com A: ", pessoas.filter(value => value.nome.toLowerCase().endsWith('a')));