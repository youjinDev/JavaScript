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

let id = 0;
function createItem(text) {

    let newList = document.createElement('li');
    newList.setAttribute('data-id', id);

    newList.innerHTML = `${text}
    <img src="img/check.png" class="check">
    <img src="img/garbage.png" class="trash">
    <div class = "divider"></div>
    `;

    list.appendChild(newList);
    id++;

    newList.addEventListener('click', (e) => {
        if(!(e.target.className == 'trash' || e.target.className == 'check')) {
            return;
        }
        
        if (e.target.className == 'trash') {
            list.removeChild(newList);
        }

        if (e.target.className == 'check') {
            newList.classList.toggle('done');
        }
    });

    return newList;
}

function scrollToEnd() {
    let lastList = list.lastChild;
    lastList.scrollIntoView();
}