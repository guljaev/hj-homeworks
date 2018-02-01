'use strict';

const prodImage = document.getElementById('slider');
const prodImageSources = ['./i/airmax-jump.png', './i/airmax-on-foot.png', './i/airmax-playground.png', './i/airmax-top-view.png', './i/airmax.png'];
let count = 0;
prodImage.src = prodImageSources[count];


const timerId = setInterval(() => {
	const sourcesNumber = prodImageSources.length;
	prodImage.src = prodImageSources[++count % sourcesNumber];
	count++;
}, 5000)

// clearInterval(timerId);