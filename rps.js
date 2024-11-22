function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    return prompt("give sign").toLowerCase();
    // return "rock";
}

let humanScore = 0;
let computerScore = 0;

let humanScoreLabel = document.querySelector(".scores .player");
let computerScoreLabel = document.querySelector(".scores .computer");
let humanPlayLabel = document.querySelector(".plays .player");
let computerPlayLabel = document.querySelector(".plays .computer");

let historyLabel = document.querySelector(".history")

function playRound(humanChoice, computerChoice) {
    humanPlayLabel.textContent = "Human: " + humanChoice;
    computerPlayLabel.textContent = "Computer: " + computerChoice;
    const play = humanChoice + " plays " + computerChoice;
    historyLabel.textContent += (" - " + play);
    if (humanChoice == computerChoice) {
        console.log("draw - " + play);
    }
    else if ((humanChoice.startsWith("s") && computerChoice.startsWith("p")) || 
             (humanChoice.startsWith("r") && computerChoice.startsWith("s")) || 
             (humanChoice.startsWith("p") && computerChoice.startsWith("r"))) {
        console.log("you win - "+play);
        humanScore++;
    }
    else {
        console.log("you lose - "+play);
        computerScore++;
    }
    humanScoreLabel.textContent = "Human Score: " + humanScore;
    computerScoreLabel.textContent = "Computer Score: " + computerScore;
}

function playGame() {
    let ROUNDS = 5;
    round = document.querySelector(".round");
    for(let i = 1; i <= ROUNDS; i++) {
        round.textContent = "Round: "+i;
        
        playRound(getHumanChoice(), getComputerChoice());
        
    }
}

playGame();