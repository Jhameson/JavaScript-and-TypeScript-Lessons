// função construtora -> constrói objetos

// Nome inicia com letra maiuscula

//função construtora
function Pessoa (nome, sobrenome){
    //o corpo já é o objeto
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Jhameson', 'Lucas');

console.log(p1);