// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Devesh" ,
    "full name": "Devesh Jangde",
    [mySym]: "mykey1",
    age: 18,
    location: "bilaspur", 
    email: "devesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])


jsUser.email = "devesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "devesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");  
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);  
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


