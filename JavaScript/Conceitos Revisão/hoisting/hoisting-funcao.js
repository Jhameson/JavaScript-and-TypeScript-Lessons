(function fn(){
    log("Exemplo de hoisting função");
    //não é uma boa prática usar funções antes de declará-las
    //em projetos pode configurar o lint para não permitir o hoisting

    function log(value){
        console.log(value);
    }
})();

