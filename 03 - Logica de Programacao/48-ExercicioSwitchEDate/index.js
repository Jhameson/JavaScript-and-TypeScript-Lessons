// const data = new Date();

// function getDayWeek(diaSemana) {
//     switch (diaSemana) {
//         case 0:
//             return 'Domingo';
//         case 1:
//             return 'Segunda-feira';
//         case 2:
//             return 'Terça-feira';
//         case 3:
//             return 'Quarta-feira';
//         case 4:
//             return 'Quinta-feira';
//         case 5:
//             return 'Sexta-feira';
//         case 6:
//             return 'Sábado';
//         return '';
//     }
// }

// const h1 = document.querySelector('.container h1'); //NOVA
// h1.innerHTML = getDayWeek(data.getDay());


//SEGUNDA OPÇÃO
const data = new Date()
const h1 = document.querySelector('.container h1');
// const option = {
//     dateStyle: 'full'
// };
//h1.innerHTML =data.toLocaleDateString('pt-BR',option);
h1.innerHTML =data.toLocaleDateString('pt-BR', {dateStyle: 'full'});

