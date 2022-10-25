function createCalculator() {
    return {
        display: document.querySelector('.display'), 
        btnClear: document.querySelector('.btn-clear'),

        start() {
            this.clickButton();
        },
        
        makeAccount() {
            let account = this.display.value;

            try {
                account = eval(account); 
                
                if(!account) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = account;

            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        
        clickButton() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnStopDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.makeAccount();
                }

            }); 
        },

        btnStopDisplay(valor) { 
            this.display.value += valor;
        }

    };
}

const calculator = createCalculator();
calculator.start();
