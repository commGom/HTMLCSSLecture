//1. Object to JSON(String)
//JSON.stringify(obj)

//ex1. 글자->json
let json=JSON.stringify(true);
console.log(json);

//ex2. 배열->json
json=JSON.stringify(['apple','banana']);
console.log(json);

//ex3. 객체(obj)->json (Symbol, function은 JSON으로 변환 되지 않음)
const rabbit={
    name:'tori',
    color:'white',
    size:null,
    birthDate:new Date(),
    jump:()=>{
        console.log(`${this.name} can jump!`);
    },
};
json=JSON.stringify(rabbit);
console.log(json);
//ex4. 객체->json할 때, 배열을 이용하여 원하는 키값만 json으로  변환할 때

json=JSON.stringify(rabbit,['name','color','size']);
console.log(json);

//ex5. 객체->json할 때, 콜백함수를 이용하여 원하는 키값에 해당하는 값들만(혹은 세밀한 조건 부여) json으로 변환할 때
json=JSON.stringify(rabbit,(key,value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key==='name'?`It's me`:value;
});
console.log(json);
// 2. JSON to Object
// parse(json)
json=JSON.stringify(rabbit);
let obj=JSON.parse(json);
console.log(obj);
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

obj=JSON.parse(json,(key,value)=>{
    // console.log(`key : ${key}, value : ${value}`);
    return key==='birthDate'?new Date(value):value;
});
console.log(obj.birthDate.getDate());
