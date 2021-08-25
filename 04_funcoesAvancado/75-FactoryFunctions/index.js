// funções que retornam objetos
// Factory Function 
// Constructor function

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        altura: altura,
        peso: peso,
        fala(assunto){
            return `${this.nome}  está ${assunto}`
        },
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(value){
            console.log(value);
        },
        get imc(){ // "finge" ser um atributo - Getter -
            const indiceIMC = this.peso / (this.altura ** 2);
            return indiceIMC.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Jhameson', 'Lucas');
const p2 = criaPessoa('Lucas', 'Farias', 1.69, 78);


// console.log(p1.fala('falando sobre JS'));
// console.log(p2.nomeCompleto);
// console.log(p2.imc);

const p3 = criaPessoa(); 
p3.nomeCompleto = 'Jhameson Lucas';
console.log(p3.nomeCompleto);