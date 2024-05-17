#!/usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "string",
        message: "Enter your sentence"
    }
]);
let word = answer.Sentence.trim().split(" ");
console.log(word);
console.log(`Your sentence has  ${word.length} words`);
