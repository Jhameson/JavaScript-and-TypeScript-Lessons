const numeros = [1, 5, 7, 8, 9, 0, 4, 5, 13, 17, 18, 22];

const numerosPares = numeros
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((value, acumulador) => acumulador + value);

console.log("Soma do dobro de todos os pares: ", numerosPares);
