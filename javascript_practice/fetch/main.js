(() => {
    const addBtn = document.querySelector('.add');
    let indexOfPost = 0;
    addTemplate();
    addBtn.addEventListener('click', () => {
        getPostContents()
        .then(data => displayPostContents(data.posts, indexOfPost++));
    });
})();

function addTemplate() {
    const template = `
    <div class="container">
        <h1 class="title">제목</h1>
        <h3 class="date">날짜</h3>
        <div class="contents">내용</div>
    </div>`;
    let contentsContainer = document.createElement('div');
    contentsContainer.innerHTML = template;
    document.body.appendChild(contentsContainer);
}

async function getPostContents() {
    const response = await fetch('./file.json');
    return response.json();
}

function displayPostContents(data, index) {
    console.log('[displayPostContents]');
    const title = document.querySelector('.title');
    const date = document.querySelector('.date');
    const description = document.querySelector('.contents');
    title.innerText = data[index].title;
    date.innerText = data[index].date;
    description.innerText = data[index].description;
}