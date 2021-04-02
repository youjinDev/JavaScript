'use strict';

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    console.log('Before SetTimeOut'); // 1st

    setTimeout(() => {
        button.style.backgroundColor = 'green';
        console.log('setTimeOut!'); // 3rd
    },0);

    for (let i = 0; i < 100 ; i++) {
        // heavy job
    }

    console.log('After for loop'); // 2nd
});