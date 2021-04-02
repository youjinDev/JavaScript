'use strict';

/* 대부분의 web APIs는 task queue를 거치지 않고 바로 call stack에서 실행이 된다
* 그러나 addEventListener, setTimeOut, setInterval등의 api에 전달된 call back들은 task queue를 거쳐 evnet loop에 의해 한 루프당 하나씩 call stack에 담긴다
*/


const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    console.log('Before SetTimeOut'); // 1st

    setTimeout(() => {
        button.style.backgroundColor = 'yellow';
        console.log('setTimeOut!'); // 3rd
    },0);

    for (let i = 0; i < 100 ; i++) {
        // heavy job
    }

    console.log('After for loop'); // 2nd
});


const buttonNum1 = document.querySelector('.btn1');
buttonNum1.addEventListener('click', infinite); 

function infinite() {
    button.style.backgroundColor = 'yellow';
    console.log('repeat');
    infinite(); // call stack에 infinite()가 계속 적재됨
                // event loop는 call stack에 머물러있느라 돌 수 없음
                // 다른 버튼이 클릭 되지도 않고, hover도 정상 작동 되지 않는 이른바  렉 걸린 상태가 됨!
}

// Do not!
const box = document.querySelector('.box');
box.addEventListener('click', () => {
    // 여기서 얼마나 많이 렌더링 관련 작업을 수행하든지 브라우저에서는 바로 업데이트되어 보여지지 않음
    // 이 call back이 수행되는 동안 event loop가 call stack에 머물러 있기 때문
    // 여기서 모든것들이 다 적용된 다음에 event loop는 rendering 순서로 간다!
    box.style.transition = 'transform 1s ease-in';
    box.style.transform = 'translateX(800px)';
    box.style.transform = 'translateX(500px)'; // 최종적으로 이것만 수행
    box.style.backgroundColor = 'red';
    box.style.backgroundColor = 'green'; // 최종적으로 이것만 수행
    addElement();
});

function addElement() {
    const element = document.createElement('p');
    document.body.append(element);
    element.style.color = 'red';
    element.innerText = 'Hello';
}