'use strict';

function updateAddToCartButtonsFunctions() {
    const buttons = document.querySelectorAll('.add-to-cart');
    Array.from(buttons).forEach(button => {
        button.addEventListener('click', addToCartButtonFunction);
    });

    function addToCartButtonFunction(event) {
        event.preventDefault();
        const title = event.currentTarget.dataset.title;
        const price = event.currentTarget.dataset.price;
        const item = items
            .filter(item => ( (item.title === title) && (item.price == price) ))
            .pop();
        addToCart(item, title, price);
    }
}

showMore.addEventListener('click', () => {
    updateAddToCartButtonsFunctions();
});

updateAddToCartButtonsFunctions();
