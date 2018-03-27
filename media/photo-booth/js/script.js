'use strict';

const videoEl = document.createElement('video');
videoEl.autoplay = true;
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const audio = document.createElement('audio');
audio.src = './audio/click.mp3';
const listNode = document.querySelector('.container .list');

navigator.mediaDevices
    .getUserMedia({video: true, audio: false})
    .then((stream) => {
        console.log('доступ к камере есть');
        videoEl.src = URL.createObjectURL(stream);
        document.body.querySelector('.app').appendChild(videoEl);
        
        // когда видеотег готов...
        videoEl.addEventListener('canplay', (evt) => {
            console.log('произошло событие canplay');
            document.querySelector('.app .controls').style.display = 'block';
            // почему не работает, если вместо 'block' написать ''?

            document.querySelector('#take-photo').addEventListener('click', () => {
                canvas.width = videoEl.videoWidth;
                canvas.height = videoEl.videoHeight;
                ctx.drawImage(videoEl, 0, 0);
                audio.play();
                const src = canvas.toDataURL();
                createImage(src, canvas);
            });
        });
    })
    .catch((err) => {
        console.log('Ошибка доступа к камере!! ' + err);
        document.querySelector('#error-message').style.display = 'block';
        document.querySelector('#error-message').textContent = 'Ошибка доступа к камере!! ' + err;
    });

function createImage(src, canvas) {
    const figure = document.createElement('figure');
    figure.innerHTML = `
    <img src="${src}">
    <figcaption>
        <a href="${src}" download="snapshot.png">
        <i class="material-icons">file_download</i>
        </a>
        <a><i class="material-icons">file_upload</i></a>
        <a><i class="material-icons">delete</i></a>
    </figcaption>
    `;
    listNode.insertBefore(figure, listNode.firstElementChild);

    figure.querySelectorAll('.material-icons')[2].addEventListener('click', () => {
        listNode.removeChild(figure);
    });

    figure.querySelectorAll('.material-icons')[1].addEventListener('click', () => {

        canvas.toBlob(blob => {
            const formData = new FormData();
            formData.append('image', blob);
            fetch('https://neto-api.herokuapp.com/photo-booth', {
                body: formData,
                credentials: 'same-origin',
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                if (res.status >= 400) throw res.statusText;
                return res.json();
            })
            // .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => {
                console.log(err);
                document.querySelector('#error-message').style.display = 'block';
                document.querySelector('#error-message').textContent = 'Ошибка: ' + err;
            });
            console.log(formData);
        });

        // const formData = new FormData();
        // formData.append('image', src);
        // console.log(formData); 

        // fetch('https://neto-api.herokuapp.com/photo-booth', {
        //     body: formData,
        //     credentials: 'same-origin',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        // .then(res => {
        //     if (res.status >= 400) throw res.statusText;
        //     return res.json();
        // })
        // // .then(res => res.json())
        // .then(res => console.log(res))
        // .catch(err => {
        //     console.log(err);
        //     document.querySelector('#error-message').style.display = 'block';
        //     document.querySelector('#error-message').textContent = 'Ошибка: ' + err;
        // });

        // const xhr = new XMLHttpRequest();
        // xhr.open('POST', 'https://neto-api.herokuapp.com/photo-booth');
        // xhr.addEventListener('load', () => {
        //     console.log(xhr.response);
        // });
        // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        // xhr.send(formData);
    });
}

// При отправке POST запроса от сервера приходит ошибка 500 (Internal Server Error)
// что не так, не могу разобраться (
