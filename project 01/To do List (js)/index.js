let task = document.getElementById('text');
let taskList = document.getElementById('list');

function addTask() {  
    if (task.value !== '') {
      
      let li = document.createElement('li');
      li.textContent = task.value;
  
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';

      function DeleteTask(){
        li.remove();
      } 
      
      deleteButton.onclick = DeleteTask

      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      task.value = ''; 
    }
  }
