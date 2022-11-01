'use strict';

const button = document.getElementById('button');
const quoteHeading = document.getElementById('quote-heading');
const quoteBody = document.getElementById('quote-body');

let getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => {
        let advice = res.json();
        return advice
    })
    .then(advice => {
        updateAdvice(advice);
    })
}


let updateAdvice = (advice) => {
    let adviceID = advice.slip.id;
    let adviceBody = advice.slip.advice;
    quoteHeading.innerText = `ADVICE # ${adviceID}`; 
    quoteBody.innerText = `\"${adviceBody}\"`;
};

window.addEventListener('load', getAdvice);
button.addEventListener('click', getAdvice);