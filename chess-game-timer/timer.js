const sayHi = (Greet, Name) => {
    console.log(`${Greet}, ${Name}`);
}

//setTimeout(sayHi, 5000, "Hello", "Bhuppal");

// setTimeout((greet, name) => {
//     console.log(greet, name);
// }, 1000, "Hello", "Rhonda");


// let timerId = setInterval(() => {
//     console.log("Hello I'm calling every 2 mins");
// }, 2000);

// setTimeout(() => clearInterval(timerId), 7000);


// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);

//   setTimeout(() => clearInterval(timerId), 7000);


let count = 1;

// Assign a timed event to variable timerId.

const timerId = setInterval(() => {
    console.log(`Executing function for ${count} seconds.`);

    // Increment the count variable by one.
    count++;

    if(count === 11) {
        // Stop event by calling clearInterval on timerId.
        clearInterval(timerId);
        console.log(`Timer event cleared.`);
    }
}, 1000);