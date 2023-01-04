function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function  playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `DRAW! You both picked ${playerSelection}`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;        
    } else {
        return `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    const playerInput = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    for (let i = 0; i < 5; i++) {

    }

}
