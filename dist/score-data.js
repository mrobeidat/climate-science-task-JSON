"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const score = __importStar(require("./score.json"));
const content = 'Some content!';
const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James"];
function data() {
    let newArr = [];
    for (let i = 0; i < 1000; i++) {
        newArr.push({
            score: Math.floor(Math.random() * 11),
            teamName: names[Math.floor(Math.random() * 45)]
        });
    }
    return newArr;
}
// console.log(score);
// fs.writeFileSync('./score.json', JSON.stringify(data()))
function ScorePrecntage() {
    //write a typescript function that pulls all the score.json from this collection
    //and returns the percentage of each team
    // and calculates the 10th , 5th, and 90th percentil of the scores. 
    // return the results as an array of objects.   
    let arr = [];
    for (let i = 0; i < score.length; i++) {
        for (const scores of score) {
            arr.push(scores.score);
        }
        console.log(arr);
    }
    return arr;
}
console.log(ScorePrecntage());
//# sourceMappingURL=score-data.js.map