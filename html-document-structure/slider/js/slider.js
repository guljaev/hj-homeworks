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

updateSliderNav();  

function updateSliderNav() {
    if (activeSlide.previousElementSibling) {
        // prevButton.disabled = false;
        prevButton.addEventListener('click', showSlide);
        prevButton.classList.remove('disabled');

        // firstButton.disabled = false;
        firstButton.addEventListener('click', showSlide);
        firstButton.classList.remove('disabled');
    } else {
        // prevButton.disabled = true;
        prevButton.removeEventListener('click', showSlide);
        prevButton.classList.add('disabled');

        // firstButton.disabled = true;
        firstButton.classList.add('disabled');
    }


    if (activeSlide.nextElementSibling) {
        // nextButton.disabled = false;
        nextButton.addEventListener('click', showSlide);
        nextButton.classList.remove('disabled');

        // lastButton.disabled = false;
        lastButton.addEventListener('click', showSlide);
        lastButton.classList.remove('disabled');
    } else {
        // nextButton.disabled = true;
        nextButton.removeEventListener('click', showSlide);
        nextButton.classList.add('disabled');

        // lastButton.disabled = true;
        lastButton.classList.add('disabled');
    }
}

function showSlide(event) {
    activeSlide.classList.remove('slide-current');
    switch (event.target) {
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
