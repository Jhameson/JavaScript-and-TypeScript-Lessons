const {ips, cpfs} = require("../base");

console.log("Resultado: ",cpfs.match(/[\d{3}\.\d{3}\.\d{3}\-\d{2}]+/g)); 
console.log("Resultado melhorado 1: ",cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g)); 

// ^ -> sozinho sig = "começa com"

//250 a 255 - 25[0-5]
//200 a 249 - 2[0-4][0-9]
//100 a 199 - 1\d{2}
//10 a 99 - [1-9]\d
//0 a 9 - [\d]

const expIP = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// for (let i = 0; i <=300; i++){
//     const ip = `${i}.${i}.${i}.${i}`;
//     console.log(ip, ip.match(expIP));
// }

console.log(ips.match(expIP))