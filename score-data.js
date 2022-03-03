"use strict";
exports.__esModule = true;
var score = require("./score.json");
var content = 'Some content!';
var names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James"];
function data() {
    var newArr = [];
    for (var i = 0; i < 1000; i++) {
        newArr.push({
            score: Math.floor(Math.random() * 11),
            teamName: names[Math.floor(Math.random() * 45)]
        });
    }
    return newArr;
}
// console.log(score);

function ScorePrecntage() {
    

let map ={}
let sorted = score.sort((a,b)=>a.score-b.score)
for(let i = 0; i<sorted.length; i++){
   if (map[sorted[i].teamName] == undefined){
       map[sorted[i].teamName] = sorted[i].score
   }
    else{
        map[sorted[i].teamName] += sorted[i].score
    }
 
}

return map
}
console.log(ScorePrecntage())
// fs.writeFileSync('./score.json', JSON.stringify(data()))
