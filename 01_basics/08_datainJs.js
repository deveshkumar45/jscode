// Dates

let myDate = new Date()
// // console.log(myDate);
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatDate = new Date(2023,0, 18)
// let myCreatDate = new Date(2023,0, 18 , 4, 2)
// let myCreatDate = new Date("2-14-2024")
// let myCreatDate = new Date("2024-12-20")
let myCreatDate = new Date ("12-14-2024");

// console.log(myCreatDate.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatDate.getTime());
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date("2024-2-12")
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// `${newDate.getDay()} and the time`

const isNewDate = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(isNewDate);
