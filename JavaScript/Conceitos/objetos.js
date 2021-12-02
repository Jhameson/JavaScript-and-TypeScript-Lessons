const user ={
    name: "Lucas"
};

console.log(user);

//podemos mergear objetos utilizando object.assign sem alterar o objeto principal
// em vez de Object.assign(user, {age: 22});
// usar Object.assign({}, user, {age: 22});

console.log("\nNovo objeto: ",Object.assign({}, user, {age: 22})); //novo objeto construído
console.log("\nObjeto original: ",user);

//Para previnir alterações no objetos
//usamos Object.freeze(obj);

const newObj = {
    id: 20
};
Object.freeze(newObj);

newObj.id = 0; //não acontece nada
delete newObj.id; //não acontece nada

console.log("Objeto \"congelado\"",newObj)

//Object.seal(obj)
//Permite alterações de propriedades existentes em um projeto
const person = {name: "Kit"};
Object.seal(person);

person.age = 25;

console.log("Object.seal: ", person);
