const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p'); //seleciona todos os componentes de alguma coisa

const estilos = getComputedStyle(document.body); //pega o css do componente escolhido
const back = estilos.backgroundColor; //pegou a cor do "estilos"

for (let p of ps) {
    p.style.backgroundColor = back; //mudou a cor de fundo do p
    p.style.color = '#fff'; // mudou a cor da fonte
}