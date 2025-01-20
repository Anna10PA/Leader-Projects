let task = document.getElementById('text');
let taskList = document.getElementById('list');
function addTask() {  
    if (task.value.trim() !== '') {
      let li = document.createElement('li');
      li.textContent = task.value;
  
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => li.remove();
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      task.value = ''; 
    }
  }
