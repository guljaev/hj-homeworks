'use strict';

const contentFormNode = document.getElementsByClassName('contentform')[0];
const outputNode = document.getElementById('output');
const buttonContactSubmit = contentFormNode.getElementsByClassName('button-contact')[0];
const buttonContactChange = outputNode.getElementsByClassName('button-contact')[0];


contentFormNode.querySelector('input[name="zip"]').type = 'number';

for (const input of contentFormNode.getElementsByTagName('input')) {
    input.addEventListener('input', checkSubmitAbility);
}
contentFormNode.getElementsByTagName('textarea')[0].addEventListener('input', checkSubmitAbility);

buttonContactSubmit.addEventListener('click', showMessage);
buttonContactChange.addEventListener('click', hideMessage);


function checkSubmitAbility() {
    const submitAbility =  Array.from( contentFormNode.getElementsByTagName('input') ).reduce( ( (inputsFilled, input) => inputsFilled && Boolean(input.value) ), true ) && Boolean(contentFormNode.getElementsByTagName('textarea')[0].value);
    if (submitAbility) {
        buttonContactSubmit.disabled = false;
    } else {
        buttonContactSubmit.disabled = true;
    }
}

function showMessage(event) {
    event.preventDefault();
    contentFormNode.classList.add('hidden');
    outputNode.classList.remove('hidden');


    const textareaNode = contentFormNode.getElementsByTagName('textarea')[0];
    document.getElementById(textareaNode.name).value = textareaNode.value;

    for (const input of contentFormNode.getElementsByTagName('input')) {
        if ( document.getElementById(input.name) ) {
            document.getElementById(input.name).value = input.value;
        }
    }
}

function hideMessage() {
    contentFormNode.classList.remove('hidden');
    outputNode.classList.add('hidden');
}
