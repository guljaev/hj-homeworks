'use strict';

const request = new XMLHttpRequest;
request.addEventListener('load', onLoad);
request.open('GET', 'https://neto-api.herokuapp.com/book/', true);
request.send();

function onLoad() {
    const books = JSON.parse(request.responseText);
    const contentUlNode = document.getElementById('content');
    contentUlNode.innerHTML = '';

    books.forEach((book, i) => {
        contentUlNode.innerHTML += '<li><img></li>';
        const bookNode = contentUlNode.getElementsByTagName('li')[i];

        bookNode.getElementsByTagName('img')[0].src = book.cover.small;
        bookNode.dataset.title = book.title;
        bookNode.dataset.author = book.author.name;
        bookNode.dataset.info = book.info;
        bookNode.dataset.price = book.price;
    });
}
