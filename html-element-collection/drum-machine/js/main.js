'use strict';

const drums = document.getElementsByClassName('drum-kit__drum');

for (const drum of drums) {
    drum.onclick = drumPlay;
}

function drumPlay() {
    const audioNode = this.getElementsByTagName('audio')[0];
    audioNode.play();
}
