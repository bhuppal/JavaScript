/*
let characters = ['a','e','i','o','u'];

let strValue = 'eiobzxciipbiox';

const findVowels = (source) => {
    let m = source.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}
let r = findVowels(strValue);
//console.log("Total count of vowels:" + r);


let result1 = {};
let index = -1;
let result = strValue.split('').reduce(function(previous, char){
        if(characters.includes(char)) {
            result1 = char
            previous++            
        }
        return previous;
},0);

//console.log(result1);
*/
/*

let numbers = [1];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

//console.log(sum);

sum = numbers.reduce(function(accumulator, current) {
    console.log('d');
    console.log("accumulator:" + accumulator + " current:" + current);
    //console.log(current);
    return accumulator + current;
});

//console.log(sum);


let shoppingCart= [
    {
        product: "iPhone",
        qty: 1,
        price: 100
    },
    {
        product: "Samsung",
        qty: 3,
        price: 200
    },
    {
        product: "Meio",
        qty: 4,
        price: 300
    }
];

let result1 = shoppingCart.reduce(function(accumulator, current) {
  return accumulator + current.price;
}, 0)

//console.log(result1);
*/



// Array Helper methods
/*
let colors = ["Red", "Green", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


let fruits = ["Apple", "Orange", "Graphes"];

for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

colors.forEach((item) => {
    console.log(item);
})


let numbers = [1,2,3,4,5,6,7,8,9,10];
let sumResult = 0;

const adder = (number) => {
    sumResult += number;
}

numbers.forEach((number) => {
    sumResult += number;
});

numbers.forEach(adder);

console.log(sumResult);

console.log('new...');
*/
/*
var numbers = [1,2,3];
var doubleNumbers= [];

var result = numbers.map((number, index) => {
    return number*2;
});
console.log(result);
*/
/*
let cars = [
    {model: 'Buick', price:'Cheap'},
    {model:'Camaro', price:'expensive'}
];

var result = cars.map((car) => {
    return car.model + " --- " + car.price;
});

console.log(result);
*/
/*
let products = [
    {name: 'Cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10, price: 15},
    {name: 'celery', type: 'vegetable', quantity: 30, price: 13},
    {name: 'orange', type: 'fruit', quantity: 3, price: 5}
];

var filteredProducts = [];

for(let i = 0; i<products.length; i++) {
    if(products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
};

console.log(filteredProducts);


console.log(products.filter((item) => {
    return item.type === 'vegetable' 
    && item.quantity > 0 
    && item.price < 10;
}));





let users = [
    {name: 'Jill'},
    {
        name: 'Alex'
    },
    {
        name: 'Bill'
    },
    {
        name: 'Alex'
    }
];


var findUser = users.find((eachItem) => {
        return eachItem.name === 'Alex';
});

console.log(findUser);
*/

// Every
/*
let computers = [
    { name: 'Apple', ram:24 },
    { name: 'Compaq', ram: 44},
    { name: 'Acer', ram: 32 }
];

let result = computers.filter((item) => {
    return item.ram > 16;
});

console.log(result);

let AllcomputersCanRunProgram = true;
let onlySomeComputersCanRunProgram = false;

console.log(computers.every((item) => {
    return item.ram > 16;
}));

console.log(computers.some((item) => {
    return item.ram > 16;
}));
*/
/*
// Reduce array helper
var numbers = [10, 20, 30 ];
var sum = 0;

let result = numbers.reduce((sum, number) => {
    console.log(number);
    return sum + number;
}, 0);

console.log(result)


let characters = ['a','e','i','o','u'];

let strValue = 'aeiobzxcpbox';

const re = strValue.split('').reduce((accum, char) =>{
        if (characters.includes(char)) {
            accum++
        }
        return accum;
},0);

console.log(re);

*/
/*
let primaryColors = [
    {color: "Red"},
    {color: "Blue"},
    {color: "Green"}
];


console.log(primaryColors.reduce((accum, item) => {
        accum.push(item.color);
        return accum;
}, []))
*/
/*
let str = "((()))))))";

let result = str.split('').reduce(function (p, char) {
   
      

        if (char === '(') {
           return  ++p;
        } 
        
        if (char === ')') {
            return --p;
        }
        return p;
}, 0);

console.log(result);
console.log(result === 0 ? "Balanced" : "Unbalaced");

let characters = ['a','e','i','o','u'];

let strValue = 'aeiobzxcpbox';

const re = strValue.split('').reduce((accum, char) =>{
        if (characters.includes(char)) {
            ++accum;
        }
        return accum;
},0);

console.log(re);
*/
/*
console.log(`Today date is ${new Date().getFullYear()}`);


const add = (a,b) => a + b;
console.log(add(23, 43));


const d = s => `p ${s} `;
console.log(d('ksdf'));
*/
/*
const numbers = [9, 23, 23, 32, 42];

const result = numbers.map(num => 2 * num);
console.log(result);
*/
/*
const team = {
    members: ["James", "Anna"],
    teamName: ["BlueJays"],
    teamSummary: function() {
        //teamName = this.teamName;
        return this.members.map( member => {
            return `${member} is on ${this.teamName}`
        });
    }
};
// Where you're placing the 
console.log(team.teamSummary());

*/

