'use strict';

const target = document.querySelector('.target');
const result = document.querySelector('.result');
const vertical = document.querySelector('.line.vertical');
const horizontal = document.querySelector('.line.horizontal');

document.addEventListener('mousemove', e => {
    // result에 동적으로 좌표를 출력하게 만든다
    let Y = e.clientY;
    let X = e.clientX;

    result.innerHTML = `🚩X 좌표 : ${X} 🚩Y 좌표 : ${Y}`;
    result.style.top = `${Y}px`;
    result.style.left = `${X}px`;
    

    // vertical, horizontal line 을 동적으로 움직이게 만든다
    vertical.style.left = `${X}px`;
    horizontal.style.top = `${Y}px`;

    // target image도 동적으로 움직이게 만든다
    target.style.left = `${X}px`;
    target.style.top = `${Y}px`;
});

// 추가할 기능
// 사운드
const audio = document.querySelector('.shoot');
document.addEventListener('click', () => {
audio.play();
})
