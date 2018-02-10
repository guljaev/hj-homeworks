'use strict';

const contentNode = document.getElementById('content');
const preloaderNode = document.getElementById('preloader');
const tabNodes = document.querySelectorAll('.tabs nav>a');
for (const tab of tabNodes) {
    tab.addEventListener('click', onTabClick);
}

function onTabClick(event) {
    if (event) {
        event.preventDefault();
    }
    Array.from(tabNodes).forEach( (tab) => tab.classList.remove('active') );
    this.classList.add('active');

    const requestHref = this.href;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('loadstart', onLoadStart);
    xhr.addEventListener('loadend', onLoadEnd);
    xhr.addEventListener('load', onLoad);
    xhr.open('GET', requestHref, true);
    xhr.send();

    function onLoad() {
        contentNode.innerHTML = xhr.responseText;
    }

    function onLoadStart() {
        preloaderNode.classList.remove('hidden');
    }

    function onLoadEnd() {
        preloaderNode.classList.add('hidden');
    }
}

onTabClick.call(tabNodes[0]);
