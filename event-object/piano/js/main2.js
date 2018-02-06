'use strict';

const piano = document.getElementsByClassName('set')[0];
const pianoButtons = piano.getElementsByTagName('li');
const pianoSounds = {
    lower: [
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'
    ],
    middle: [
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3'
    ],
    higher: [
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3'
    ]
};


function playPiano(event) {
    const index = Array.from(pianoButtons).indexOf(this);
    const audioNode = this.getElementsByTagName('audio')[0];

    if (event.shiftKey) {
        audioNode.src = pianoSounds.lower[index];
    } else if (event.altKey) {
        audioNode.src = pianoSounds.higher[index];
    } else {
        audioNode.src = pianoSounds.middle[index];
    }

    audioNode.currentTime = 0;
    audioNode.play();
}

for (const button of pianoButtons) {
    button.addEventListener('click', playPiano);
}
