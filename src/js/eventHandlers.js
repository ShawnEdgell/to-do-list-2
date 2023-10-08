import { addTaskToDOM, removeTaskFromDOM } from './utils/domUtils';
import { saveTasksToLocalStorage, getTasksFromLocalStorage } from './utils/storageUtils';

document.getElementById('add-task').addEventListener('click', function() {
    const value = document.getElementById('todo-input').value.trim();
    if (value) {
        addTaskToDOM(value);
        const tasks = Array.from(document.getElementById('todo-list').children).map(li => li.textContent);
        saveTasksToLocalStorage(tasks); // Call the function directly
        document.getElementById('todo-input').value = '';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const savedTasks = getTasksFromLocalStorage(); // Call the function directly
    if (savedTasks && savedTasks.length > 0) {
        savedTasks.forEach(task => addTaskToDOM(task));
    }
});

window.removeTask = removeTaskFromDOM;
