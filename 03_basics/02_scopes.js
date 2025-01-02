
// var c = 405
// let a = 300
// const b = 40
if (true) {
    let a = 10
const b = 20
var c = 600
// console.log("Inner:", a)
}
// console.log(`outside ${a}`);
// console.log(`outside ${b}`);
// console.log(`outside ${c}`);

function one() {
    const username = "Devesh"
    // console.log(username);
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //  console.log(website);
    
    // two()
}
one()


if (true) {
        const username = "devesh"
        if (username === "devesh") {
             const website = " youtube"
             console.log(username + website);
        }
        // console.log(website);
        
    }
    // console.log(username);


    // +++++++++++++++++ interesting ++++++++++++++++++++

    // console.log(one(4))
    function one(num){
        return num + 1
    }

    // console.log(addTwo(4))
    const addTwo = function two(num){
        return num + 4
    }

    
