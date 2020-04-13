function* fib(limit) {
    let x = 0;
    let y = 1;
    yield x;
    yield y;
    for(let i =0; i < limit; i++) {
        [x, y] = [y, x + y];
        yield y;
    }
}

for(let n of fib(100)) {
    console.log(n);    
}