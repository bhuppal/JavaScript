var fs = require('fs');

fs.readFile('./JsConcepts_16.js', function(err, data){
    console.log(3);
    if(err) {
        // handle the err case
        console.log(err);
        return        
    }
    console.log(data.toString());    
})

//console.log(1)
//console.log(2);

function helper() {
    console.log(2);
    fs.readFile('./JsConcepts_16.js', function(err, data){
        console.log(4);
        if(err) {
            // handle the err case
            console.log(err);
            return        
        }
        console.log(data.toString());    
    })   
}

function main() {
    console.log(1);
    helper();
}

main();