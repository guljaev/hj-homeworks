'use strict';

const slider = document.querySelector('.slider');
let activeSlide = slider.getElementsByClassName('slide')[0];
activeSlide.classList.add('slide-current');

const sliderNav = slider.querySelector('.slider-nav');
const prevButton = sliderNav.querySelector('[data-action=prev]');
const nextButton = sliderNav.querySelector('[data-action=next]');
const firstButton = sliderNav.querySelector('[data-action=first]');
const lastButton = sliderNav.querySelector('[data-action=last]');

// sliderNav.addEventListener('click', event => {
//     activeSlide.classList.remove('slide-current');
//     switch (event.target) {
//         case prevButton:
//             activeSlide = activeSlide.previousElementSibling;
//             break;
//         case nextButton:
//             activeSlide = activeSlide.nextElementSibling;
//             break;
//         case firstButton:
//             activeSlide = activeSlide.parentElement.firstElementChild;
//             break;
//         case lastButton:
//             activeSlide = activeSlide.parentElement.lastElementChild;
//             break;
//     }
//     activeSlide.classList.add('slide-current');
//     updateSliderNav();    
// });

prevButton.addEventListener('click', showSlide);
firstButton.addEventListener('click', showSlide);
nextButton.addEventListener('click', showSlide);
lastButton.addEventListener('click', showSlide);
updateSliderNav();  

function updateSliderNav() {
    if (activeSlide.previousElementSibling) {
        prevButton.classList.remove('disabled');
        firstButton.classList.remove('disabled');
    } else {
        prevButton.classList.add('disabled');
        firstButton.classList.add('disabled');
    }


    if (activeSlide.nextElementSibling) {
        nextButton.classList.remove('disabled');
        lastButton.classList.remove('disabled');
    } else {
        nextButton.classList.add('disabled');
        lastButton.classList.add('disabled');
    }
}

function showSlide(event) {
    const btnDisabled = event.currentTarget.classList.contains('disabled');
    if (btnDisabled) {
        return;
    }

    activeSlide.classList.remove('slide-current');
    switch (event.currentTarget) {
        case prevButton:
                activeSlide = activeSlide.previousElementSibling;
            break;

        case nextButton:
                activeSlide = activeSlide.nextElementSibling;
            break;

        case firstButton:
                activeSlide = activeSlide.parentElement.firstElementChild;
            break;

        case lastButton:
                activeSlide = activeSlide.parentElement.lastElementChild;
            break;
    }
    activeSlide.classList.add('slide-current');
    updateSliderNav();    
}
