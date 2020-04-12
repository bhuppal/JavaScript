function talk(greeting, farewell, names) {
    names.forEach(function(name){
        console.log(`${greeting} ${name}!`);
        console.log(`${farewell} ${name}!`);
    })
}

//talk('Hello', 'Goodbye', ['Bhuppal', 'Rhonda','Kumar']);


function talk2(greeting, farewell) {
    console.log(arguments);
    var args = Array.prototype.slice.call(arguments);   
    console.log(args);
}

//talk2('Hello', 'Goodbye', 'Bhuppal', 'Rhonda','Kumar');


function talk3(greeting, farewell, ...names){
    names.forEach(function(name) {
        console.log(`${greeting} ${name}`);
        console.log(`${farewell} ${name}`);
    })
}

var arr = ['Hello', 'Goodbye'];
talk3(...arr, 'Billy', 'Adam', 'Babby');



