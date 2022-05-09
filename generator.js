function* add() {
    
    console.log("Starting...");
    
    const value1 = yield + "Please provide the value1";
    
    console.log("value1 is " + value1);
    const value2 = yield + "Please provide the value2";
    
    console.log("value2 is " + value2);
    return value1 + value2;
}


let result;
const gen = add();
result = gen.next();

console.log(result);

result = gen.next(100);

console.log(result);

result = gen.next(200);
console.log(result);
