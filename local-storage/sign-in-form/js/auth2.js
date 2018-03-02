'use strict';

const formSignIn = document.querySelector('form.sign-in-htm');
const formSignUp = document.querySelector('form.sign-up-htm');

formSignIn.addEventListener('submit', (event) => {
    event.preventDefault();
    const requestSignIn = new XMLHttpRequest();
    const formData = new FormData(formSignIn);
    let fd = {};
    for (const [key, value] of formData) {
        fd[key] = value;
    }

    // requestSignIn.addEventListener('load', () => {
    //     treatServerAnswer(formSignIn, requestSignIn);
    // });
    // requestSignIn.open('POST', 'https://neto-api.herokuapp.com/signin');
    // requestSignIn.setRequestHeader('Content-Type', 'application/json');
    // requestSignIn.send(JSON.stringify(fd));

    const request = fetch('https://neto-api.herokuapp.com/signin', {
        body: JSON.stringify(fd),
        credentials: 'same-origin',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    request.then(res => {
        console.log(res.json());
    });

    // fetch('https://neto-api.herokuapp.com/signin', {
    //     body: JSON.stringify(fd),
    //     credentials: 'same-origin',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(res => {
    //     if (200 <= res.status && res.status < 300) {
    //         return res;
    //     }
    //     throw new Error(response.statusText);
    // })
    // .then( res => console.log(res) );


});

formSignUp.addEventListener('submit', (event) => {
    event.preventDefault();
    const requestSignUp = new XMLHttpRequest();
    const formData = new FormData(formSignUp);
    let fd = {};
    for (const [key, value] of formData) {
        fd[key] = value;
    }

    requestSignUp.addEventListener('load', () => {
        treatServerAnswer(formSignUp, requestSignUp);
    });
    requestSignUp.open('POST', 'https://neto-api.herokuapp.com/signup');
    requestSignUp.setRequestHeader('Content-Type', 'application/json');
    requestSignUp.send(JSON.stringify(fd));
});


function treatServerAnswer(form, request) {
    try {
        if (request.status < 200 || request.status >= 300) {
            throw new Error(request.statusText);
        }
        const resp = JSON.parse(request.response);

        if (resp.error) {
            form.querySelector('.error-message').value = resp.message;
            // console.log(resp);
            throw new Error(resp.message);
        }

        // console.log(resp);
        if (form === formSignIn) {
            form.querySelector('.error-message').value = `Пользователь ${resp.name} успешно авторизован`;
        } else {
            form.querySelector('.error-message').value = `Пользователь ${resp.name} успешно зарегистрирован`;
        }
        
    } catch (err) {
        console.log('Произошла ошибка:' + err);
    }
}

