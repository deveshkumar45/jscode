// for of

// ["", "", "", ""]
//[{}, {}, {}, {}]
const arr =[1, 2, 3, 4, 5, 6]
for (const num of arr) {
    console.log(`Array num is: ${num}`);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each value is: ${greet}`);
  
}

// Maps
 
const dev = new Map()

dev.set('In', "India")
dev.set('USA', "United States of America")
dev.set('Fr', "France")

// console.log(dev);

for (const [key,value] of dev) {
    console.log(key,':-',value)
}

const myObject = {
    'game1': "NFS",
    'game2': "Spider-man"
}
// for (const [key,value] of myObject) {
//     console.log(key,':-',value)
// }
