'use strict';

sendLongRequest();

function sendLongRequest() {
    fetch('https://neto-api.herokuapp.com/comet/long-pooling')
        .then(res => res.json())
        .then(number => {
            // console.log(number);
            showNumber('long-pooling', number);
            sendLongRequest();
        })
        .catch(err => console.log(err));
}

function showNumber(linkType, number) {
    // console.log(number);
    const numberTreated = Math.round(+number) % 11;
    Array.from(document.getElementsByClassName(linkType)[0].children)
        .forEach(elem => elem.classList.remove('flip-it'));
    document.getElementsByClassName(linkType)[0].children[numberTreated].classList.add('flip-it');
}
