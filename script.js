// console.log("Hello World")

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
        default:
            return "error"
    }   
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, scissors ?").toLowerCase();
    return humanChoice
}

console.log(getComputerChoice())
console.log(getHumanChoice())