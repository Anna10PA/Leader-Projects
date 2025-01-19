let taskInput = document.getElementById('text');
let taskList = document.getElementById('list');
function addTask() {  
    if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = taskInput.value;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => li.remove();
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      taskInput.value = ''; 
    }
  }
