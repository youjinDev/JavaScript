'use strict';

const list = document.querySelector('.list');
const addBtn = document.querySelector('.btn.add');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

addBtn.addEventListener('click', (e) => {
    onAddList();
});

/*
* keypress는 deprecated 되었지만
* keydown event 사용시 한글 입력 중복 이벤트 발생하는 오류가 있음
*/

input.addEventListener('keypress', (e) => {
    if (e.code == 'Enter') {
        onAddList();
    }
});

function onAddList() {
    let text = input.value;
    if (text === '') {
        alert('Fill your items!');
        input.focus();
        return;
    }
    createItem(text);
    input.value='';
    input.focus();
    scrollToEnd();
}

function createItem(text) {
    let newList = document.createElement('li');
    let newImg = document.createElement('img');
    let newImg2 = document.createElement('img');
    let newLine = document.createElement('div');

    newImg2.setAttribute('src', 'img/check.png');
    newImg2.setAttribute('class', 'check');

    newImg.setAttribute('src', 'img/garbage.png');
    newImg.setAttribute('class', 'trash');
    newLine.setAttribute('class', 'divider');

    // inerHTML이나 textContent 쓰면 안되더라... 왜지
    newList.innerText = text;

    newList.appendChild(newImg);
    newList.appendChild(newImg2);
    newList.appendChild(newLine);

    list.appendChild(newList);

    newImg.addEventListener('click', () => {
        list.removeChild(newList);
    });

    newImg2.addEventListener('click', () => {
        newList.classList.toggle('done');
    })
}

function scrollToEnd() {
    let lastList = list.lastChild;
    lastList.scrollIntoView();
}