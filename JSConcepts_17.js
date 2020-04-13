var fs = require('fs');

fs.readFile('./JSConcepts_16.js', function(err, data){
    console.log('JSConcepts_16 file content');
    fs.readFile('./JSConcepts_17.js', function(err, data){
        console.log('JSConceopts_17 file content');        
    })    
})