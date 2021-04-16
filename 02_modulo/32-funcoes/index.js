/*

*/
let nome = 'Jhameson';
let valor1 = 50;
let valor2 = 80;

//função normal
function hello(nome){
    console.log(`Hello, ${nome}`);
}
//função com return
function maiuscula(nome){
    return nome.toUpperCase();
}
//
function soma(x,y) {
    return x+y;
}

//função anonima
let raiz = function(numero) {
    return numero ** 0.5;
}
//arrow function - simplica nossa vida
let aoCubo = (numero)=>{
    return numero ** 3;
}
//ou
let aoQuadrado = numero => numero ** 2;


hello(nome);
console.log("Upper: "+maiuscula(nome));
console.log("Soma: "+soma(valor1,valor2));
console.log("Anonima: "+raiz(9));
console.log("Arrow: "+aoCubo(3));
console.log("Arrow Simplificada: "+aoQuadrado(5));

