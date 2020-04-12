var name = 'Bhuppal Kumar G H';


console.log('Hello my name is ' + name);

console.log(`Hello my name is ${name}`);

var number = [90, 45, 24, 59, 34];

number.forEach(function(number){
    console.log(`${number} * 2 = ${number * 2}`);
})

function myName(){
    return 'Bhuppal';
}

console.log(`I'm calling a function using template string ${myName()}`);