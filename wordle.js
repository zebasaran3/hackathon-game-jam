const input = require(`readline-sync`)
const chalk = require("chalk");
let word = ""

async function fetchWord(){
    try{
        const response = await fetch(`https://random-word-api.herokuapp.com/word?length=5`)
        const data = await response.json()
        word = data.toString()
        word = word.split("")
        console.log(word)
        play(word)
    }catch(error){
        console.log(error)
    }
}


function play(word){

    let attempts = 6
    let output = []

    let guess =input.question(``)
    process.stdout.moveCursor(0, -1)

    for(let i = 0; i<guess.length;i++){
        if (guess[i] === word[i]){
            output.push(chalk.green(guess[i] + " "))
        } else if (word.includes(guess[i])){
            output.push(chalk.yellow(guess[i] + " "))
        } else{
            output.push(chalk.white(guess[i] + " "))
        }
    }
    console.log(`| ${output.join(" | ")}|`)
    attempts-=1
}

fetchWord()