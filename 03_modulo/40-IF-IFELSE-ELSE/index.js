/*
    IF, ELSE IF, ELSE
*/

let data = new Date();

let hora = data.getHours();

if(hora >= 6 && hora <=11 ){
    console.log("Bom dia!");
}else if(hora >=12 && hora <= 17){
    console.log("Boa tarde!");
}else if(hora >= 18 && hora <= 23){
    console.log("Boa noite!");
}else {
    console.log("Hora do boi!");
}
