const marvel_heros = ["Thor", "captain", "vision", "Iron man", "spider-man"]
const dc_heros = ["Batman", "superman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[5][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
 
const all_new_heros = [...marvel_heros, ...dc_heros] // spread 
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);





console.log(Array.isArray("Devesh"));
console.log(Array.from("Devesh"));
console.log(Array.from({name: "devesh"}));   // interesting


let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score, score1, score2));
