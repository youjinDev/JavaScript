function scopeTest_var() {
    var a = 0;
    if (true) {
        var b = 0;
        for (var c = 0; c < 3; c++) {
            console.log(`1 : c is ${c}`);
        }
        console.log(`2 : c is ${c}`); // var는 function scope이기 때문에 정상출력
    }
    console.log(`3 : b is ${b}`);
}
scopeTest_var();

function scopeTest_let() {
    let a = 0;
    if (true) {
        let b = 0;
        for (let c = 0; c < 3; c++) {
            console.log(`1 : c is ${c}`);
        }
        console.log(`2 : c is ${c}`); // let은 block scope이기 때문에 reference Error 발생
    }
    console.log(`3 : b is ${b}`);
}
scopeTest_let();
