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

    let list_gusses = []
    let example = ["a","e","i","o","u"]
    let attempts = 6

    for(let i = 0; i<example.length;i++){
        if (example[i] === word[i]){
            console.log(chalk.green(example[i]))
        } else if (word.includes(example[i])){
            console.log(chalk.yellow(example[i]))
        } else{
            console.log(chalk.white(example[i]))
        }
    }

    attempts-=1
    return list_gusses

}

fetchWord()
