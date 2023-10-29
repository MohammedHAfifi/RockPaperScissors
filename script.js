let playerSelection = '';
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('.btn');
let result = document.querySelector('#roundResult');
let pScore = document.querySelector('#playerScore');
let cScore = document.querySelector('#computerScore');

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
        result.textContent = "This round is a draw";
    } else if ((playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++
        result.textContent = `You won the round! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++
        result.textContent = `You lose   the round! ${playerSelection} loses to ${computerSelection}`;
    };
};

function playGame(playRound) {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        result.textContent = 'You Win!';
    } else if (computerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        result.textContent = 'The Computer Won </3';
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playGame(playRound);
        pScore.textContent = `Player Score: ${playerScore}`;
        cScore.textContent = ` Computer Score: ${computerScore}`;
    })
});
