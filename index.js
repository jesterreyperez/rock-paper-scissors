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
console.log(getComputerChoice());
// Logic to get human player choice
function getHumanChoice() {
  const humanChoice = prompt("rock, paper, scissor");
  return humanChoice;
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  // to be continued here ...
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
