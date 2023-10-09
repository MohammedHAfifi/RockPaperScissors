let playerSelection;
let getPlayerChoice = prompt("please enter your choice:");

playerSelection = getPlayerChoice.toLowerCase();
//console.log(playerSelection);

let computerSelection;
function getComputerChoice() {
let random = Math.floor(Math.random() * 3);
if (random === 0) {
    return "rock"
}else if (random === 1) {
    return "paper"
}else {
    return "scissors"
};
};

computerSelection = getComputerChoice();
//console.log(computerSelection)

function playRound() {
if (playerSelection == computerSelection) {
    return "This game is a draw"
}else if ((playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")) {
            return `You won! ${playerSelection} beats ${computerSelection}`
        }else {
            return `You lose! ${playerSelection} loses to ${computerSelection}`
        };
};

console.log(playRound())