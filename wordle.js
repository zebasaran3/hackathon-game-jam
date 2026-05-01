const input = require(`readline-sync`)
const chalk = require("chalk");
let word = ""

async function fetchWord(){
    try{
        const response = await fetch(`https://random-word-api.herokuapp.com/word?length=5`)
        const data = await response.json()
        word = data.toString()
        word = word.split("")
        play(word)
        
    }catch(error){
        console.log(error)
    }
}



function play(word){

    let attempts = 1
    console.log("How to play Wordle:")
    console.log(" - You'll have 6 attempts to guess the word")
    console.log(" - Guesses must be 5 letters long")
    console.log()

    while (attempts<=6){
        let output = []
        let guess =input.question(``)
        guess = guess.toLowerCase()
        process.stdout.moveCursor(0, -1)

        if (/^[a-zA-Z]{5}$/.test(guess)){ 
            for(let i = 0; i<guess.length;i++){
                if (guess[i] === word[i]){
                    output.push(chalk.green(guess[i] + " "))
                } else if (word.includes(guess[i])){
                    output.push(chalk.yellow(guess[i] + " "))
                } else{
                    output.push(chalk.white(guess[i] + " "))
                }
            }
            if(guess === word.join("")){
            console.log(`| ${output.join(" | ")}|`)
            console.log(`Congratulations! You finished the game in ${attempts} attempts!`)
                return
            }
            let attemptsLeft = 6 - attempts
            console.log(`| ${output.join(" | ")}| - ${attemptsLeft} attempts left`)
                attempts += 1
        }
            else{
                console.log("Invalid input. Please enter a 5-letter word using only letters.")
            }
    }
    console.log(`The word was ${word.join("")}!, Better luck next time!`)
    return
}

fetchWord()
