const user = {
    username: "Devesh",
    price: 199,
                                        // current context - this
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Devendra"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     const user = "devesh"
//     console.log(this);
// }
// chai()

// const chai = function (){
//     const user = "devesh"
//     console.log(this.user);
// }
// chai()


const chai = () => {
    const user = "devesh"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {     // explisite return
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2  /// implisite return

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) =>( {username: "Devesh"})


console.log(addTwo(4,5))