function* infinite(limit) {
    let count = 0;
    while(true) {
        if(count > limit) {
            return;
        }        
        yield count++;
    }
}

for(let num of infinite(Infinity)) {
    console.log(num);
}