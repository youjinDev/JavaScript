/* 2. 콜백지옥을 해결하기 위해 나온 Promise
콜백함수를 여러개 중첩하는 대신 덧붙이는 방식으로 동작
시각적으로 평평하게 보임!
*/

export function getUserPreferences() {
    const preference = new Promise((resolve, reject) => {
        resolve({
            theme : 'dark',
            love : 'val of love'
        });
        reject(() => log(Failure));
    });
    return preference;
}

export function getMusic(theme) {
    if (theme === 'dark') {
        return Promise.resolve({
            album : 'Jazz for morning',
        });
    }
    return Promise.resolve({
            album : 'Summer Tropical',
        });
}

function log(value) {
    return console.log(value);
}

// getUserPreferences()
// .then(preference => {
//     log(preference); //{theme : dusk}
//     return getMusic(preference.theme);
// })
// .then(music => log(music.album)) //summer tropical
// .catch(e => log(e));