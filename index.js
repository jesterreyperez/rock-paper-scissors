let humanScore = 0;
let computerScore = 0;

// Logic to get the choice of the computer
function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice < 0.33) {
    return "rock";
  } else if (computerChoice < 0.66) {
    return "paper";
  } else {
    return "scissor";
  }
}

// Logic to get human player choice
function getHumanChoice() {
  const humanChoice = prompt("rock, paper, scissor");
  return humanChoice.toLowerCase();
}

// Logic to play a single round
function playRound(humanChoice, computerChoice) {
  // Human choice to win
  if (humanChoice === computerChoice) {
    console.log("It's a tie! try again.");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Player score = ${humanScore} | Computer Score = ${computerScore}`);
