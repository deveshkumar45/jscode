// Extracting String Characters

const dev = "devesh jangde";
//const rol = dev[1];
// const rol = dev.at(-6)
// const rol = dev.charAt(dev.length-3);
// const rol = dev.charCodeAt(4);
// const rol = dev.length
// console.log(rol);

// String Length;
 
let row = "charlie wilson"
let length = row.length;
// console.log(length)

// Extracting String Parts

const newIs = "mango, papaya, apple, orange"
// const isLess = newIs.slice(7,20)
// const isLess = newIs.slice(7)
// const isLess = newIs.slice(-6)
// const isLess = newIs.slice(-13,-8)
// ++++++
// const isLess = newIs.substring(7,20)
// const Is = newIs.length
const isLess = newIs.substr(5,11)
// console.log(isLess);

// Converting to Upper and Lower Case:

const str = "Hitesh Choudhary"
// const str1 = str.toUpperCase()
const str1 = str.toLowerCase()
// console.log(str1);

//  String trim()

let text1 = "   Hello World  "
// console.log(text1.trim());
// console.log(text1.trimEnd());
// console.log(text1.trimStart());

//string padding
//     Note
// The padEnd() method is a string method.
// To pad a number, convert the number to a string first.
// See the example below.
const leg = 5;
// console.log(leg.padStart(6,4))
const leg1 = leg.toString();
// console.log(leg1.padEnd(6,4))

// String repeat()

let text = "Hello Devesh "
let result = text.repeat(2)
// console.log(result);


// Replacing String Content

let text2 = "i could speak english"
//let result1 = text2.replace(/ENGLISH/i, "hindi"); //  use a regular expression with an /i flag (insensitive):
let result1 = text2.replace("english","Hindi");
// console.log(result1);

// use a regular expression with a /g flag (global match):

const ren = "Please visit Microsoft & Microsoft !"
// const rell = ren.replace(/Microsoft/g, "Ws3cube");
const rell = ren.replaceAll("Microsoft", "Ws3cube");
// console.log(rell);

// JavaScript String split()
const spell = "devesh abhinay yogesh dushyant chandni shivani"
const myArr = spell.split(" "); // commas, spaces, pipe
// console.log(myArr);

// let text4 = `We are the so-called "Vikings" from the north.`;
// let text4 = "We are the so-called \"Vikings\" from the north.";
// let text4= 'It\'s alright.';
let text4 = "The character \\ is called backslash.";
// console.log(text4);

let nameIs = "devesh"
let nameIs1 = new String("devesh")
// console.log( typeof nameIs1);

//JavaScript String includes()

let strong = "devesh and aman was best friends."
// console.log(strong.includes("devesh"));
let textile = "Hello world, welcome to the universe.";
console.log(textile.startsWith("Hel"));