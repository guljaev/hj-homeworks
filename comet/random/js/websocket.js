'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
// ws.addEventListener('open', event => console.log('ws соединение установлено'));
ws.addEventListener('message', event => {
    // console.log(event.data);
    showNumber('websocket', event.data);
});

