function add() {
    console.log(arguments);
    var result = Array.prototype.reduce.call(arguments, function(memo, value){
        return memo + value;
    });
    return result;
}

var result = add(2, 3, 4, 5, 6);
console.log(result);


//ES6
function betterWay(...Values) {
    var result = Values.reduce(function(memo, value){
        return memo + value;
    })
    return result;
}

console.log(betterWay(2,3,4,5 ));