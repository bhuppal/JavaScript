var fs = require('fs');

console.log(1);

function promiseFs(file){
    console.log(3);
    return new Promise((resovle, reject) => {
        console.log(4);
        fs.readFile(file, (err, data) => {
            if(err){                
                reject(err);
            }
            else {
                console.log(6);                
                resovle(data);
            }
        })        
    })    
}

/*
console.log(2);
promiseFs('./JSConcepts_15.js')
    .then( data => {
        console.log(7);        
        console.log(data.toString());        
        promiseFs('./JSConcepts_18.js')
        .then( data => {
            console.log(data.toString());
        })
    })
    .catch(err => {
        console.log('Err...');        
    });
console.log(5);
*/

/*
console.log(2);
var promise2 = promiseFs('./JSConcepts_151.js')
    .then( data => {
        console.log(7);        
        console.log(data.toString());        
        return promiseFs('./JSConcepts_15.js');
    })
    .then(data => {
        console.log(data.toString());
    })
    .catch(err => {
        console.log(err);        
    });
console.log(5);
*/

var promise = promiseFs('./JSConcepts_15.js')
                .then(data => promiseFs('./JSConcepts_16.js'))
                .then(data => console.log(data.toString()))
                .catch(err => console.log(err));

