
console.log(1);
var myPromise = new Promise((resolve, reject) => {
    // async code in here (usually)
    console.log(2);
    var noError = true;
    if(noError) {
        console.log(3);
        resolve();        
    }
    else {
        reject();
    }
});

//do some stuff
console.log(4);

myPromise.then(() => {
    console.log(5);
    console.log('Pay load');    
    console.log('Sucess');        
}).catch(() => {
    console.log('Failure');    
});

