var numbers = [1, 2, 3, 4, 5]

var r1 = numbers.map(function(number) {
    return number * 2;
})

console.log(r1);

// form 1
var r2 = numbers.map((number) => {
    return number *2 ;
})

console.log(r2);

// form 2, only one parameter
 var r3 = numbers.map(number => {
    return number * 2;
})

console.log(r3);

number => {
    console.log(number);
}


var r4 = numbers.map(number => number * 5);
console.log(r4);