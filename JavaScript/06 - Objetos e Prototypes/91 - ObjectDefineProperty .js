//defineProperty -- defineProperties
// define uma ou mais propriedades do objeto

function Produto(nome, tamanho, preco, estoque) {

    this.tamanho = tamanho;
    Object.defineProperties(this, {
        nome:{
            enumerable: true, //mostra a chave
            value: nome, //valor da chave
            writable: false, //pode alterar
            configurable: false // pode reconfigurar
        },
        preco:{
            enumerable: true, //mostra a chave
            value: preco, //valor da chave
            writable: false, //pode alterar
            configurable: false // pode reconfigurar
        }
    });

    //definindo as propriedades de 'estoque'
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor da chave
        writable: false, //pode alterar
        configurable: false // pode reconfigurar
    });
}

const p1 = new Produto('Camiseta', 'G', 25, 52);
p1.estoque = 70 //não funciona pois writable: false
delete p1.estoque; //não funciona configurable: false
console.log(p1)
console.log(Object.keys(p1))

for(let a in p1) {
    console.log(a)
}


