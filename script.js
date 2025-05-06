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
    lowerHumanChoice = humanChoice.toLowerCase();

    switch(lowerHumanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    results.textContent = "You tie!"
                    break;
                case "paper":
                    results.textContent = "You lose! Paper beats rock."
                    computerScore++;
                    break;
                case "scissors":
                    results.textContent = "You win! Rock beats scissors."
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    results.textContent = "You win! Paper beats rock."
                    humanScore++;
                    break;
                case "paper":
                    results.textContent = "You tie!"
                    break;
                case "scissors":
                    results.textContent = "You lose! Scissors beats paper."
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    results.textContent = "You lose! Rock beats scissors."
                    computerScore++;
                    break;
                case "paper":
                    results.textContent = "You win! Scissors beats paper."
                    humanScore++;
                    break;
                case "scissors":
                    results.textContent = "You tie!"
                    break;
            }
            break;
    }

}

function playGame() {
    for(let i = 0 ; i < 5 ; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    let message = `Final score :
        Human: ${humanScore}
        Computer: ${computerScore}`

    console.log(message)
}

buttons = document.querySelectorAll("button")
results = document.querySelector(".results")
score = document.querySelector(".score")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (computerScore < 5 && humanScore < 5) {
            const computerSelection = getComputerChoice();
            playRound(button.id, computerSelection);

            score.textContent = `Human score: ${humanScore}
            Computer score: ${computerScore}`;

            if (computerScore === 5 || humanScore === 5) {
                const winner = document.createElement("p")
                winner.classList.add("final")
                if (computerScore === 5) winner.textContent = "The computer wins!"
                else if (humanScore === 5) winner.textContent = "You win!"
                score.parentNode.appendChild(winner)
            } 
        }
    }) 
});

