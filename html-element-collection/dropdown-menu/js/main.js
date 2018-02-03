'use strict';

function toggleActiveClass() {
    this.classList.toggle('active');
}

const wrapperDropdown = document.getElementsByClassName('wrapper-dropdown')[0];

wrapperDropdown.onclick = toggleActiveClass;
