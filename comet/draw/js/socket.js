'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');
ws.addEventListener('error', error => {
    console.log(error.data);
});
ws.addEventListener('close', event => {
    console.log(`${event.code}: Вэбсокет соединение закрыто по причине ${event.reason}`);
});
ws.addEventListener('message', event => {
    console.log(event.data);
});

ws.addEventListener('open', () => {
    console.log('ws is opened');
    window.editor.addEventListener('update', event => {
        const canvas = event.canvas;
        // const ctx = canvas.getContext('2d');
        // const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // const binary = Uint8Array.from(image.data);
        // ws.send(binary.buffer);
        // console.log(binary);
        // console.log(canvas);
        canvas.toBlob(blob => {
            console.log(blob);
            ws.send(blob);
        });
    });
});

