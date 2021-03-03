'use strict'

// Fetch the items from the JSON file
function loadItems() {
    return fetch('../data/data.json') // response 객체를 반환
    .then(response => response.json()) // response의 body를 json으로 변환
    .then(json => json.items); // json의 items만 받아온다
}

// items는 json 형태이므로 html 폼으로 바꿔준다
// 받아온 아이템을 ul items에 li item으로서 추가한다
function displayItems (items) {
    const ul = document.querySelector('.items');
    ul.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// 받은 data item으로 list를 반환
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
      </li>
    `;
}


// main

loadItems() //item들을 동적으로 받아와서
.then(items => { //promise가 성공적으로 받아오면 전달받은 items들을 이용
    console.log(items);
    displayItems(items); // item 보여주기
    
    setEventListner(items) // item 필터링
})
.catch(console.log);
// 1. 배열을 두 개 만든다 - alt를 이용할 수 있는 것과 색상을 이용해야 하는 것
// 2. 버튼을 누르면 alt 값과 비교해서 그것과 일치하는 li만 가져오게 하는 함수 정의한다


function setEventListner(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelectorAll('.buttons');
    logo.addEventListener('click', () => {
        displayItems(items);
    });
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

function onButtonClick(event, items) {
    console.log(event);




}