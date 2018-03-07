'use strict';

function randName() {
    return 'rn' + String( Math.random() ).slice(-6);
}

function showLoadData(data) {
    console.log(data);
}

// const script = document.scripts[0].cloneNode();
// script.src = `https://neto-api.herokuapp.com/twitter/jsonp?callback=showLoadData`;
// document.body.appendChild(script);

function loadData(url) {
    const callbackName = randName();
    return new Promise((done, fail) => {
        // window[callbackName] = done;
        window['rn123'] = done;

        const script = document.scripts[0].cloneNode();
        // script.src = `${url}?callback=${callbackName}`;
        script.src = `${url}?callback=rn123`;
        document.body.appendChild(script);
    });
}

loadData('https://neto-api.herokuapp.com/twitter/jsonp')
    .then(showLoadData)
    .catch(err => console.log(err));

