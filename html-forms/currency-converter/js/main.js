'use strict';

const currRequest = new XMLHttpRequest();
currRequest.addEventListener('loadstart', onLoadStart);
currRequest.addEventListener('loadend', onLoadEnd);
currRequest.addEventListener('load', onLoad);

currRequest.open('GET', 'https://neto-api.herokuapp.com/currency', true);
currRequest.send();

function onLoadStart() {
    document.getElementById('content').classList.add('hidden');
    document.getElementById('loader').classList.remove('hidden');
}

function onLoadEnd() {
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('loader').classList.add('hidden');
}

function onLoad() {
    const currRate = JSON.parse(currRequest.responseText);
    const fromSelectNode = document.getElementById('from');
    const toSelectNode = document.getElementById('to');
    const sourceNode = document.getElementById('source');
    const resultNode = document.getElementById('result');

    for (const currency of currRate) {
        fromSelectNode.innerHTML += `<option value=${currency.code}>${currency.code}</option>`;
        toSelectNode.innerHTML += `<option value=${currency.code}>${currency.code}</option>`;
    }

    sourceNode.addEventListener('input', updateRateResult);
    fromSelectNode.addEventListener('input', updateRateResult);
    toSelectNode.addEventListener('input', updateRateResult);


    function updateRateResult() {
        const indexFrom = fromSelectNode.selectedIndex;
        const currFromCode = fromSelectNode[indexFrom].value;
        const currFromValue = currRate.filter(curr => (curr.code === currFromCode)).shift().value;

        const indexTo = toSelectNode.selectedIndex;
        const currToCode = toSelectNode[indexTo].value;
        const currToValue = currRate.filter(curr => (curr.code === currToCode)).shift().value;

        resultNode.value = ( sourceNode.value * (currFromValue / currToValue) ).toFixed(2);
    }

    updateRateResult();
}
