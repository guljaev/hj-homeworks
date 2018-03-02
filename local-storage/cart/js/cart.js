'use strict';

const xhrColors = new XMLHttpRequest();
xhrColors.open('GET', 'https://neto-api.herokuapp.com/cart/colors');
xhrColors.send();
xhrColors.addEventListener('load', () => {
    treatRequestResponse(xhrColors, showColors);

    Array.from( document.querySelectorAll('#colorSwatch input') ).forEach(input => {
        input.addEventListener('change', (event) => {
            localStorage.setItem('colorChosen', event.currentTarget.value);
        });
    });
});

const xhrSizes = new XMLHttpRequest();
xhrSizes.open('GET', 'https://neto-api.herokuapp.com/cart/sizes');
xhrSizes.send();
xhrSizes.addEventListener('load', () => {
    treatRequestResponse(xhrSizes, showSizes);

    Array.from( document.querySelectorAll('#sizeSwatch input') ).forEach(input => {
        input.addEventListener('change', (event) => {
            localStorage.setItem('sizeChosen', event.currentTarget.value);
        });
    });
});

document.getElementById('AddToCartForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const xhrCart = new XMLHttpRequest();
    const fd = {};
    for ( const [key, value] of new FormData( document.getElementById('AddToCartForm') ) ) {
        fd[key] = value;
    }
    fd.productId = document.getElementById('AddToCartForm').dataset.productId;
    // console.log(fd);

    xhrCart.addEventListener('load', () => {
        treatRequestResponse(xhrCart, showCart);
    });
    xhrCart.open('POST', 'https://neto-api.herokuapp.com/cart');
    xhrCart.setRequestHeader('Content-Type', 'application/json');
    xhrCart.send(JSON.stringify(fd));
});


function showCart(cart) {
    console.log(cart);
}

function showColors(colors) {
    let colorsHTML = '';
    for (const color of colors) {
        colorsHTML += `
        <div data-value=${color.type} class="swatch-element color ${color.type} ${color.isAvailable ? 'available' : 'soldout'}">
            <div class="tooltip">${color.title}</div>
            <input quickbeam="color" id="swatch-1-${color.type}" type="radio" name="color" value=${color.type} ${isChecked(color) ? 'checked' : ''} ${color.isAvailable ? '' : 'disabled'}>
            <label for="swatch-1-${color.type}" style="border-color: red;">
                <span style="background-color: ${color.code};"></span>
                <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
            </label>
        </div>`;
    }
    document.querySelector('#colorSwatch .header').outerHTML += colorsHTML;

    function isChecked(color) {
        if (!localStorage.colorChosen) {
            return color.isAvailable;
        }
        if (color.isAvailable && (localStorage.colorChosen === color.type)) {
            return true;
        }
        return false;
    }
}

function showSizes(sizes) {
    let sizesHTML = '';
    for (const size of sizes) {
        sizesHTML += `
        <div data-value=${size.type} class="swatch-element plain ${size.type} ${size.isAvailable ? 'available' : 'soldout'}">
            <input id="swatch-0-${size.type}" type="radio" name="size" value=${size.type} ${isChecked(size) ? 'checked' : ''} ${size.isAvailable ? '' : 'disabled'}>
            <label for="swatch-0-${size.type}">
                ${size.title}
                <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
            </label>
        </div>`;
    }
    document.querySelector('#sizeSwatch .header').outerHTML += sizesHTML;

    function isChecked(size) {
        if (!localStorage.sizeChosen) {
            return size.isAvailable;
        }
        if (size.isAvailable && (localStorage.sizeChosen === size.type)) {
            return true;
        }
        return false;
    }
}


function treatRequestResponse(request, callback) {
    try {
        if (request.status < 200 || request.status >= 300) {
            throw new Error(request.statusText);
        }
        const response = JSON.parse(request.response);
        if (response.error) {
            throw new Error(response.message);
        } 
        callback(response);

    } catch (err) {
        console.log(`Произошла ошибка ${err.name}: ${err.message}`);
    }
}




