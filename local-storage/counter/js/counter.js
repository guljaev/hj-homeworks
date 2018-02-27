'use strict';

const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

if (!localStorage.counter) {
    localStorage.counter = 0;
}
counter.textContent = localStorage.counter;

increment.addEventListener('click', () => {
    localStorage.counter++;
    counter.textContent = localStorage.counter;
});

decrement.addEventListener('click', () => {
    localStorage.counter--;
    counter.textContent = localStorage.counter;
});

reset.addEventListener('click', () => {
    localStorage.counter = 0;
    counter.textContent = localStorage.counter;
});
