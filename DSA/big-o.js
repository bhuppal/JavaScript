const range = (start, stop, step) => Array.from({length:(stop-start)/step+1}, (_,i) => start + i*step);

const arrAlphaAToZOnly = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((item) => String.fromCharCode(item));
console.log(arrAlphaAToZOnly);




// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) {  // O(n)
      anotherFunction(); // O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }

  //3  + n + n + n + n  == O(n)


  // What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5;  // O(1)
    let b = 10;  // O(1)
    let c = 50;  // O(1)
    for (let i = 0; i < input; i++) {   // O(n)
      let x = i + 1;   // O(n)
      let y = i + 2;  // O(n)
      let z = i + 3;  // O(n)
  
    }
    for (let j = 0; j < input; j++) {   // O(n)
      let p = j * 2;  // O(n)
      let q = j * 2;  // O(n)
    }
    let whoAmI = "I don't know";   // O(1)
  }

  // 4 + (n+n+n) + (n+n)
// O(3n + 2n)  // O(n)


const box1 = range(1,500, 1);
const box2 = range(501, 750, 1);

const compressBox = (b1, b2) => {
    let result = [];
    b1.forEach((item) => result.push(item)); // O(b1)
    b2.forEach((item) => result.push(item)); // O(b2)

    return result.join(',');
}

//let r = compressBox(box1, box2);
//console.log(r);

// O(b1 * b2)


const num1 = range(1,50, 2);
const num2 = range(1,50, 3);

const matchPairNumbers = (n1, n2) => {
    let result = [,];
    n1.forEach(function(n1) {  
       n2.forEach(function(n2) {  //O(n1)
            result.push([n1,n2]);  //O(n2)
        });
    });
    return result;
}
// O(n^2) 
let r = matchPairNumbers(num1, num2);
console.log(r);


const printAllNumbersThenAllPairSums1 = (numbers) => {
    
    console.log('these are the numbers:');
    numbers.forEach(function(number) { //O(n)
        console.log(numbers);        
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {  //O(n1)
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);  //(O(n2))
        });
    });
}
// O(n+ n^2);
// O(n^2)
printAllNumbersThenAllPairSums(range(1,20,1));


const printAllNumbersThenAllPairSums2 = (numbers) => {
    
    console.log('these are the numbers:');
    numbers.forEach(function(number) { //O(n)
        console.log(numbers);        
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {  //O(n1)
        numbers.forEach(function(secondNumber) {
            numbers.forEach(function(secondNumber) {
                {
                    console.log(firstNumber + secondNumber);  //(O(n2))
                }
        });
        })
    })
}
// O(n+ n^3);
// O(n^3)
//printAllNumbersThenAllPairSums(range(1,20,1));