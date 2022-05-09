// function a() {
//     console.log('Bhuppal');
// }

// a.call();

// const wizard = {
//     name: 'Merlin',
//     health: 50,
//     heal(num1, num2) {
//         return this.health += num1 + num2;
//     }
// }

// const archer = {
//     name: 'Robin Hood',
//     health: 30
// }


// console.log(wizard.heal());
// console.log('1', archer);
// //wizard.heal.call(archer, 100, 200);
// //wizard.heal.apply(archer, [100, 200]);

// const healArcher = wizard.heal.bind(archer, 100, 30);

// healArcher();
// console.log('2', archer);


// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = function() {
//             console.log('b', this);
//         }
//         return anotherFunc.bind(this);
//     }
// }


// const arr = [1,5, 8, 2,3];

// function getMaxNumber(arr) {
//         return Math.max.apply(null, arr);
// }

// console.log(getMaxNumber(arr));

// function multiply(a, b) {
//     return a*b;
// }

// let multiplyByTwo = multiply.bind(this, 2);

// let multipleByTen  = multiply.bind(this, 10);
// console.log(multipleByTen(8));


// var b = {
//     name: 'Bob-b',
//     say() {console.log(this)}
// }

// var c = {
//     name:'Bob-c',
//     say() {return function() {console.log(this)}}
// }

// var d = {
//     name: 'Bob-d',
//     say() { return () => console.log(this)}
// }

// console.log(d.say()());


// const character = {
//     name: 'Simon',
//     getCharacter() {
//        return this.name;
//     }
// };

// const giveMeTheCharacterNow = character.getCharacter.bind(character);

// console.log('?',giveMeTheCharacterNow());

