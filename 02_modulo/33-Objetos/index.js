/*
    arrays do tipo "const" podem ser alterados os valores, mas
    não podem ser feitas reatribuições

    ex.:
    //isto pode
    const array = [1,2,3,4];
    array.push(4);
    array[0] = 'Lucas';

    //isto não pode
    array = 'reatribuicao';
*/

//objeto
const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Farias',
    idade: 21
};
console.log(pessoa1.nome);

//funcao cria objetos
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade

    };
    //ou
    /*
    return {nome, sobrenome, idade}
    */
}

const p1 = criaPessoa('MAria', 'Silva', '25');
const p2 = criaPessoa('MArio', 'Torres', '45');
const p3 = criaPessoa('Joao', 'Alves', '21');

console.log(pessoa1.nome);
console.log(p1.nome, p2.nome, p3.nome);


//métodos dentro de objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Alvares',
    idade: 29,

    fala(){
        console.log(`${this.nome} está dizendo oi!`)
    },

    incrementaIdade(){
        ++this.idade;
    }

};

pessoa.fala();
