'use strict';

const longboardImg = document.getElementById('view');
const longboardNav = document.getElementById('nav');
const links = longboardNav.getElementsByTagName('a');

function showChosenLongboardImg(event) {
    event.preventDefault();
    for (const link of links) {
        link.classList.remove('gallery-current');
    }
    this.classList.add('gallery-current');
    longboardImg.src = this.href;
}

for (const link of links) {
    link.addEventListener('click', showChosenLongboardImg);
}
