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

// handle buttons click events 

function playPiano() {
    const audioNode = this.getElementsByTagName('audio')[0];
    audioNode.currentTime = 0;
    audioNode.play();
}

for (const button of pianoButtons) {
    button.addEventListener('click', playPiano);
}

// handle Shift and Alt push events

const audioNodes = [];
for (let i = 0; i < pianoButtons.length; i++) {
    audioNodes.push(pianoButtons[i].getElementsByTagName('audio')[0]);
}

function changeAudioHrefsForLowerMode() {
    for (let i = 0; i < pianoButtons.length; i++) {
        audioNodes[i].src = pianoSounds.lower[i];
    }
}

function changeAudioHrefsForMiddleMode() {
    for (let i = 0; i < pianoButtons.length; i++) {
        audioNodes[i].src = pianoSounds.middle[i];
    }
}

function changeAudioHrefsForHigherMode() {
    for (let i = 0; i < pianoButtons.length; i++) {
        audioNodes[i].src = pianoSounds.higher[i];
    }
}


function switchToLowerMode(event) {
    if (event.repeat) return;
    if (event.key === 'Shift') {
        changeAudioHrefsForLowerMode();
    }
}

function switchToMiddleMode(event) {
    if (event.repeat) return;
    if ( (event.key === 'Shift') || (event.key === 'Alt') ) {
        changeAudioHrefsForMiddleMode();
    }
}

function switchToHigherMode(event) {
    if (event.repeat) return;
    if (event.key === 'Alt') {
        changeAudioHrefsForHigherMode();
    }
}

changeAudioHrefsForMiddleMode();
document.addEventListener('keydown', switchToLowerMode);
document.addEventListener('keydown', switchToHigherMode);
document.addEventListener('keyup', switchToMiddleMode);
