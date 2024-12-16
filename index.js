const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

let array = JSON.parse(localStorage.getItem('arr')) || [];
function addTask(task) {
  const taskText = task.trim();

  if (taskText !== '') {
    if(!array.includes(task)){
    array.push(taskText); 
    localStorage.setItem('arr', JSON.stringify(array));
    }
    const newTask = document.createElement('li');
    newTask.classList.add('task-item');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    newTask.appendChild(taskContent);

    const stateBtn = document.createElement('button');
    stateBtn.textContent = 'V';
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
      array = array.filter((item) => item !== taskText); 
      localStorage.setItem('arr', JSON.stringify(array));
    });

    newTask.appendChild(deleteBtn);
    newTask.appendChild(stateBtn);
    list.appendChild(newTask);

    input.value = ''; 
  } else {
    alert('Please enter a task!');
  }
}

array.forEach((task) => addTask(task));

button.addEventListener('click', () => addTask(input.value));
