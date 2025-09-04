// Function to get computer's random choice
function getComputerChoice() {
  const mathRandom = Math.random(); // get random number between 0 and 1
  // if number is less than 0.33
  if (mathRandom < 0.34) {
    return "rock"; // return rock
    // if number is between 0.33 and 0.66
  } else if (mathRandom < 0.66) {
    return "paper"; // return paper
    // if number is greater than 0.66
  } else {
    return "scissors"; // return scissors
  }
}

// Function to get human player's choice
function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:"); // ask user for input
  return choice.toLowerCase(); // convert input to lowercase for consistency
}

let humanScore = 0; // initialize human score
let computerScore = 0; // initialize computer score

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
}
