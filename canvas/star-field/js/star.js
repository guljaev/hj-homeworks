'use strict';

const canvas = document.querySelector('canvas');
canvas.addEventListener('click', updateSky);
const ctx = canvas.getContext('2d');
updateSky();


function updateSky() {
    const width = canvas.width;
    const height = canvas.height;
    const starAmount = randIntNumber(200, 400);

    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, width, height);

    for (let i = 1; i <= starAmount; i++) {
        ctx.beginPath();
        ctx.fillStyle = randColor();
        ctx.globalAlpha = randNumber(0.8, 1);
        const starRadius = randNumber(0, 1.1 / 2);
        const starX = randNumber(0, width);
        const starY = randNumber(0, height);
        ctx.arc(starX, starY, starRadius, 0, 2 * Math.PI);
        ctx.fill();
    }
}


function randNumber(from, to) {
    return from + ( (to - from) * Math.random() );
}

function randIntNumber(from, to) {
    return Math.round(randNumber(from, to));
}

function randColor() {
    const rand = randNumber(0, 3);
    if (rand < 1) {
        return '#ffffff';
    } else if (rand < 2) {
        return '#ffe9c4';
    } else {
        return '#d4fbff';
    }
}

// Вопросы:
// 1. Раньше путь к файлу скрипта мы писали так src="js/star.js", а в последних заданиях он задан так src="./js/star.js"
// Работает вроде бы одинаково. В чем разница? Я думал, что "./" переводит на уровень выше. 
// 2. Почему ширина canvas, заданная в css, равна 800px, а свойство canvas.width равно 300 (аналогично с высотой)?
// в canvas всегда используется такая условная единица длины, и ее соотношение с 1px всегда постоянно?
