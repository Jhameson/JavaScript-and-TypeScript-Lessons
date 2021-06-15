try {
    console.log("Abre uma janela de seleção de arquivo");
    console.log("Seleciona arquivo");
    console.log(abrirArquivo());
} catch (error) {
    //executada quando há erros
    //trata erros
    console.log("Error ao abrir->" + console.error());
} finally {
    //ocorre independente de ter tido erro ou não
    console.log("Fecha a janela");
}