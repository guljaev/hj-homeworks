'use strict';

const wrapperDropdown = document.getElementsByClassName('wrapper-dropdown')[0];

function toggleActiveClass() {
    this.classList.toggle('active');
}

wrapperDropdown.onclick = toggleActiveClass;
