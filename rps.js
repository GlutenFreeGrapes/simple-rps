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
round = document.querySelector(".round");

let humanScore = 0;
let computerScore = 0;
let round_nbr = 0;

let humanScoreLabel = document.querySelector(".scores .player");
let computerScoreLabel = document.querySelector(".scores .computer");
let humanPlayLabel = document.querySelector(".plays .player");
let computerPlayLabel = document.querySelector(".plays .computer");

let historyLabel = document.querySelector(".history")
let historyList = document.querySelector(".history-list")

function playRound(humanChoice, computerChoice) {
    round.textContent = "Round: "+(++round_nbr);
    humanPlayLabel.textContent = "Human: " + humanChoice;
    computerPlayLabel.textContent = "Computer: " + computerChoice;
    const play = humanChoice + " plays " + computerChoice;
    
    const entry = document.createElement("li")
    entry.textContent = play;
    historyList.appendChild(entry);
    
    if (humanChoice == computerChoice) {
        console.log("draw - " + play);
        entry.textContent += " - DRAW";
    }
    else if ((humanChoice.startsWith("s") && computerChoice.startsWith("p")) || 
            (humanChoice.startsWith("r") && computerChoice.startsWith("s")) || 
            (humanChoice.startsWith("p") && computerChoice.startsWith("r"))) {
        console.log("you win - "+play);
        humanScore++;
        entry.textContent += " - YOU WIN";
    }
    else {
        console.log("you lose - "+play);
        computerScore++;
        entry.textContent += " - YOU LOSE";
    }
    humanScoreLabel.textContent = "Human Score: " + humanScore;
    computerScoreLabel.textContent = "Computer Score: " + computerScore;
    if (humanScore >= 5 || computerScore >= 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        const winnerLabel = document.createElement("h3");
        winnerLabel.textContent = (humanScore >= 5 ? "Human" : "Computer") + " wins."
        document.body.appendChild(winnerLabel);
    }
    
}

const rock = document.querySelector(".choices .rock")
const paper = document.querySelector(".choices .paper")
const scissors = document.querySelector(".choices .scissors")

rock.addEventListener("click", () => {playRound("rock", getComputerChoice());});
paper.addEventListener("click", () => {playRound("paper", getComputerChoice());});
scissors.addEventListener("click", () => {playRound("scissors", getComputerChoice());});

function playGame() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

playGame();