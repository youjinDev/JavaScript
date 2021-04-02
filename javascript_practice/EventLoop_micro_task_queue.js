'use strict';

// event loop는 micro task queue에 할당된 callback들이 모두 실행되고, 심지어 새로 들어온 callback까지 전부 처리될 때 까지 머물러있는다
// 한 loop당 하나의 callback만 call stack에 전달해주는 task queue와는 대조적임

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
    handleClick(); // 반복적으로 수행되다가 micro task queue가 꽉 차게 되면 종료
});