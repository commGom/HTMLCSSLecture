//1. Producer
//=> Promise를 만드는 순간 execute 콜백함수가 바로 실행된다.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read file)과 같은 것들은 비동기적 처리가 좋다 Promise 이용
    console.log(`doing something...`)
    setTimeout(() => {
        // resolve(`ellie`);
        reject(new Error('No Network'));
    }, 2000);
});

//2. Producer Promise를 만들었으니까 => 이 객체를 이용하는 Consumer 만들기
//then(resolve 호출) catch(reject 호출) finally(성공 실패 상관없이 마지막에 실행)를 이용하여 받아올 수 있다
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });