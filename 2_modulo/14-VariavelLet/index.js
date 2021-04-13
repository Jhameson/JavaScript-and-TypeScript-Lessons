/*
    Pode ser acessada apenas no escopo em que foi
    criada ou nos filhos do escopo
*/
let nome = 'Lucas';

console.log('Nome: '+nome);

function exibirNome(){
    console.log('Nome na função: ',nome);
}

 exibirNome();
 nome = 'Joao';
 exibirNome();
let $teste;
 /*
    variaveis precisam ter nomes significativos;
    não podem ter nomes de palavras reservadas;
    não podem ter caracteres especiais(-, espaços, ^, ~, ´);
    não podem iniciar com número;
    podem finalizar no número;
    preferencialmente iniciar com letra minuscula, $, _
    usar camelCase;
    são casa-sensitive
 */
