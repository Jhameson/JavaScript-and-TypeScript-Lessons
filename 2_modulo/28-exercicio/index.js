
let numero = Number(prompt("Digite um número: "));
//numero = Number(numero);

//pega o elemento o id informado
let numeroTitulo = document.getElementById('numero-titulo');
let textoNumero = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
textoNumero.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
textoNumero.innerHTML += `<p>Inteiro: ${Number.isInteger(numero)}</p>`;
textoNumero.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
textoNumero.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(numero)}</p>`;
textoNumero.innerHTML += `<p>Arrendondando para cima: ${Math.ceil(numero)}</p>`;
textoNumero.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)}</p>`;
