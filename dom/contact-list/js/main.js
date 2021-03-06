'use strict';

const contactsUlNode = document.querySelector('.contacts-list');
const contacts = JSON.parse(loadContacts());

// contactsUlNode.innerHTML = '';
// for (let i = 0; i < contacts.length; i++) {
//     contactsUlNode.innerHTML += '<li><strong></strong></li>';
// }

// const contactsLiNodes = contactsUlNode.getElementsByTagName('li');
// Array.from(contactsLiNodes).forEach((liNode, i) => {
//     liNode.dataset.email = contacts[i].email;
//     liNode.dataset.phone = contacts[i].phone;
//     liNode.querySelector('strong').innerHTML = contacts[i].name;
// });

let ulNodeContent = '';
for (let i = 0; i < contacts.length; i++) {
    ulNodeContent += `<li data-email=${contacts[i].email} data-phone="${contacts[i].phone}">
    <strong>${contacts[i].name}</strong>
    </li>`;
}

contactsUlNode.innerHTML = ulNodeContent;
