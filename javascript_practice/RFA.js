'use strict';

// RAF는 rendering phase 진입 이전에 인자로 주어진 callback 수행을 보장해준다

let X = 0;
let Y = 0;
let fired = false;
let myReq;

const rocket = document.querySelector('.rocket');
rocket.addEventListener('click', () => {
    if (!fired) {
        fired = !fired;
        console.log('launched');

        myReq = requestAnimationFrame(() => {
            fly();
            console.log('after first fly!');
        });


        requestAnimationFrame(() => {
            console.log('second RAF!');
        });

        setTimeout(() => {
            console.log('Last setTimeOut!');
        }, 0);


        } else {
            console.log('stopped');
            cancelAnimationFrame(myReq);
            fired = !fired;
        }
});


function fly() {
    X += 10;
    Y += 5;
    rocket.style.transform = `translate(${X}px, -${Y}px)`;
    myReq = requestAnimationFrame(fly);
};

