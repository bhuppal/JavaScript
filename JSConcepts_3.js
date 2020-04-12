var numbers = [20, 30, 40, 50, 60, 70];

var sum = numbers.reduce(function (sum, value){    
        return sum + value;
}, 10)

console.log(sum);