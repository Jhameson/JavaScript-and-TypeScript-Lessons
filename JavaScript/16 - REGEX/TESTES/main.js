function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}
function fMascEx() {
    obj.value=mMoney(obj.value)
}
function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}
const mMoney = (money) =>{
    money = money.replace(/[\D]+/g, "")
    money = money.replace(/([0-9]{2})$/g, ",$1");

    if(money.length > 6){
        money = money.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
    console.log(money)
    return money;
}

const texto = "dinheiro 111 R$11,55 R$222,50 R$33.333,50 R$444.444,50 R$5.555.555,50 R$9.999.999,50 R$444.444,50 R$0.000,00"
const exp = /(\R\$)((\d|\d|\d)(\.)*)+((\,\d\d){1})+/g;
console.log(texto.match(exp));

// R$52.001,56
