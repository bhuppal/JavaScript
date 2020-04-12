let numbers = [1, 23 , 84, 34, 59, 39];

for(let i=0; i < numbers.length; i++){
    //console.log(numbers[i]);
}

let NewNumbers = [];
for(let i =0; i < numbers.length; i++){
    NewNumbers[i] = numbers[i];
}
//console.log(NewNumbers);

let forEachTest = numbers.forEach(function(number, j){
   //console.log( number*2);
})

let MapTest = numbers.map(function(number){
    return number*100;
})
//console.log(MapTest);

