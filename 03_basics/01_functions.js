
function sayMyName(){

    console.log("D");
    console.log("e");
    console.log("v");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumber (number1,number2){
//     console.log(number1 + number2);
// }


     function addTwoNumber (number1,number2){
    
    //      let result = number1 + number2
    //   return result
    return number1 + number2
 }
const result = addTwoNumber(4, 5)
// console.log(`result: ${addTwoNumber(4 , 5)}`);

//  console.log("result:", result);

function loginUserMassage (username = "Dev" ){
    if(username === undefined)
    {
        console.log("please enter a useraname")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("Devesh"));
// console.log(loginUserMassage());




function calculateCarPrice(value, value1, ...num1){ // rest & spread operator
    //  console.log(num1);
    return num1
     
}
// console.log(calculateCarPrice(300, 200 , 100 , 2000, 400 , 500));


const user = {
    username: "devesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "Yogesh",
    price: 188
})


const myNewArray = [223, 333, 200, 500]

function returnSecondValue (getArray){
        return getArray[2]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 600, 300, 400, 500]));