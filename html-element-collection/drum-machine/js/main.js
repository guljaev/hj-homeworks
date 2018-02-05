'use strict';

const drums = document.getElementsByClassName('drum-kit__drum');

function drumPlay() {
    const audioNode = this.getElementsByTagName('audio')[0];
    audioNode.currentTime = 0;
    audioNode.play();
}

for (const drum of drums) {
    drum.onclick = drumPlay;
}
