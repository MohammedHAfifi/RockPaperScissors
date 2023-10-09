let playerSelection;
let getPlayerChoice = prompt("please enter your choice:");

playerSelection = getPlayerChoice.toLowerCase();
//console.log(playerSelection);

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

//let computerSelection;
//computerSelection = getComputerChoice();
//console.log(computerSelection)

function playRound() {
    let computerSelection;
    computerSelection = getComputerChoice();
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
//console.log(playRound());

function game() {
    let round = playRound()
    playRound()
    console.log(round)
    playRound()
    console.log(round)
    playRound()
    console.log(round)
    playRound()
    console.log(round)
    playRound()
    console.log(round)
};
//console.log(game());
game()