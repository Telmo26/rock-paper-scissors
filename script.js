// console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
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
    let humanChoice = prompt("Rock, paper, scissors ?");
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    let humanChoice = humanChoice.toLowerCase();

    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    console.log("You tie!")
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock.")
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win! Rock beats scissors.")
                    humanScore++;
                    break;
            }
        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log("You win! Paper beats rock.")
                    humanScore++;
                    break;
                case "paper":
                    console.log("You tie!")
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats paper.")
                    computerScore++;
                    break;
            }
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats scissors.")
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win! Scissors beats paper.")
                    humanScore++;
                    break;
                case "scissors":
                    console.log("You tie!")
                    break;
            }
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, humanSelection);