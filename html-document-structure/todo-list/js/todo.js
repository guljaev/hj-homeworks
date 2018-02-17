'use strict';

const todoList = document.querySelector('.todo-list');
const doneList = todoList.querySelector('.done');
const undoneList = todoList.querySelector('.undone');

const labels = todoList.getElementsByTagName('label');
Array.from(labels).forEach(label => label.addEventListener('click', updateList));

function updateList(event) {
    const label = event.target;
    if (label.querySelector('input').checked) {
        undoneList.appendChild(label);
    } else {
        doneList.appendChild(label);
    }
}
