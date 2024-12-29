// constructor

// const tinderUser = new Object() // singleton
const tinderUser = {} // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Aman"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"somprakash24@google.com",
    fullname:{
        userFullName: {
        firstname: "Devesh",
        lastname: "Jangde"
    }

    }
}
// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "D@gmail.com"
    },
    {
        id: 2,
        email: "A@gmail.com"
    },
    {
        id: 3,
        email: "Y@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged")); 

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh choudhary"
}

const {courseInstructor: instructor} = course // de-structuring 
console.log(instructor);


// {
//     "name": "Devesh",
//     "courseName": "js in hindi",
//     "price": "free"
// }

