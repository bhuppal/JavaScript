// var obj = {
//     rex: /\d/,
//     checkArray: function(array) {
//         return array.some(entry => this.rex.test(entry));
//     }
// };
// console.log(obj.checkArray(["no", "digits", "in", "this", "array"])); // false
// console.log(obj.checkArray(["this", "array", "has", "1", "digit"]));  // true


// var obj = {
//     rex: /\d/,
//     checkArray: function(array) {
//         return array.some(entry => this.rex.test(entry));
//     }
// };

// console.log(obj.checkArray(["no", "digits", "in", "this", "array"])); // false
// console.log(obj.checkArray(["this", "array", "has", "1", "digit"])); // true

// let x = 2;
// x += 40;
// console.log(x);

// let y;
// console.log(y);

// const value = Math.random();
// console.log(value);

// console.log(value < 0.5 ? "Heads" : "Tail");


// function jumpout() {
//     var a = [1, 2, 3];
//     for (let i = 0; i<a.length; i++) {
//         let value = a[i];
//         console.log(value);
//     }
//     console.log("Outside loop "  ); 
// }
// jumpout();

// function example() {
//     console.log(answer);
//     answer = 42;
//     console.log(answer);
//     var answer = 67;
// }
// example();


// let answer;

// function hoisting() {
//     let answer;
//     answer = 42;
//     console.log(answer);
//     //let answer;
// }
// hoisting();



// function temporalExample() {
//     const f = () => {
//         console.log(value);
//     };
    
   
//     let value = 4232;
//     f();
// }
// temporalExample();




// function blockExample(str) {
//     let p = "prefix";
//     if (str) {
        
//         p = p.toUpperCase();
//         str = str.toUpperCase();
//         p = str.indexOf("x");
//         if (p != -1) {
//             str = str.substring(0, p);
//         }
//     }
//     return p + str;
// }

// console.log(blockExample("bhuppal"));




// var answer = 42;
// console.log("answer == " + answer);
// console.log("this.answer == " + this.answer);
// console.log("has property? " + ("answer" in this));



// const obj = {
//     value: "Before"
// }

// console.log(obj);

// obj.value = "After"
// console.log(obj);


// Date.prototype.lastYear = function() {
//     return this.getFullYear() -1 
// }

// console.log(new Date('1989-10-10').lastYear())

// function anotherBlockExample(str) {
//     if(str) {
//         let index = str.indexOf("p");
//         if (index != -1) {
//             str = str.substring(0, index);
//         }
//         return str;
//     }
// }

// console.log(anotherBlockExample("akujpple"));


// function closuresInLoopsProblem() {
//     for(let counter = 1; counter <= 3; ++counter) {
//       (function(value){
//         setTimeout(function(){
//             console.log(value);
//         }, 10);
//       })(counter)
      
       
//     }
// }

// closuresInLoopsProblem()


// const array = [42, 67, 3, 23, 14];
// const filter = array.filter((arr) => arr < 30);
// console.log(filter);

// array.sort((a, b) => a - b);
// console.log(array);


// setTimeout(() => console.log("timer fired"), 200);

// const a = ["Joe", "Mohammed", "Maria"]
// const b = a.map((name) => ({name:name}))
// console.log(b);

// var x = 100
// function example(value = x) {
//     var x = 42;
//     console.log(value);
// }
// example();

// function extend(target, ...sources) {
//     sources.forEach(source => {
//         Object.keys(source).forEach(key => {
//             target[key] = source[key];
//         });
//     });
//     return target;
// }

// const obj = extend({}, {a:1}, {b:2});
// console.log(obj);

// function two(a,b) {

// }
// console.log(two.length);


// let arr = ["apple", "orange", "banan", "grapes"]

// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.push("mango");
// console.log(arr);

// newArr = arr.concat(["wer", "wqer", "qer"]);
// console.log(newArr);


// let user = {
//     name: "Bhuppal",
//     age: 34,
//     hobby: "Soccer",
//     isMarried: true,
// }

// console.log(user.name);

// user.favoriteFood = "Spinach";
// console.log(user["name"]);

// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`Attack with ` + this.weapon);
//     }
// }

// const peter = new Elf('Peter', 'Stones');
// peter.attack();

// const sam = new Elf('Sam', 'fire');
// sam.attack();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person('Xavier', 55);
// console.log(person1);


// Implicit binding
// const person = {
//     name: 'Karen',
//     age: 40,
//     hi() {
//         console.log('hi' + this.name);
//     }
// }


// Explicit binding
// const person3 = {
//     name: 'Karen',
//     age: 40,
//     hi: function() {
//         console.log('hi' + this.setTimeout)
//     }.bind(window)
// }

//person3.hi();

// arrow function
// const person4 = {
//     name: 'Karan',
//     age: 40,
//     hi: function() {
//         var inner = () => {
//             console.log('hi' + this.name)
//         }
//         return inner();
//     }
// }

// person4.hi();


// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         console.log(`Attack wtih ${this.weapon}`);
//     }
// }

// class Elf extends Character {
//     constructor(name, weapon, type) {
//         super(name, weapon);
//         //console.log(this);
//         this.type = type;
//     }
// }

// class Ogre extends Character {
//     constructor(name, weapon, color) {
//         super(name, weapon);
//         this.color = color;
//     }

//     makeFort() {
//         console.log(`Strongest fort in the world made.`);
//     }
// }


// const dolby = new Elf('Dolby', 'Cloth', 'House');
// dolby.attack();

// const shrek = new Ogre('Shrek', 'club', 'green');
// shrek.makeFort();

class Color { 
    constructor(r = 0, g = 0, b = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    get rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    set rgb(value) {
        let s  = String(value);
        let match = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i.exec(s.replace(/\s/g, ""));        
        if (!match) {
            throw new Error("Invalid rgb color string '" + s + "'");
        }
        this.r = parseInt(match[1], 10);
        this.g = parseInt(match[2], 10);
        this.b = parseInt(match[3], 10);
    }

    toString() {
        return this.rgb;
    }

    static fromCSS(css) {
        const match = /^#?([0-9a-f]{3}|[0-9a-f]{6});?$/i.exec(css);
        if (!match) {
            throw new Error("Invalid CSS code: " + css);
        }

        let vals = match[1];
        if (vals.length === 3) {
            vals = vals[0] + vals[0] + vals[1] + vals[1] + vals[2] + vals[2];
        }
        return new this(
            parseInt(vals.substring(0,2), 16),
            parseInt(vals.substring(2,4), 16),
            parseInt(vals.substring(4, 6), 16)
        );
    }
}


class ColorWithAlpha extends Color {

}

let c = new Color(30, 144, 255);
console.log(c.rgb);
c.rgb = "rgb(24,123,123)"
console.log(c.r);
console.log(c.g);
console.log(c.b);

console.log(c.rgb);

c = Color.fromCSS("00A");
console.log(String(c));