'use strict'

// Fetch the items from the JSON file
function loadItems() {
    return fetch('../data/data.json') // response 객체를 반환
    .then(response => response.json()) // response의 body를 json으로 변환
    .then(json => json.items); // json의 items만 받아온다
}

function displayItems (items) {
    // items는 json 형태이므로 html 폼으로 바꿔준다
    // 받아온 아이템을 ul items에 li item으로서 추가한다
    const ul = document.querySelector('.items');
    ul.innerHTML = items.map(item => createHTMLString(item)).join('');
}

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
    // setEventListner(items) // item 필터링
})
.catch(console.log); 