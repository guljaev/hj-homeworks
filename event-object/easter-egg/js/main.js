'use strict';

const navNode = document.getElementsByTagName('nav')[0];
function toggleNavOpen(event) {
    // console.log(event.key);
    if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
        navNode.classList.toggle('visible');
    }
}

document.addEventListener('keydown', toggleNavOpen);


const secretNode = document.getElementsByClassName('secret')[0];
const secretCode = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
let index = 0;

function checkSecret(event) {
    if (event.code === secretCode[index]) {
        index++;
        if (index > 8) {
            secretNode.classList.add('visible');
        }
    } else if (event.code === 'KeyY') {
        index = 1;
    } else {
        index = 0;
    }
}

document.addEventListener('keydown', checkSecret);
