/**
 * Created by knight on 17/2/21.
 */




function init() {
    logSomething('这是一个测试方法');
    document.getElementById('myBtn').addEventListener('click',function () {
        var a=10;
        var b=a +20;
        console.log('10+20 =30');
    });
}

function logSomething(msg) {
    console.log(msg);
}

init();