// Context Vs Scope
/*
Context offen referred how a function is invoked with the value of "this" keyword
Scope = Visibility of variables

*/

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = () => {
//             console.log('b', this)
//         }
//        return  anotherFunc.bind(this);
//     }
// }


// function a() {
//     return 5;   
// }

// a.hi = 'hihihi';

// console.log(a.hi);


// let arr = {0:9,1:10,2:12};

// console.log(typeof arr);
// console.log(Array.isArray(arr));


// var a = 10
// var b = a+10

// b++
// console.log(a)
// console.log(b)
// a++
// console.log(a)
// console.log(b)

// let obj1 = {name: 'Bhuppal', password: '123'};
// let obj2 = obj1;

// obj2.password = 'temp';

// console.log(obj1, obj2);

// var c = [1,2,3,4,5,6];
// var d = c;
// d.push(123);
// console.log(c, d);

// var arr


// let obj1 = {a:'a', b:'b', c:'c'};
// let obj2 = Object.assign({}, obj1);
// obj1.a = 'j';
// console.log(obj1);
// console.log(obj2);

// let obj1 = {a:'a', b:'b', c:{deep: 'deep copy'} }
// let clone = Object.assign({}, obj1)
// let superClone = JSON.parse(JSON.stringify(obj1));
// obj1.c.deep = 'apple';
// console.log(obj1, clone);


// const number = 100
// const string = "Jay"
// let obj1 = {
//   value: "a"
// }
// let obj2 = {
//   value: "b"
// }
// let obj3 = obj2;
 
// function change(number, string, obj1, obj2) {
//     number = 99
//     console.log('1',number)

//     // number = number * 10;
//     // string = "Pete";
//     // obj1 = obj2;
//     // obj2.value = "c";
// }
 
// change(number, string, obj1, obj2);
 
// //Guess the outputs here before you run the code: 
// console.log(number); 
// console.log(string);
// console.log(obj1.value);


//console.log('1' === 1);


//console.log(Object.is(NaN,NaN));


//console.log(false == "");//false == ""
//console.log(false == []);//false == []
//console.log(false == {});//false == {}
//console.log("" == 0);
// console.log("" == []);    
// console.log("" == {});   
// console.log(0 == []);   
// console.log(0 == {});    
// console.log(0 == null);   


// const four = new Function('num','return num')
// console.log(four(4));

// function letAdamLogin() {
//     let array = [];
//     for (let i=0; i<10000; i++) {
//         array.push(i);
//     }
//     console.log('Access');
//     return 'Access Granted to Adam'
// }

//letAdamLogin()

// const giveAccessTo = (user) => 'Access Granted to ' + user;

// function Authenticate(number) {
//     let arr = [];
//     for (i=0; i<number; i++) {
//         arr.push(i);
//     }
//     return true;
// }

// function LetPerson(person, fn) {
//     if (person.Level === "Admin") {
//         fn(50000);
//     } else if (person.Level === "User") {
//         fn(10000);
//     }

//     return giveAccessTo(person.name);
// }

// person = {name: 'Tim', Level: 'User'}
// console.log(LetPerson(person, Authenticate));

// const multiplyBy = (num1) => (num2) => num1 * num2;

// const multiplyByTwo = multiplyBy(2);

// console.log(multiplyByTwo(8));


// function a() {
//     let grandpa = 'grandma';
//     return function b() {
//         let father = 'father';
//         return function c() {
//             let son = 'son';
//             return `${grandpa} + ${father} + ${son}`;
//         }
//     }
// }

// console.log(a()()());

// Memory efficient
// function HeavyDuty(index) {
//     const bigArray = new Array(7000).fill('a');
//     return bigArray[index];
// }

// function HeavyDuty2() {
//     const bigArray = new Array(7000).fill('a');
//     return function(index) {
//         return bigArray[index];
//     }
// }


// const getHeavyDuty = HeavyDuty2();
// console.log(getHeavyDuty(22));
// console.log(getHeavyDuty(22));

//console.log(HeavyDuty(400));


// Encapsulation
// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = () => timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1;
//         'Bah!!';
//     }
//     setInterval(passTime, 1000);
//     return {
//         launch,
//         totalPeaceTime: totalPeaceTime
//     }
// }

// const ohno = makeNuclearButton();
// ohno.totalPeaceTime();



// let view;
// function initialize() {
//     let called = 0
//     return function() {
//         if (called>0) {
//             return;
//         } else {
//             view = 'Bah!';
//             called++;
//             console.log('View has been set!');
//         }
//     }

// }

// const startOnce = initialize();
// startOnce();
// startOnce();
// startOnce();
// console.log(view);


// const array = [1,2, 3, 4];

// for (var i=0; i< array.length; i++) {
//     (function(j){
//         setTimeout(function() {
//             console.log('I am at index' + array[j]);
//         }, 3000);
//     })(i);
// }


// let dragon = {
//     name: 'Tanya',
//     fire: true,
//     fight() {
//         return 5
//     },
//     sing() {
//         if (this.fire) {
//         return `I am ${this.name}, the breather of fire`;
//         }
//     }
// }
// let lizard = {
//     name: 'Kiki',
//     fight() {
//         return 1
//     }
// }

//const singingLizard = dragon.sing.bind(lizard);
//console.log(singingLizard());


// lizard.__proto__ = dragon 

// //console.log(lizard.fight());
// //console.log(lizard.sing());
// //console.log(dragon.__proto__)

// for (let prop in lizard) {
//     if (lizard.hasOwnProperty(prop)) {
//         console.log(prop)
//     }
// }

//const obj = {name:'Sally'}

//console.log(obj.hasOwnProperty('name'));


// let human = {
//     mortal: true 
// }

// let socratis = Object.create(human);
// socratis.age = 10;
// console.log(socratis)


// const d = new Date('1900-10-10');
// console.log(d)

// Date.prototype.lastYear = function() {
//     return this.getFullYear() - 1
// }

// const myDate = new Date('1900-10-10').lastYear()
// console.log(myDate);



// Array.prototype.map = function() {
//     let arr = [];
//     for (i=0; i<this.length; i++) {
//        arr.push(this[i] + " Blah!");
//     }
//     return arr
// }
// const arr = [10, 20, 30, 40, 50, 60 ];
// const r = arr.map(x => x * 2);
// console.log(r);


// ++++++++
