'use strict';

const mediaplayer = document.getElementsByClassName('mediaplayer')[0];

const playstateButton = mediaplayer.getElementsByClassName('playstate')[0];
const backButton = mediaplayer.getElementsByClassName('back')[0];
const nextButton = mediaplayer.getElementsByClassName('next')[0];
const stopButton = mediaplayer.getElementsByClassName('stop')[0];

const songTitleTag = mediaplayer.getElementsByClassName('title')[0];

const audioTag = mediaplayer.getElementsByTagName('audio')[0];

const audioSources = [
    'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3',
    'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3',
    'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3'
];
audioSources.currIndex = 0;

function getSongNameFromSongHref(href) {
    return href.match(/\/([\w\s]+)\.mp3$/)[1];
}

audioTag.src = audioSources[audioSources.currIndex];
songTitleTag.title = getSongNameFromSongHref( audioSources[audioSources.currIndex] );


playstateButton.onclick = () => {
    if (mediaplayer.classList.contains('play')) {
        mediaplayer.classList.remove('play');
        audioTag.pause();
    } else {
        mediaplayer.classList.add('play');
        audioTag.play();
    }
};


stopButton.onclick = () => {
    if (mediaplayer.classList.contains('play')) {
        mediaplayer.classList.remove('play');
        audioTag.pause();
    }
    audioTag.currentTime = 0;
};


backButton.onclick = () => {
    const isPlaying = mediaplayer.classList.contains('play');
    stopButton.onclick();
    
    const sourcesNumber = audioSources.length;
    audioSources.currIndex = (audioSources.currIndex + sourcesNumber - 1) % sourcesNumber;
    audioTag.src = audioSources[audioSources.currIndex];
    songTitleTag.title = getSongNameFromSongHref( audioSources[audioSources.currIndex] );

    //включает проигрывание, если оно было включено в момент нажатия кнопки смены песни
    if (isPlaying) playstateButton.onclick();
};


nextButton.onclick = () => {
    const isPlaying = mediaplayer.classList.contains('play');
    stopButton.onclick();

    const sourcesNumber = audioSources.length;
    audioSources.currIndex = (audioSources.currIndex + 1) % sourcesNumber;
    audioTag.src = audioSources[audioSources.currIndex];
    songTitleTag.title = getSongNameFromSongHref( audioSources[audioSources.currIndex] );

    //включает проигрывание, если оно было включено в момент нажатия кнопки смены песни
    if (isPlaying) playstateButton.onclick();
};
