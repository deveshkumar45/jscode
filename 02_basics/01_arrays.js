// array

const myArr = [0,1,2,3,4,5,8,9]
const myHeros = ["shaktiman", "krish" , "Ra-one"]
const mySuperHeros = ["Super-man","Batman","Flash","wonderwooman","Aquaman"]
const myArr2 = new Array(1,3,43,5,54)

// console.log(myArr[4]);
// console.log(myHeros.push(10))

// Array methods

// console.log(myArr.push(12));
myArr.push(12)
myArr.pop()


myArr.unshift(99)
myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(6)); 
// console.log(myArr.indexOf(1));
// console.log( typeof myArr);

const newArr = myArr.join("-") //  returns an array as a string:
const newArr1 = myArr.toLocaleString()
// console.log(myArr);
console.log(  newArr1);

// slice & splice 

// console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
// console.log("C ", myArr);
// console.log(myn2);
// console.log(myArr);


