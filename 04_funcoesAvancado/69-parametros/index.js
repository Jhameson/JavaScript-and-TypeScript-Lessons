
//se forem passados parametros que não são utilizados em funções que são definidas com "function"
// para onde vão os valores que são passados? o Js tem uma carta na manga que é 
//a variável argument, que os valores podem tmbm ser acessados por indice

//arguments sustenta todos os argumentos enviadosb  
function teste (a,b,c){
    let total = 0;
    for(let arg of arguments){
        total += arg;
    }
    console.log("Valor total: "+total);
    console.log("Argumentos: "+a+b+c)
} 
teste(1,2,3,4,5,6,7,8,9,10);

//definindo uma valor padrão para um argumento
function teste2(a, b = 0 , c = 3){
    b = b || 0;
    console.log("Soma: "+(a+b));
}
teste2(5, undefined, 20);
//undefined pode "Pular" o valor

//function expression
//rest operator recebe todos os valores restante e o paramtro fica defifnido como um array
const conta = function(nome, operador, acumulador , ...numeros){
    // console.log(nome, idade,numeros);
    for (let num of numeros){
        if(operador === '+') acumulador += num;
        if(operador === '-') acumulador -= num;
        if(operador === '*') acumulador *= num;
    }
    console.log(nome+"-> Soma total: "+ acumulador);
};
conta('Jhameson', '+', 0  ,10,20,30,40,50,60,70,80,90)

const exemplo = (...args) => console.log('HAck do argments: '+args);
exemplo('algo', 'alguma coisa', 1,2,3,4,5,6);