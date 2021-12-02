//"elevar"

//hoisting variáveis
//ex. 1
(function ex1(){
    console.log(text); // retorna undefined
    var text = "Exemplo 1";
    console.log(text);
})();

//ex. 2
function ex2(){
    var text2;
    console.log(text2);
    text2 = "Exemplo 2";
    console.log(text2);
}

ex2();
