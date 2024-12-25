// Extracting String Characters

const dev = "devesh jangde";
//const rog = dev[1];
// const rog = dev.at(-6)
// const rog = dev.charAt(dev.length-3);
// const rog = dev.charCodeAt(4);
// const rog = dev.length
// console.log(rog);

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
const isLess = newIs.substr(-12)
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


