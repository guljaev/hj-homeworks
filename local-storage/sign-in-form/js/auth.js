'use strict';

const formSignIn = document.querySelector('form.sign-in-htm');
const formSignUp = document.querySelector('form.sign-up-htm');

formSignIn.addEventListener('submit', (event) => {
    event.preventDefault();
    const requestSignIn = new XMLHttpRequest();
    const formData = new FormData(formSignIn);

    requestSignIn.addEventListener('load', () => {
        // console.log(requestSignIn.response);
        // console.log(requestSignIn.status);
        treatServerAnswer(formSignIn, requestSignIn);
    });
    requestSignIn.open('POST', 'https://neto-api.herokuapp.com/signin');
    requestSignIn.setRequestHeader('Content-Type', 'application/json');
    requestSignIn.send(JSON.stringify(formData));

    // const request = fetch('https://neto-api.herokuapp.com/signin', {
    //     body: JSON.stringify(formData),
    //     credentials: 'same-origin',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    // request.then(res => {
    //     console.log(res);
    // });

    // При использовании fetch сервер ответил мне, в консоли появилось следующее:
    // body:ReadableStream
    // bodyUsed:false
    // headers:Headers {}
    // ok:true
    // redirected:false
    // status:200
    // statusText:"OK"
    // type:"cors"
    // url:"https://neto-api.herokuapp.com/signin"
    // __proto__:Response
    // что это значит - не очень понимаю. Такого же ответа, как с использованием XMLHttpRequest не получил. 
    // Наверное мы это будем изучать позже?
});


function treatServerAnswer(form, request) {
    try {
        if (request.status < 200 || request.status >= 300) {
            throw new Error(request.statusText);
        }
        const resp = JSON.parse(request.response);

        if (resp.error) {
            form.querySelector('.error-message').value = resp.message;
        } else {
            form.querySelector('.error-message').value = `Пользователь ${resp.name} успешно авторизован`;
        }

    } catch (err) {
        console.log('Произошла ошибка:' + err);
    }
}
