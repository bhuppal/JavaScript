function Person(name) {
    this.name = name;
}

/*
Person.prototype.sayNameTimed = function() {
    var self = this;
    setTimeout(function() {
        console.log(`My name is ${self.name}`);
    })
}
*/

/*
Person.prototype.sayNameTimed = function(){
    setTimeout(function(){
        console.log(`My name is ${this.name}`)
    }.bind(this), 1000);
};
*/

Person.prototype.sayNameTimed = function() {
    setTimeout(() => {
        console.log(`My name is ${this.name}`);
    }, 1000);
}

var p1 = new Person('Sean');
p1.sayNameTimed();