'use strict';

const inputNodes = document.querySelectorAll('.list-block input[type=\'checkbox\']');

function updateList() {
    let taskDoneAmount = 0;
    const taskAmount = inputNodes.length;
    Array.from(inputNodes).forEach(input => {
        if (input.checked) {
            taskDoneAmount++;
        }
    });

    if (taskDoneAmount === taskAmount) {
        document.getElementsByClassName('list-block')[0].classList.add('complete');
    } else {
        document.getElementsByClassName('list-block')[0].classList.remove('complete');
    }

    document.querySelector('.list-block output').value = `${taskDoneAmount} из ${taskAmount}`;
}

Array.from(inputNodes).forEach(input => {
    input.addEventListener('click', updateList);
});

updateList();
