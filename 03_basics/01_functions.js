
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
    
    // let result = number1 + number2
    // return result
    return number1 + number2
 }
const result = addTwoNumber(4 , 5)
// console.log("result:", result);

function loginUserMassage (username = "dev"){
    if(!username){
        console.log("please enter a useraname")
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMassage("Devesh"));
console.log(loginUserMassage());
