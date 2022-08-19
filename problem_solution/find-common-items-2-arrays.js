/*
Given 2 arrays, create a function that let's a user know (true/false) whether trhese two arrays contain any common items.

For Example:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
The result is - flase

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z','y', 'x'];
The result is - true.

2 parameters - arrays - no size limit
return true or false

*/


/*
Step #1 - Create a object, set property for each element from the first arr1 and set the value as true
Step #2 - Loop through arr2, check each arr2 element if it exists within the Object, if it does the return the property value (true) otherwise don't exists return false.
*/
function containsCommonItem(arr1, arr2) {
    let objArr1= {}
    
    for(let value of arr1) {
        objArr1[value] = true;
    }

    //console.log(objArr1);

    for(let value of arr2) {
        if(objArr1[value]) return true;
    }
    return false;
}
// Big O Notation --- O(a+b)


function containsCommonItemES6(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item));
}

function containsCommonItemBruteForceSolution(arr1, arr2) {
    let result = false;
    if((Array.isArray(arr1) && arr1.length == 0) || 
            Array.isArray(arr2) && arr2.length == 0) {
        return result;
    }

    // for(let i=0; i<arr1.length; i++) {
    //     for(let j=0; j<arr2.length; j++) {
    //         if(arr1[i] === arr2[j]) {
    //             return true;
    //         }
    //     }
    // }
    arr1.forEach((item1) => {
       arr2.forEach((item2) => {
           if(item1 === item2) {
               result = true;
               return result;
           }
       });
    });
    return result;
}


let arr1 = ['a', 'b', 'c', 'x'];
let arr2 = ['z', 'y', 'x'];
//console.log(containsCommonItemBruteForceSolution(arr1, arr2));
// Big O notation - O(a*b)
//console.log(containsCommonItem(arr1, arr2));
console.log(containsCommonItemES6(arr1, arr2));