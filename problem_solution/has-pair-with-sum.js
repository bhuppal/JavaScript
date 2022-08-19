let arr = [6, 4, 3, 2, 1, 7];
let sum = 15;

function hasPairWithSum(arr, sum) {
    const mySet  = new Set();
    for(let value of arr) {
        if(mySet.has(value)) {
            //console.log(value);
            return true;
        }
        mySet.add(sum-value);
    }
    return false;
}

console.log(hasPairWithSum(arr, sum));