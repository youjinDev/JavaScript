'use strict';

function printNumbers_setInterval(from, to) {
    let timerId = setInterval( () => { 
		if(from >= to){
            clearInterval(timerId);
        }

        console.log(from); 			
		from ++;
    }, 1000);
};

printNumbers_setInterval(1, 10);


function printNumbers_setTimeout(from, to) {
    let myTimer = setTimeout(function run() {
        console.log(from);
        if (from< to) {
            setTimeout(run, 1000)
        }
        from++;
    }, 1000)
};

printNumbers_setTimeout(1, 10);

// setInterval보다 nested setTimeout을 이용하면 조금 더 유연함
// 호출 결과에 따라 다음 호출을 원하는 방식으로 조종할 수 있음
let delay = 5000;
let mySetTimer = setTimeout(function request() {
    if (requestFail) {
        delay *= 2;
    }

    mySetTimer = setTimeout(request, delay);
}, delay);