/*
const company = {
    employees: ["Alan", "Bill"],
    department: ["Sales"],
    EmpDeptSummary: function() {
        return this.employees.map(emp => {
            return `${emp} is belong to ${this.department}`
        })
    }
};

console.log(company.EmpDeptSummary());
*/

// Fn = Fn(n -1) + Fn(n -2);

//0 1 1 2 3 5 8 13 21 34 55 89 
/*
const fibonacci = n => {
    if ( n === 1) return 0;
    if (n ===2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));

*/
/*
// 0 1 1 2 3 5 8 
const fibonacci = (n) => {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));

*/

/*
function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price , 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    {title: "Harry Potter", price: 10},
    {title: "Eloquent JavaScript", price: 15}
];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));
*/
/*
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(`${url} and verb method is ${method}`);
    return method;
};

const result = makeAjaxRequest("http://www.google.com", undefined);
console.log(result);

//console.log(`${URL}`);
*/
/*
function user(id) {
    this.id = id;
    return this.id;
}

let u1 = new user(1);

console.log(u1);
*/
/*
// Rest and Spread
const countNumbersInRange = (...numbers) => {
    return numbers.reduce((accum, current) => {
        return accum+current;
    },0);
}

console.log(countNumbersInRange(1,2,3,4,5,6));

let num = [4,5,6];
const [a,b,c] = (num);
console.log(a,b,c);

const defaultColor = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

const r = defaultColor.concat(userFavoriteColors);
console.log(r);


console.log(['blue',...defaultColor, ...userFavoriteColors]);

const validateShoppingList = (...items) => {
    if(items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

console.log(validateShoppingList('oranges', 'milk', 'bread', 'eggs'));
*/
/*
const mathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiple method instead');
        return multiple(...rest);
    },
    multiple(a, b) {
        return a * b;
    }
};
*/

/*
let expenses = {
    type: 'Business',
    amount: '$45 USD',
};

let {type, amount} = expenses;
console.log(type, amount);

let companies =[
    'Google',
    'Facebook',
    'Uber'
];
const [name, name2, ...rest] = companies;
console.log(name, name2, rest);

 companies =[
    {Name:'Google', location: 'Mountain View' },
    {Name:'Facebook', location: 'Menlo Park' },
    {Name:'Uber', location: 'San Francisco' }
];

const [{location}] = companies;
console.log(location);


const Google = {
    locations: ['Mountain View', 'New York', 'London' ]
};

const { locations: [location] } = Google
console.log(location);
*/
/*
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

const r = points.map((x, y) => {
    return { x, y };
});

console.log(r);
*/
/*
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    console.log('Driving..');
}

const car = new Car({title: 'Focus'});
//console.log(car);
console.log(car.drive());

*/

/*
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return 'vroom';
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'honk';
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
console.log(toyota.drive());
*/

/*
class Car {
    constructor(options) {
        this.title = options.title;
    }

    drive() {
        return 'Daily Driver';
    }
}

class Toyota extends Car {
    constructor(option) {
        super(option);
        this.color = option.color;
    }

    honk() {
        return 'Beep';
    }
}

const t = new Toyota({color:'Red', title:'Daily Driver'});
console.log(t.honk(), t.drive())



//Generators
let colors = ['Red', 'Orange', 'Green'];

for (let color in colors) {
//    console.log(color)
}
*/
/*
function* shopping() {
    // stuff on the sidewalk

    //Walking down the sidewalk

    //go into the store with cash
    const stuffFromStore = yield 'cash';
console.log(stuffFromStore + ".....");
    //Walking back home
    return stuffFromStore;
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // Leaving our house
//Walked into the store
// Walking up and down the aishles..
//Purchased our stuff
console.log(gen.next('groceries')); // Leacing the store with groceries



function *Shopping() {

    const stuffFromStore = yield 'cash';

    const cleanClothes = yield 'laundry';

    return [stuffFromStore, cleanClothes];
}

const gen = Shopping();
console.log(gen.next());
console.log(gen.next('groceries'));
console.log(gen.next('clean clos'));

*/

