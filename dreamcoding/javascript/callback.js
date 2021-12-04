// hosting var, function declaration (var, function은 젤위로 선언되는 것?)

// callback : 인자로 전달해준 함수를 가져와서 호출해줄 수 있다.
// 동기적인 callback (synchronous callback)
function printImmediately(print){
    print();
}

printImmediately(()=>console.log('hello'));
// 비동기적인 callback (asynchronous callback)
function printWithDelay(print,timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'),2000);
