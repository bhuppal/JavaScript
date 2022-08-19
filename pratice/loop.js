

// let i = 1;
// do{
// //console.log(symbol);
// symbol += "#";
// i += 1;
// }while(i<=8);

// const n = 100;

for(let j=1; j<=100; j++) {
    let result = j;
    if(j%3 === 0 && j%5===0) {
        result = "FizzBuzz"
    }

    if(j%3===0) {
     result += " - Fizz";
    } else if(j%5===0) {
    result += " - Buzz";
    } 
    //console.log(result);
}


let symbol = "#";
const count = 8;

for(let i=1;i<=8;i++) {
    if(i%2!==0) {
        console.log(" # # # #");
    } else {
        console.log("# # # #");
    }
}