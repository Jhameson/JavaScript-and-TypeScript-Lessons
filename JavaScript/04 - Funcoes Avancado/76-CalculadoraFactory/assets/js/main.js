function criarCalculadora() {
    return {

        display: document.querySelector('.display'),



        iniciar() {
            // alert("start");
            this.clickBtn();
        },
        clickBtn() {
            document.addEventListener('click', (event) => {
                const elemento = event.target;
                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }
                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (elemento.classList.contains('btn-del')) {
                    this.deleteNumber();
                }
                if (elemento.classList.contains('btn-eq')) {
                    this.realizarOperacao();
                }
            });
        },
        clearDisplay() {
            this.display.value = '';
        },
        deleteNumber() {
            this.display.value = this.display.value.slice(0, -1);
        },
        btnParaDisplay(value) {
            this.display.value += value;
            console.log(value);
        },
        realizarOperacao() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert("Conta inválida")
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert("Conta inválida")
                console.log('Error: ' + e);
                return;
            }

        }
    };
}

const calculadora = criarCalculadora();
calculadora.iniciar();