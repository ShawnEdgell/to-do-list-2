import './../css/styles.css'; // Relative path to your CSS file
import { addTask, removeTask } from './utils/domUtils';

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Event listeners
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
        removeTask(e.target.parentElement);
    }
});
