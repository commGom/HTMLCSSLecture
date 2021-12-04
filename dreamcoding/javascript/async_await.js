//비동기통신 promise의 syntactic sugar
//1. async
//오래걸리는 일들은 비동기적으로 처리해주기

async function fetchUser() {
    //do network request in 10secs
    return "It's me";
}

const user = fetchUser();
console.log(user);

//2. await
//async가 붙은 함수 안에서 사용가능하다 (해당 await함수가 끝날 때 까지 기다려주는 비동기 통신)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple}+${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then((a) => console.log(a));
pickAllFruits().then(console.log);


// 4. 더 빨리 끝나는 통신만 받아오기 Promise의 race 이용하기
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)