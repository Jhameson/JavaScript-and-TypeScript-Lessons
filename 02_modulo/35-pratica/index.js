 function meuEscopo() {
    const form = document.querySelector('.form'); //selecionar pelo nome form, pela classe .form ou pelo id #form
    const resultado = document.querySelector('.result');

    const pessoas = [];

    //funcao anonima para "espionar" os eventos
    //forma antiga
    // form.onsubmit = function (evento) {
    //     //previnir que haja att da page apos enviar o form
    //     evento.preventDefault();
    // };

    //forma moderna
    //escutar evento                => funcao anonima ou criar funcao separada
    form.addEventListener('submit', function (evento) {
        //previnir que haja att da page apos enviar o form
        evento.preventDefault();

        //pegar oq foi escrito nos inputs
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome:nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value} <br>Peso: ${peso.value}   Altura: ${altura.value}</p>`
        console.log(pessoas);
    });
 }
 meuEscopo();