function* colors() {
   yield 'red';
   yield 'green';
   yield 'blue';
   yield 'black';
   yield 'white';
   // return [r1, r2, r3, r4];
}
/*
const gen = colors();
console.log(gen.next('purple'));
console.log(gen.next('red'));
console.log(gen.next('blue'));
console.log(gen.next('green'));
console.log(gen.next('orange'));
*/
/*
const myColors = [];
for (let color of colors()) {
    myColors.push(color);
};
*/
/*
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
}
const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};
/*
function* testerTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}
*/
/*
function* teamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
  //  const testingTeamGenerator = testerTeamIterator(team.testingTeam);
    yield* testingTeam;
}

const names = [];
for( let name of engineeringTeam) {
    names.push(name);
}

console.log(names);

*/
/*
class Comment {
    constructor(content, childern) {
        this.content = content;
        this.childern = childern;
    }

    *[Symbol.iterator]() {
        yield this.content;
        for(let child of this.childern) {
            yield* child;
        }
    }
}

const childern = [
    new Comment('Good comment', []),
    new Comment('Bad comment', []),
    new Comment('nothing', [])
];

const tree = new Comment('Great post!', childern);
console.log(tree);

const values = [];
for (let value of tree) {
    values.push(value);
}
console.log(values);
*/
/*
let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

//console.log(ar.some((element) => element === 50));
let pairCount = 0;

const r = ar.reduce( function (accum, current)  {
        if(!accum.hasOwnProperty(current)) {
            accum[ar[current]] = ar[current];
            return accum;
        } else {
            pairCount++;
            delete accum[ar[current]];
            return accum;
        }
},{})

console.log(pairCount);

function sockMerchant(n, ar) {
    let pairsCount = 0;
    let pairs = {};
  for (let i = 0; i < n; i++) {
    if(!pairs.hasOwnProperty(ar[i])) {
        pairs[ar[i]] = ar[i];
    } else {
        pairsCount++;
        delete pairs[ar[i]];
    }
}
return pairsCount;
}

//console.log(sockMerchant(n, ar));

/*
   if (pairs.find(ar[i])) {
        pairs++;
        delete ones[ar[i]];
    } else {
        ones[ar[i]] = 0;
    }*/
 
/*
    var x = 'x';

    function findName() {
        console.log(x);
        var b = 'b';
        return printName();
    }
*/
//function lexical environment

/*
function sayMyName() {
    let a = 'a';
    return function findName() {
        let b = 'b';
        return function printName() {
            let c = 'c';
            console.log(a,b,c);
            console.log('Bhuppal');
            return 'Bhuppal';
        }
    }
};

sayMyName()()()

*/

//function scope Vs Block scope
/*
if(5>4) {
    var secret = '123';
}

//console.log(secret);

function loop() {
    for(let i =0; i<5; i++) {
        console.log(i);
    }
    console.log('final', i);
}

loop()
*/

//IIFE - 
/*
(function() {
    console.log('Hi');
})();
*/

//Memory Efficient
/*
const closure_Example1 = (index) => {
    const myArr  = new Array(7000).fill('😊');
    console.log('Array created!!!');
    return  myArr[index];
} 

const closure_Example2 = () => {
    const myArr  = new Array(7000).fill('😊');
    console.log('Array created!!!');
    return function(index) {
        return myArr[index];
    }
 } 



 const closure_Example2 = () => () => {
    const myArr  = new Array(7000).fill('😊');
    console.log('Array created!!!');
    return function(index) {
        return myArr[index];
    }
 } 
 const myClosure1 = closure_Example1;

 console.log(myClosure1(300));
 console.log(myClosure1(400));

 const myClosure2 = closure_Example2();

 console.log(myClosure2(200));
 console.log(myClosure2(400));
 */
