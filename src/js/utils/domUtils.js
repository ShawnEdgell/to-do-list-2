export function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(li);
}

export function removeTask(taskElement) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskElement);
}
