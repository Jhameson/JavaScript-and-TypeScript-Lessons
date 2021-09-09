// return 
//retorna um valor
// termina a função


//funções dentro de funções

function criarMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}


const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log("Resultado: "+duplica(4));
console.log("Resultado: "+triplica(5));
console.log("Resultado: "+quadriplica(7));