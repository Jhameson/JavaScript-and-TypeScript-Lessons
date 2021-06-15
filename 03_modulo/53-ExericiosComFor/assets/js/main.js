const elementos = [
    { tag: 'p', texto: 'Texto 1' },
    { tag: 'div', texto: 'Texto 2' },
    { tag: 'section', texto: 'Texto 3' },
    { tag: 'footer', texto: 'Texto 4 ' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');


for (let i = 0; i < elementos.length; i++) {
    let {
        tag,
        texto
    } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;

    //let textoNode = document.createTextNode(texto);
    //tagCriada.appendChild(textoNode);

    div.appendChild(tagCriada);
    //console.log(tag)
}

container.appendChild(div);