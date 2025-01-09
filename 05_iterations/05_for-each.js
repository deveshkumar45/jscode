// for each
const coding = ["java", "python", "javascript", "cpp", "Go-lang", "Ruby"]
// coding.forEach(function va(l) {
//     console.log(val);
    
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })

// function mycoding(item){
//     console.log(item);
    
// }
// coding.forEach(mycoding)

// coding.forEach((item, index,array)=>{
//     console.log(item,index, array);
    
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }  
]
myCoding.forEach((item)=> {
    console.log(item.languageName);
    
})