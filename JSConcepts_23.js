function* foo(){
    let x = yield 3;
    console.log(`x: ${x}`);
}

let fooGen = foo();
let y = fooGen.next().value;
console.log(`y: ${y}`);
fooGen.next(10);
