
let playerChoice;
let input = prompt("please enter your choice:");

playerSelection = input.toLowerCase();
//console.log(playerSelection);

let computerSelection;
function getComputerChoice() {
let random = Math.floor(Math.random() * 3);
return random
};

computerSelection = getComputerChoice()
//console.log(computerSelection)