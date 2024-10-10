document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';  // Clear input field after adding
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    
    // Create task element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);  // Delete task
    };

    // Add toggle complete functionality
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Append delete button to task
    li.appendChild(deleteButton);

    // Append task to list
    taskList.appendChild(li);
}
