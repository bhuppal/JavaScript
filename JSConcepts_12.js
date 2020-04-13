var arr = [1, 2, 3, 4, 5, 6];
var [a, b, c, d, e, f, g] = arr;
//console.log(a, b, c, d, e, f); 


//var [x,,y]= arr;
//console.log(x,y);

;[a,b] = [b,a];
//console.log(a,b);


var dog = {
    name: 'Sparky',
    age: 5,
    toys: ['rope', 'bone']
}

var {age: dogAge, name:dogName, toys: dogToys} = dog;
//console.log(dogName, dogAge, dogToys);
var {toys: [toy1, toy2]} = dog;
console.log(toy1, toy2);

let numbers = [[1, 2, 3], [4, 5, 6]];
let [[x, y, z], otherArray] = numbers;
console.log(x, y, z, otherArray);




