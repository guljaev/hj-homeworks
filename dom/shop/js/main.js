'use strict';

const buttons = document.querySelectorAll('button.add');
const cartCountNode = document.getElementById('cart-count');
const cartTotalPriceNode = document.getElementById('cart-total-price');
let cartCount = 0;
let cartTotalPrice = 0;

function putInCart() {
    cartCountNode.innerHTML = ++cartCount;
    cartTotalPrice += Number(this.dataset.price);
    cartTotalPriceNode.innerHTML = getPriceFormatted(cartTotalPrice);
}

for (const button of buttons) {
    button.addEventListener('click', putInCart);
}
