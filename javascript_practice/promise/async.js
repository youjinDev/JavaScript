/*
async 키워드를 이용해서 선언한 함수는 비동기 데이터를 사용한다는 것을 의미, promise를 반환하게 됨
비동기 함수 내부에서 await 키워드를 사용하면 값이 반환될 때까지 함수의 실행을 중지 시킬 수 있음
async가 promise를 완전히 대체 할 수는 없음!
*/

import {getUserPreferences, getMusic} from './promise-2.js';

async function getTheme() {
    const { theme } = await getUserPreferences();
    return theme;
}

getTheme()
.then((theme) => console.log(theme)); // dark

async function getArtist(album) {
    if (album === 'Jazz for morning') {
        return {
            artist : 'Brand New Artists'
        }
    }
    else return {
        artist : 'undefined'
    };
}

// async의 강력한 기능 중 하나는 개별 프라미스에서 반환된 값을 변수에 먼저 할당하고 다음에 이어질 함수에 전달 할 수 있다는 점
async function getArtistByPreference() {
    const { theme } = await getUserPreferences();
    const { album } = await getMusic(theme);
    const { artist } = await getArtist(album);
    return artist;
}

getArtistByPreference()
.then(artist => {
    console.log(artist);
})
.catch(e => {
    console.error(e);
})