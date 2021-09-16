const a1 = [1,2,3];
const a2 = [4,5,6];

//concatenar
const a3 = a1.concat(a2);
const a4 = a1.concat(a2, [10,11,12], 'Array');

console.log("Concatenando: ",typeof(a3), a3);
console.log("Concatenando: ",typeof(a4), a4);

// ... rest -> ... spread -> espalhar
const a5 = [...a1, ...a2, ...[0,0,0]]
console.log("Spread: ",typeof(a5), a5);
