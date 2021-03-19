'use strict';

class Counter {
    constructor(maxCount, callback) {
        this.count = 0;
        this.maxCount = maxCount;
        this.callback = callback;
    }

    increase() {
        this.count++;
        console.log(this.count);
        
        if (this.count === this.maxCount) {
            this.callback && this.callback(this.count); //등록된 callback이 있다면 callback을 수행
        }
    }
}

function consoleMaxCount(num) {
    console.log('this is consoleMaxCount', num);
}

function alertMaxCount(num) {
    alert(`This is alertMaxCount : Max number is ${num}`);
}

console.log(typeof Counter); //function! 즉, 클래스는 함수이다

let counter = new Counter();
console.log(counter.count, counter.maxCount, counter.callback); //생성시 아무것도 전달하지 않으면 0, undefined, undefined

counter = new Counter(5, consoleMaxCount);
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();

console.log(counter.count, counter.maxCount, counter.callback); //5, 5, f consoleMaxCount(num)

let newCounter = new Counter(alertMaxCount);
newCounter.increase();
newCounter.increase();
newCounter.increase();
console.log(newCounter.count, newCounter.maxCount, newCounter.callback); //3, undefined, f consoleMaxCount(num)





















