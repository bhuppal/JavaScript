function* genaratorSample(){
    yield 0;
    yield 1;
    yield 2;
    return 10;
}

let CallGenarator = genaratorSample();
console.log(CallGenarator.next());
console.log(CallGenarator.next());
console.log(CallGenarator.next());
console.log(CallGenarator.next());
console.log(CallGenarator.next());

for(let numb of genaratorSample()){
    console.log(numb);    
}


