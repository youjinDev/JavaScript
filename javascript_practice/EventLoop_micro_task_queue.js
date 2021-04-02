'use strict';

function handleClick() {
    console.log('handle click');
    Promise.resolve(0)
    .then(()=> { // then의 callback은 micro task queue에 담긴다
        console.log('then');
        handleClick();
    });
}

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    handleClick(); // 반복적으로 수행되다가 micro task queue가 꽉 차게 되면 저절로 종료
});