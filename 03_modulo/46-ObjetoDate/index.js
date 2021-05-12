//função construtora
const data = new Date();

const d1 = new Date('2021-05-20 21:20:00'); //ano, mes, dia, hora, minuto, segundo


console.log(d1.toString());

console.log("Ano: " +d1.getFullYear());//
console.log("Mes: " +d1.getMonth() +1);//
console.log("Dia: "+d1.getDate());//dia
console.log(d1.getHours());//hora
console.log(d1.getMinutes());//minutos
console.log(d1.getMilliseconds());//
console.log("Dia da semana: "+d1.getDay());//

console.log(Date.now());
