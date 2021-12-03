function soma(a){
    return function(b){
        return a + b;
    }
}

const soma2 = soma(2);

console.log("Soma: "+soma2(2));
console.log("Soma: "+soma2(3));
console.log("Soma: "+soma2(4));
console.log("Soma: "+soma2(5));
console.log("Soma: "+soma2(6));
