const taskInput = document.querySelector('.task-input');
const taskSubmit = document.querySelector('.task-submit');
const taskList = document.querySelector('.task-list');

taskSubmit.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click', completeTask);

function addTask(e){
    e.preventDefault();

        if(taskInput.value != ''){
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            const checkButton = document.createElement('button');
            checkButton.innerHTML = '<i class="far fa-circle"></i>';
            checkButton.classList.add('check');
            taskDiv.appendChild(checkButton);

            const newTask = document.createElement('li');
            newTask.classList.add('task-item');
            taskDiv.appendChild(newTask);
            newTask.textContent = taskInput.value;

            const trashButton = document.createElement('button');
            trashButton.innerHTML = '<i class="fas fa-trash"></i>'
            trashButton.classList.add('trash');
            taskDiv.appendChild(trashButton);

            taskList.appendChild(taskDiv);
        }

    taskInput.value = '';
}

function deleteTask(e){
    const item = e.target;

    if(item.classList.contains('trash')){
        const task = item.parentElement;
        task.classList.add('fade');
        task.addEventListener('transitionend', () => task.remove());
    }
}

function completeTask(e){
    const item = e.target;

    if(item.classList.contains('check')){
        const task = item.parentElement;

        task.classList.toggle('completed');

        task.classList.contains('completed') ? 
        item.innerHTML = '<i class="fas fa-check-circle"></i>' : item.innerHTML = '<i class="far fa-circle"></i>';
    }
}