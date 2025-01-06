// const useremail = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const useremail =[0]

if (useremail) {
    console.log("Got user email");
}else{

    console.log("Don't have user email");
    
}
// falsy values
// false, null, NaN, Undefined, 0 , -0 , bigInt 0n, ""

// truthy values
// "0", "false", [], {}, " ", function(){}

if (useremail.length===0) {
    console.log("Array is empty"); 
}else{
    console.log("Array is not found:");
}

const emptObj = {}
if (Object.keys(emptObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator  (??) : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 40
// val1 = undefined ?? 599
val1 = null ?? 67 ?? 89


console.log(val1);

// Ternary Operator
// Condition ? true : false ;

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");