'use strict';

const formSignIn = document.querySelector('form.sign-in-htm');
const formSignUp = document.querySelector('form.sign-up-htm');

formSignIn.addEventListener('submit', (event) => {
    event.preventDefault();
    const requestSignIn = new XMLHttpRequest();
    const formData = new FormData(formSignIn);
    // почему запрос console.log(formData) выдает пустой объект FormData, хотя в нем по факту содержится 3 пары значений???
    let fd = {};
    for (const [key, value] of formData) {
        fd[key] = value;
    }
    // console.log(fd);
    // console.dir(formData);

    requestSignIn.addEventListener('load', () => {
        treatServerAnswer(formSignIn, requestSignIn);
    });
    requestSignIn.open('POST', 'https://neto-api.herokuapp.com/signin');
    requestSignIn.setRequestHeader('Content-Type', 'application/json');
    requestSignIn.send(JSON.stringify(fd));

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

// Вопросы:
// 1. Почему запрос console.log(formData) выдает пустой объект FormData, хотя в нем по факту содержатся значения из формы (т.к. дальше они попадают в объект fd)?
// 2. Почему нужно отправлять на сервер fd, а не formData? В реальной практике тоже обычно сначала из объекта FormData делают обычный Object и его уже отправляют? Или могут опправлять на сервер исходный объект FormData?
// 3. Почему при запросе через fetch я получаю не такой же ответ, как через XMLHttpRequest и как с ним работать?
// 4. Я выяснил, что если писать 
    // request.then(res => {
    //     console.log(res.json());
    // });
// то все заработает. Судя по описание в интернете .json() распарисивает тело (body) возвращаемого ответа. Я попытался описать этот процесс знакомыми операторами:
    // request.then(res => {
    //     console.log(JSON.parse(res.body));
    // });
// однако так опять ничего не работает. Объясните пожалуйста, что делает res.json() и как устроен ответ, получаемый при запросе через fetch