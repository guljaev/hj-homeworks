'use strict';

const prodImage = document.getElementById('slider');
prodImage.src = './i/airmax.png';
let count = 0;

const timerId = setInterval(() => {
	switch(count % 5) {
		case 0:
			prodImage.src = './i/airmax-jump.png';
			break;
		case 1:
			prodImage.src = './i/airmax-on-foot.png';
			break;
		case 2:
			prodImage.src = './i/airmax-playground.png';
			break;
		case 3:
			prodImage.src = './i/airmax-top-view.png';
			break;
		case 4:
			prodImage.src = './i/airmax.png';
			break;
	}

	count++;
}, 5000)

// clearInterval(timerId);