/*
 const employee_obj = () => {
     let firstName = 'Bhuppal';
     let lastName = 'Kumar';
     let gender = 'M';

    return {
        firstName,
        lastName
    }
 }
const myEmp = employee_obj();
console.log(myEmp.firstName);
*/
/*
let view 

function initialize() {
    view ='🎁';
    console.log('View has been set!');
}

const init = () => {
    let called = 0;
    return function () {
    if(called > 0) {
        return;
    } else {
        view ='🎁';
        called++;
        console.log('View has been set!');
        }
    }
}

initialize();
initialize();
initialize();
console.log(view);

const d = init();
d();
d();
d();
console.log(view);
*/
/*
const arr= [1,2,3,4];
for(var i=0; i<arr.length; i++) {
    (function(i) {setTimeout(function() {
        console.log('Im at index' + i)
    }, 3000)
    })(i)
}
*/
/*

let queries = [
    [1, 3],
    [1, 3],
    [2, 3],
    [3, 2],
    [1, 4],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
    [3, 2],
    ];

    const func = arr => {
        const result = [];
        const hash = {};
        const freq = [];
      
        for (let i = 0; i < arr.length; i += 1) {
          const [action, value] = arr[i];
          const initValue = hash[value] || 0;
      
          if (action === 1) {
            hash[value] = initValue + 1;
           
            freq[initValue - 1] = (freq[initValue] || 0) - 1;
            freq[initValue] += 1;
          }
      
          if (action === 2 && initValue > 0) {
            hash[value] = initValue - 1;
            freq[initValue -1] += 1;
            frq[initValue] -= 1;
          }      
          if (action === 3) {
                result.push(freq[value] > 0 ? 1 : 0);
            }
           // console.log(`${JSON.stringify(freq)} -- ${initValue} -- ${JSON.stringify(hash)}  -- ${hash[value]}`);
        }      
        return result;
      };

  console.log(func(queries));

  


  function twoStrings(s1, s2) {
    // Write your code here
    
        let map = {};
        for(let x of s1) {
            map[x] = x;
        }
        console.log(JSON.stringify(map));
        for(let y of s2) {
            if(map[y] === y) return 'YES';       
        }
        
    return 'NO';
}

//console.log(twoStrings("hackerrankcommunity", "cdecdecdecde"));
*/
/*
let l = "adfgt";

function getLetter(s) {    
    let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0]) :
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    };
    return letter;    
}

//console.log(getLetter(l));
 

let s = "javascriptloops";
let vowels = [];
let nonvowels = [];

for(const c of s) {
    if('aeiou'.includes(c)) {
        vowels.push(c);
    } else {
        nonvowels.push(c);
    }
}

//console.log(vowels.concat(nonvowels));
for(let s of vowels.concat(nonvowels)) {
  //  console.log(s);
}
let t = [2,3,6,6,5];
//console.log(Math.max(...t));

let s = Number("abc");
try {
    let arr = s.split('');
    for(let i = arr.length-1; i >= 0  ; i--) {
        console.log(arr[i]);
    }
}catch(e) {
    console.log("s.split is not a function");
}
finally{
    console.log(s);
}
*/
/*
const a = 5;
const b = 4;

const rectableObj = object.create({},
    a,
    b,
    (a+a+b+b),
    (a*b)
);

console.log(rectableObj);

*/
/*
let dayName;
// Write your code here
let myDate = new Date("10/12/2009");
let weekDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(myDate.toLocaleDateString('en-US', {weekday: 'long'}));
console.log(weekDayName[myDate.getDay()]);
*/
/*

const arr = [102, 1948948, 1.3, 4.5];
 for(let r of arr) {
    if(r.(new RegExp('\\d+', 'g'))) {
        console.log(r);
    } else {
        console.log('d');
    }
}
*/
/*
const removeEvenNumbers = (nums) => {
    return nums.filter((item) => {
        if(item % 2 !== 0) 
        {
            return item;
        }
    })
};

console.log(removeEvenNumbers([3,2,41,3,34]));
*/



let str = "[(){]";


const checkBalanceBracket = (str) => {
    let arr = [];
    const open = {
        '{':'}',
        '[':']',
        '(':')'
    };
    
    const closed = {
        '}':true,
        ']':true,
        ')':true
    };
for(let s of str) {
    //console.log(s);
    if(open[s])  {
        arr.push(open[s]); 
    } else if(closed[s] && arr[arr.length-1] === s) {
        arr.pop();
        
    } else {
        return "NO"
    }
}
return arr.length === 0 ? "YES" : "NO";
}

console.log(checkBalanceBracket(str));
