let playerScore = 0;
let compScore = 0;


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
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;        
    } else {
        compScore++;
        return `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose your weapon", "rock, paper, or scissors").toLocaleLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

        if (playerSelection > computerSelection) {
            return "You beat the computer!";
        } else if (playerSelection < computerSelection) {
            return "You got beat by the computer!";
        } else {
            return "Wow! what a match, you both tied!";
        }
    }
}
console.log(game());