let numbers = [5, 10 , 15, 20, 25]

var resultFilter = numbers.filter(function(number){
    return number % 2 == 0;
})
//console.log(resultFilter);

var resultMap = resultFilter.map(function(number) {
    return number * 10000;
})
//console.log(resultMap);

var resultFilterMap = numbers.filter(
    function(number){
        return number % 2 == 0;
    }).map(function(number){
        return number * 5000;
    });
console.log(resultFilterMap);