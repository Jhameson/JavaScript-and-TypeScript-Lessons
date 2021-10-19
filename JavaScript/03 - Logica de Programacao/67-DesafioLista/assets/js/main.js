const inputTarefa = document.querySelector('.input_tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(texto) {
    const li = criarLi();
    li.innerText = texto;
    tarefas.appendChild(li);
}

btnAddTarefa.addEventListener('click', function(e) {

    if (!inputTarefa.value === '') return;
    criaTarefa(inputTarefa.value);
});