'use strict';

const sectionPlayground = document.querySelector('.section__playground');
const playBtn = document.querySelector('.play__btn');
const restartBtn = document.querySelector('.restart__btn');
const timer = document.querySelector('.timer');
const counter = document.querySelector('.counter');
const carRed = document.querySelector('.car.car__red');
const carGreen = document.querySelector('.car.car__green');

// Start play Btn
playBtn.addEventListener('click', () => {
    // 1. playground에 자동차를 랜덤하게 배치한다

    let clientRect = sectionPlayground.getBoundingClientRect();
    console.log(clientRect.bottom, clientRect.top);
    

    let randX = Math.floor(Math.random() * (clientRect.right - 100)); //1200 - 100. 0~1100
    let randY = Math.floor(Math.random() * ((clientRect.bottom - 100) - 315)) + 315; // 315 ~ 600


    carRed.style.transform = `translate(${randX}px, ${randY - 315}px)`;
    // carRed.style.transform = `translateY(${randY - 315}px)`;
    console.log(`randX : ${randX}`);
    console.log(`randY : ${randY}`);
    let carRect = carRed.getBoundingClientRect();
    console.log(carRect.left);
    console.log(carRect.top);
    // carRed.style.transform = `translateY(${randY}px)`;
    










    // 2. timer을 실행시킨다
    // 3. 남은 갯수를 표시한다
    // 4. 다른 것을 클릭하면 게임을 종료한다









})

sectionPlayground.addEventListener('click', (e) => {







})