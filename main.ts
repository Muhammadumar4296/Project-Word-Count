import inquirer from "inquirer";

const answer: {
    sentence: "string"
} =await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "please enter sentence or paragraph we count word: "
})
const word = answer.sentence.trim().split(" ")
console.log(`your sentence word count is ${word.length}`)


