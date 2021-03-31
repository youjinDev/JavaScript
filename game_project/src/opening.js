'use strict';


const startBtn = document.querySelector('.start__game');
startBtn.addEventListener('click', () => {
    page_href('index.html');
});

function page_href(url) {
    location.href = url;
}