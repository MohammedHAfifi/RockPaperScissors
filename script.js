
let playerChoice;
let input = prompt("please enter your choice:");

playerSelection = input.toLowerCase();
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
}
};

computerSelection = getComputerChoice()
//console.log(computerSelection)

