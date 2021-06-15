/*
try { //tente
    console.log(variavel);
} catch (err) { //se não der certo
    console.log('Falha-> ' + err);
}
*/
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números!'); //lançando novo error
    }
    return x + y;
}

try {
    console.log(soma(9, 25));
    console.log(soma(1, 'a'));
} catch (err) {
    // console.log(err);
    console.log("##Error##")
}