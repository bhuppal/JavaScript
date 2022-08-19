let str = `WhatisLoremIpsum?LoremIpsumissimplydummytextoftheprintingandtypesettingindustry.LoremIpsumhasbeentheindustry'sstandarddummytexteversincethe1500s,whenanunknownprintertookagalleyoftypeandscrambledittomakeatypespecimenbook.Ithassurvivednotonlyfivecenturies,butalsotheleapintoelectronictypesetting,remainingessentiallyunchanged.Itwaspopularisedinthe1960swiththereleaseofLetrasetsheetscontainingLoremIpsumpassages,andmorerecentlywithdesktoppublishingsoftwarelikeAldusPageMakerincludingversionsofLoremIpsum.`;

const range = (start, stop, step) => Array.from({length:(start, stop)/step+1}, (_,i)=> (start + i*step));
const arrayNumbers = range(1, 500, 1);

//console.log(arrayNumbers);

let arrStringSample = Array.from(str);
//console.log(arrStringSample[3]);

arrStringSample.push('1');

//console.log(arrStringSample[arrStringSample.length-1]);


let fruit = 'apple';
let arrFruit = Array.from(fruit);

console.log(arrFruit);

arrFruit.push('s');
console.log(arrFruit);

arrFruit.pop();
console.log(arrFruit);

//let fruitOrange = Array.from('Orange');
//console.log(fruitOrange);

//arrFruit.unshift(fruitOrange);
//console.log(arrFruit);

//arrFruit.unshift(1,2,3);
//console.log(arrFruit);
// unshift takes only elements 

const array1 = ['a', 'p', 'p', 'l','e'];

//console.log(array1.unshift('o', 'r','a','n','g','e'));
// expected output: 5

//console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

// console.log(array1.toString());


// console.log(array1.shift());
// console.log(array1);

console.log(JSON.stringify(array1));


const names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( typeof (i = names.shift()) !== 'undefined' ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John

console.log(array1.reverse());
console.log(array1.reverse());
console.log(array1.reverse());

array1.map((item) => console.log(item));

console.log(array1);


for(let[key,value] of array1.entries()) {
    console.log(key, value);
}

const n = range(1,20, 1);

const result = n.reduce((previousValue, currentValue) =>  {
    return previousValue + currentValue   
}, 0);

console.log(result);

console.log(n.includes(12));
console.log(n);

console.log(n.findIndex((item) => item === 10));

console.log(n.flat());