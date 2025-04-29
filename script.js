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

console.log(getComputerChoice())