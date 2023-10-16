let getPlayerChoice = prompt("please enter your choice:");
let playerSelection = getPlayerChoice.toLowerCase();
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "This game is a draw";
    } else if ((playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")) {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${playerSelection} loses to ${computerSelection}`;
    };
};
