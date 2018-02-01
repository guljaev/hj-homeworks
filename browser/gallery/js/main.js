'use strict';

const currentPhoto = document.getElementById('currentPhoto');
const nextButton = document.getElementById('nextPhoto');
const prevButton = document.getElementById('prevPhoto');

const photosSrc = [
	'./i/breuer-building.jpg',
	'./i/guggenheim-museum.jpg',
	'./i/headquarters.jpg',
	'./i/IAC.jpg',
	'./i/new-museum.jpg'
];
const sourcesNumber = photosSrc.length;
let index = 0;
currentPhoto.src = photosSrc[index];


nextButton.onclick = nextPhoto;
prevButton.onclick = prevPhoto;


function nextPhoto() {
	index = (index + 1) % sourcesNumber;
	currentPhoto.src = photosSrc[index];
}

function prevPhoto() {
	index = (index + sourcesNumber - 1) % sourcesNumber;
	currentPhoto.src = photosSrc[index];
}