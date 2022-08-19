const range = (start, stop, step) => Array.from({length:(stop-start)/step+1}, 
            (_,i) => (start + i*step) );


const s = range(9, 100, 2);
console.log(s);

const a = range('A'.charCodeAt(0), 'T'.charCodeAt(0), 1).map(i => String.fromCharCode(i));

console.log(a);

