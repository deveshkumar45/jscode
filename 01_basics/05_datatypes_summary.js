// primitive 

//  7 types : String , Number , Boolean ,
//  Null , Undefined , Symbol , BigInt
let strName = "Devesh"
// String => string

const score = 100
const scoreValue =100.3
// number => number

const isLoggedIn = false
const isLoggedOut = true
// Boolean => boolean

const outSideTemp = null
// null => Object

let userEmail;
let userMail = undefined
// undefined => undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// Symbol => Symbol

const bigNumber  = 21646294628426556156612n
// bigint => bigInt

// Reference (Non-primitive)

// Arrays , Objects , Functions 

const heros = ["shaktiman" , "Krish" , 
    "super-man "];
// Arrys => Object

 let myObj = {
     name: "devesh" ,
    age: 18,
}  // Object => Object

const myFunction = function(){
    console.log("Hello World");
} // function >= function

console.log( typeof strName);

