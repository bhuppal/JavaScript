// const arr = ["Banana", "Orange", "Apple"];

// for(const a of arr.keys()) {
//     console.log(a);
// }

// for(const b of arr.values()) {
//     console.log(b);
// }

// for(const [index, values] of arr.entries()) {
//     console.log(index, values);

// }

// const myArr = Array.of("Banana", "Apple", "Grapes", "Orange");
// console.log(myArr);


// const str = "Banana";
// const a1 = Array.from(str, String);
// console.log(a1);

// const n = "987654321";
// const r = Array.from(n, digits => parseInt(digits, 10));
// console.log(r);



const a = Array.from([1,2,3,4,5], x => x*x);
//console.log(a);

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// Generate numbers range 0..4
//const re = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(z));
const re = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
//console.log(re);



//const rangeArray = (start, stop, step) => Array.from({ length: (stop - start) /step + 1 }, (_, i) => start + (i * step));

// const rangeArray = (start, stop, step) => Array.from(  {length: (stop - start) / step +1}, (_, i) => start + (i*step));
// const az = rangeArray('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// console.log(az);

/*
const rangeArray = (start, stop, step) => Array.from({length: (stop - start) / step+1}, (_, i) => start + i * step);
//console.log(rangeArray(0, 100, 2));
let az = rangeArray('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) => String.fromCharCode(x));
for(const v of az.keys()) {
    console.log(v);
}
*/

// const rangeArray = (start, stop, step) => Array.from({length: (stop-start)/step+1}, (_, i) => start + i*step);
// console.log(rangeArray(0, 100, 1));
// rangeArray('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(f => f === "grapefruit");
console.log(index);