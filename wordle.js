import chalk from 'chalk';
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

    let example = ["a","e","i","o","u"]
    let attempts = 6
    let output = []

    for(let i = 0; i<example.length;i++){
        if (example[i] === word[i]){
            output.push(chalk.green(example[i] + " "))
        } else if (word.includes(example[i])){
            output.push(chalk.yellow(example[i] + " "))
        } else{
            output.push(chalk.white(example[i] + " "))
        }
    }
    console.log(output.join(" | "))
    attempts-=1
}

fetchWord()