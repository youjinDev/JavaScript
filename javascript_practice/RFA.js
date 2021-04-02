'use strict';

// RAF는 rendering phase 진입 이전에 인자로 주어진 callback 수행을 보장해준다
// RAF의 callback들은 RFA queue에 별도로 들어간다
// click listenter를 click할 때 RAF callback을 수행하는 것이 아니라, 일단 RAF queue에 등록해놨다가 나중에 브라우저가 업데이트 될 때 변경 사항들을 적용하는 것

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
            // document.body.style.backgroundColor = 'red';
            console.log('second RAF!');
        });

        setTimeout(() => {
            console.log('Last setTimeOut!');
        }, 0);

        } else {
            console.log('stopped');
            document.body.style.backgroundColor = 'orange';
            cancelAnimationFrame(myReq);
            fired = !fired;
        }
});


function fly() {
    document.body.style.backgroundColor = 'skyBlue';
    X += 10;
    Y += 5;
    rocket.style.transform = `translate(${X}px, -${Y}px)`;
    if (X < 1500) {
    myReq = requestAnimationFrame(fly);
    }
};


