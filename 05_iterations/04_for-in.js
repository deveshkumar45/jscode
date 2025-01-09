// for in
const myObject = {
    js: "javascript",
    cpp: "C++",
    py: "python",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "ruby", "java","cpp", "py", "c"]
for (const key in programming) {
        console.log(programming[key]);
          
}