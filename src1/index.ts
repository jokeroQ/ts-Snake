import { hi } from './m'
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(123, 123));
console.log(hi)

const obj = {
    name: 'lili',
    age: 33,
}
// console.log(obj)
// obj.age = 10;
// console.log(obj)

// console.log(Promise)

let fn=(a:number,b:number)=>a+b;
fn(123,234);
fn(2,2)