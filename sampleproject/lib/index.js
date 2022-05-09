"use strict";

// var obj = {
//     rex: /\d/,
//     checkArray: function(array) {
//         return array.some(entry => this.rex.test(entry));
//     }
// };
// console.log(obj.checkArray(["no", "digits", "in", "this", "array"])); // false
// console.log(obj.checkArray(["this", "array", "has", "1", "digit"]));  // true
// var obj = {
//     rex: /\d/,
//     checkArray: function(array) {
//         return array.some(entry => this.rex.test(entry));
//     }
// };
// console.log(obj.checkArray(["no", "digits", "in", "this", "array"])); // false
// console.log(obj.checkArray(["this", "array", "has", "1", "digit"])); // true
// let x = 2;
// x += 40;
// console.log(x);
// let y;
// console.log(y);
// const value = Math.random();
// console.log(value);
// console.log(value < 0.5 ? "Heads" : "Tail");
// function jumpout() {
//     var a = [1, 2, 3];
//     for (let i = 0; i<a.length; i++) {
//         let value = a[i];
//         console.log(value);
//     }
//     console.log("Outside loop "  ); 
// }
// jumpout();
// function example() {
//     console.log(answer);
//     answer = 42;
//     console.log(answer);
//     var answer = 67;
// }
// example();
// let answer;
// function hoisting() {
//     let answer;
//     answer = 42;
//     console.log(answer);
//     //let answer;
// }
// hoisting();
// function temporalExample() {
//     const f = () => {
//         console.log(value);
//     };
//     let value = 4232;
//     f();
// }
// temporalExample();
// function blockExample(str) {
//     let p = "prefix";
//     if (str) {
//         p = p.toUpperCase();
//         str = str.toUpperCase();
//         p = str.indexOf("x");
//         if (p != -1) {
//             str = str.substring(0, p);
//         }
//     }
//     return p + str;
// }
// console.log(blockExample("bhuppal"));
var answer = 42;
console.log("answer == " + answer);
console.log("this.answer == " + undefined.answer);
console.log("has property? " + ("answer" in undefined));