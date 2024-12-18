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

// console.log( typeof strName);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++


// Stack (Primiteve), Heap (Non-Primitive)

let myYouTubeName = "Codebhaiyadotcom";
let  anotherName = myYouTubeName;
anotherName = "abhinaybhaiya.com";

// console.log(myYouTubeName);
// console.log(anotherName)


let userOne = {
    email:  "devesh@google.com",
    upi: "dev@ybl"

} 

let userTwo = userOne 

userTwo.email  = "dev@gmial.com"
userTwo.upi = "rajWgmai.com";

console.log(userOne.email);
console.log(userTwo.email);
console.log(userTwo.upi);
console.log(userOne.upi);


