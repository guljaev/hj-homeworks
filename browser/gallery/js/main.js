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
let index = 0;
currentPhoto.src = photosSrc[index];


nextButton.onclick = nextPhoto;
prevButton.onclick = prevPhoto;


function nextPhoto() {
	index = (index + 1) % 5;
	currentPhoto.src = photosSrc[index];
}

function prevPhoto() {
	index = (index + 4) % 5;
	currentPhoto.src = photosSrc[index];
}