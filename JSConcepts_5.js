'use strict'
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function(x) {
    console.log('My name is ' + this.name);
    console.log(x);
}


var p1 = new Person('Joe', 25);
var p2 = new Person('Tim', 25);
console.log(p1.name);
p1.sayName();

var sayName = p1.sayName

sayName.call(p1);
sayName.call(p2);
sayName.call( {name:'Fish'});

sayName.call(p1, 'hello');

sayName.apply(p1, ['hello']);

var boundSayName = sayName.bind(p1, 'World!!!');
boundSayName();