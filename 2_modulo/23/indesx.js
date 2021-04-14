let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/*
    //metodo normal
    let aux = varA;

    varA = varB;
    varB = varC;
    varC = aux;
*/

//metodo js

[varA,varB,varC] = [varB, varC, varA]

console.log(varA, varB, varC);
