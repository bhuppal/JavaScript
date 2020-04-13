class Person {
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }
}

var p1 = new Person('Bhuppal Kumar');
p1.sayName();

console.log(p1.__proto__ === Person.prototype);

console.log(p1.sayName === Person.prototype.sayName);


var sayName = p1.sayName.bind(p1);
sayName();

