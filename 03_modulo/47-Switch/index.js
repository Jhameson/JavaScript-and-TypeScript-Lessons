const data = new Date();
const diaSemana = data.getDay();

let diaSemanaTxt;

switch (diaSemana) {
    case 0:
        diaSemanaTxt = 'Domingo';
        break;
    case 1:
        diaSemanaTxt = 'Segunda';
        break;
    case 2:
        diaSemanaTxt = 'Terça';
        break;
    case 3:
        diaSemanaTxt = 'Quarta';
        break;
    case 4:
        diaSemanaTxt = 'Quinta';
        break;
    case 5:
        diaSemanaTxt = 'Sexta';
        break;
    case 6:
        diaSemanaTxt = 'Sábado';
        break;
    default:
        diaSemanaTxt = 'invalido';
        break;//opcional
}

console.log(`Hoje é: ${data.getDate()} - ${diaSemanaTxt}`);
