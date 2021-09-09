function relogio() {

    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function startClock() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00';
        }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startClock();
        }
    });

    /*
    iniciar.addEventListener('click', function(e) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startClock();
    });

    pausar.addEventListener('click', function(e) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    });

    zerar.addEventListener('click', function(e) {
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
    });
    */
}
relogio();