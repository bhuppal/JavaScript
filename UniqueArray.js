
/*let numbers = [1, 2, 1, 2, 3, 3, 4,4 , 4, 4, 5, 5, 6, 7, 9 , 9];
console.log(numbers);*/

/*let result = numbers.reduce(function(previous, number){
    if(!previous.find(element => element === number)) {
        previous.push(number);
    }
    return previous;
}, [])

//console.log(result);

const myObj = {
    name: "Blah",
    active: true,
    anotherField: false,
    anotherBoolField: true,
    someprop1: true,
    someprop2: false
}

let res = {...myObj}
const entries = Object.entries(myObj)
for (const [key, value] of entries) {
    let obj= {};
    obj[key]= value === true ? "Ok" : "Warning";
    res ={...res, ...obj};
}
console.log(res);
*/

/*
var result1 = {};
for(const [k, value] of Object.entries(myObj)) {
    console.log(k);
    if(value === true) {

        result1 = {...result1, obj }
    }
    else if(value === false) {
        result1 = {...result1, k:"Warning"}
    }
}

console.log(result1);

 */
/*
let myObj = {'a':true, 'b': false};
myObj['c'] = true;
console.log(myObj);


let arr1 = ['a', 'b', 'c', 'd', 'a', 'b', 'c'];
let arr2 = ['x', 'y', 'z'];
let map = {};




for(let i = 0; i<arr1.length;i++) {
    if(!map[arr1[i]]) {
        map[arr1[i]] = true;
    }
}
console.log(map);
for(let j =0; j<arr2.length; j++) {
    if (map[arr2[j]]) {
        console.log('Found');
    }

}

*/







