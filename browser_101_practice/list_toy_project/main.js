'use strict';


const list = document.querySelector('.list');
const addBtn = document.querySelector('.btn.add');
const input = document.querySelector('.input');

addBtn.addEventListener('click', (e) => {
    onAddList();
});

input.addEventListener('keypress', (e) => {
    if (e.code == 'Enter') {
        onAddList();
    }
})

// input text를 받아와서 list에 추가하는 method
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
}

function createItem(text) {
    let newList = document.createElement('li');
    let newImg = document.createElement('img');
    let newLine = document.createElement('div');

    newImg.setAttribute('src', 'img/garbage.png');
    newImg.setAttribute('class', 'trash');
    newLine.setAttribute('class', 'divider');

    // inerHTML이나 textContent 쓰면 안되더라... 왜지
    newList.innerText = text;

    newList.appendChild(newImg);
    newList.appendChild(newLine);

    list.appendChild(newList);

    newImg.addEventListener('click', () => {
        list.removeChild(newList);
    });
}

