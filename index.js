const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

button.addEventListener('click', () => {
  const taskText = input.value.trim();

  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.classList.add('task-item');
    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    newTask.appendChild(taskContent);

    const stateBtn = document.createElement('button');
    stateBtn.classList.add('state-btn');
    stateBtn.addEventListener('click', () => {
       if (newTask.classList.contains('state-line')) {
        newTask.classList.remove('state-line');
      } else {
        newTask.classList.add('state-line');
      }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      list.removeChild(newTask);
    });

   
    newTask.appendChild(deleteBtn);
    newTask.appendChild(stateBtn);


    list.appendChild(newTask);

    input.value = '';
  } else {
    alert('Please enter a task!');
  }
});