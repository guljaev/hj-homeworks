'use strinct';

const socket = new WebSocket('wss://neto-api.herokuapp.com/mouse');
showBubbles(socket);

document.querySelector('body').addEventListener('click', event => {
    const coords = {
        x: event.clientX,
        y: event.clientY
    };
    // console.log(coords);
    socket.send(JSON.stringify(coords));
    showBubbles(socket);
})
