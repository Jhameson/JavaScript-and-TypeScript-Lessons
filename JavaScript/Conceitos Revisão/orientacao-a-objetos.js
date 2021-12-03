
// ***************************************************************************
// const myText = String("Hello, prototype!");
// //String() é uma função construtora

// console.log(myText.__proto__.split);
// console.log(myText.__proto__.split === String.prototype.split);
// proto de myText.aplit é igual ao de String.prototype.split

// ***************************************************************************
// function Animal() {}
// console.log(Animal.constructor); // construtor é [Function: Function]

// ***************************************************************************
//ex 1
function Animal(){
    this.qtdepatas = 4
}

const cachorro = new Animal(); //novo objeto criado a partir da func construtora, herdando características do prototype dela
console.log(cachorro.qtdepatas);

//ex 2
function Pessoa(nome){
    this.nome = nome;
}

const p = new Pessoa('Lucas');
console.log(p)

