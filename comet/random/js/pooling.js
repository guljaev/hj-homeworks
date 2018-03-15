'use strict';

const timerID = setInterval(sendShortRequest, 8000);

function sendShortRequest() {
    fetch('https://neto-api.herokuapp.com/comet/pooling')
        .then(res => res.json())
        .then(number => {
            // console.log(number);
            showNumber('pooling', number);
        })
        .catch(err => console.log(err));
}
