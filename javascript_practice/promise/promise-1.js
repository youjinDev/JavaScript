'use strict';


/* 1. 자바스크립트는 비동기 언어
이 말은 이전의 코드가 완전히 해결되지 않아도 다음 코드를 실행할 수 있다는 의미
비동기 언어의 가치는 지연된 정보를 기다리는 동안 이 정보가 필요없는 다른 코드를 실행할 수 있다는 점에 있음
*/

// 간단한 예시

function getUserPreferences(callback) {
    return setTimeout(() => {
        callback ({
            theme : 'dark',
        });
    }, 1000);
}

function log(value) {
    return console.log(value);
}

log('starting');
getUserPreferences (preferences => {
    return log(preferences.theme.toUpperCase());
});
log('ending?'); // starting, ending?, DARK


// 콜백의 문제점인 콜백 지옥 예시
// 사용자의 취향을 가져온 뒤 그에 맞는 앨범을 출력한다

function getMusic(theme, callback) {
    return setTimeout(() => {
        if (theme === 'dark') {
            return callback({
                album : 'music for airports',
            });
        }
        return callback({
            album : 'kind of blue',
        });
    }, 1000);
}

getUserPreferences(preferences => {
    return getMusic(preferences.theme, music => {
        log(music.album);
    });
});
