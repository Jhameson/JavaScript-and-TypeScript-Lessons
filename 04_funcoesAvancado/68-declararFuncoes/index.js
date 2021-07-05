//Funções em javascript

function helloWorld(){
    console.log("Hello, world!");
}

//function expression
const mensage = function (){
    console.log("Function expression");
}

//Arrow function
const functionArrrow = () => console.log("Arrow function");

//dentro de um obj
const obj = {
    falar(){
        console.log("função dentro de um obj");
    }
}
obj.falar();