let playerSelection = '';

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

let buttons = document.querySelectorAll('.btn');
let result = document.querySelector('#roundResult');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        let computerSelection = getComputerChoice();
        result.textContent = playRound(playerSelection, computerSelection);
    })
});
