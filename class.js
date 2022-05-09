// class Color {
//     constructor(r = 0, g = 0, b = 0) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//     }

//     get rgb() {
//         return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
//     }

//     set rgb(value) {
//         let s = String(value);
//         let match = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i.exec(
//             s.replace(/\s/g, "")
//         );
//         if (!match) {
//             throw new Error("Invalid rgb color string '" + s + "'");
//         }
//         this.r = parseInt(match[1], 10);
//         this.g = parseInt(match[2], 10);
//         this.b = parseInt(match[3], 10);
//     }

//     toString() {
//         return this.rgb;
//     }

//     brightness() {
//         return Math.sqrt(
//             (this.r * this.r * 0.299) +
//             (this.g * this.g * 0.587) +
//             (this.b * this.b * 0.114)
//         );
//     }

//     static fromCSS(css) {
//         const match = /^#?([0-9a-f]{3}|[0-9a-f]{6});?$/i.exec(css);
//         if (!match) {
//             throw new Error("Invalid CSS code: " + css);
//         }
//         let vals = match[1];
//         if (vals.length === 3) {
//             vals = vals[0] + vals[0] + vals[1] + vals[1] + vals[2] + vals[2];
//         }
//         return new this(
//             parseInt(vals.substring(0, 2), 16),
//             parseInt(vals.substring(2, 4), 16),
//             parseInt(vals.substring(4, 6), 16)
//         );
//     }
// }

// class ColorWithAlpha extends Color {
//     constructor(r = 0, g = 0, b = 0, a = 1) {
//         super(r, g, b);
//         this.a = a;
//     }

//     brightness(bgColor) {
//         let result = super.brightness() * this.a;
//         if (bgColor && this.a !== 1) {
//             result = (result + (bgColor.brightness() * (1 - this.a))) / 2;
//         }
//         return result;
//     }

//     toString() {
//         return "rgba(" + this.r + ", " +
//                          this.g + ", " +
//                          this.b + ", " +
//                          this.a + ")";
//     }
// }

// const ca = ColorWithAlpha.fromCSS("#1E90FF");
// console.log(String(ca));                      // "rgba(30, 144, 255, 1)"
// console.log(ca.constructor.name);             // "ColorWithAlpha"
// console.log(ca instanceof ColorWithAlpha);    // true


// class Base {
//     constructor(data) {
//         this.data = data;
//     }

//     static get [Symbol.species]() {
//         return this;
//     }

//     static create(data) {
//         // Don't use Symbol.species
//         const ctor = this || Base;
//         return new ctor(data);
//     }

//     clone() {
//         // Uses `Symbol.speices'
//         const ctor = this && this.constructor &&
//                     this.constructor[Symbol.species] || base;
//                     return new ctor(this.data);
//     }
// }

// class Sub1 extends Base {

// }

// class Sub2 extends Base {
//     static get [Symbol.species]() {
//         return Base;
//     }
// }


// const a = Base.create(1);
// console.log(a.constructor.name);
// const aClone = a.clone();
// console.log(aClone.constructor.name);


// const b = Sub1.create(2);
// console.log(b.constructor.name);
// const bclone = b.clone();
// console.log(bclone.constructor.name);

// const c = Sub2.create(2);
// console.log(c.constructor.name);

// const d = new Sub2(4);
// console.log(d.constructor.name);
// console.log(d.data);


// const dclone = d.clone();
// console.log(dclone.constructor.name);
// console.log(dclone.data);

// const length = Symbol('length');
// class Train {
//     constructor() {
//         this[length] = 0;
//     }

//     add(car, contents) {
//         this[car] = contents;
//         this[length]++;
//     }
// }


// let ftrain = new Train();
// ftrain.add('rc', 'cattle');
// ftrain.add('fc', 'artifical parts');
// ftrain.add('tc', 'milk');
// ftrain.add('hc', 'coal');

// for (car in ftrain) {
//     console.log(car, ftrain[car]);
// }

const symb1 = Symbol("To find the length");
console.log(symb1);
console.log(symb1.toString());



