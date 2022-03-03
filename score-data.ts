import * as fs from 'fs';
import * as score from './score.json';

const content = 'Some content!'

const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James"]

function data() {
    let newArr = [];

    for (let i = 0; i < 1000; i++) {

        newArr.push({
            score: Math.floor(Math.random() * 11),
            teamName: names[Math.floor(Math.random() * 45)]
        })
    }
    return newArr

}
// console.log(score);

// fs.writeFileSync('./score.json', JSON.stringify(data()))
