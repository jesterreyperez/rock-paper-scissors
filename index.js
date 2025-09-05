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

  if (humanChoice === computerChoice) {
    console.log("It's a tie!"); // if choices are the same, it's a tie
    return;
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; // increment human score
    console.log(`You win! ${humanChoice} beats ${computerChoice}`); // human wins
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`); // computer wins
    computerScore++; // increment computer score
  }
}

const humanSelection = getHumanChoice(); // get human player's choice
const computerSelection = getComputerChoice(); // get computer's choice

playRound(humanSelection, computerSelection); // play a round of the game

console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`); // display final scores

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i}:`);
    if (humanSelection === computerSelection)
      console.log("It's a tie!");
} else if (
  (humanSelection === "rock" && computerSelection === "scissors") ||
  (humanSelection === "paper" && computerSelection === "rock") ||
  (humanSelection === "scissors" && computerSelection === "paper")
) {
  console.log(`You win! ${humanSelection} beats ${computerSelection}`);
  humanScore++;
} else {
  console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
  computerScore++;
}

console.log(`Current Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
console.log('-----------------------------------');
}

console.log("Final Results:");
if (humanScore > computerScore) {
  console.log("🎉 You win the game!");
} else if (humanScore < computerScore) {
    console.log("😢 You lose the game!");
  } else {
    console.log("🤝 It's a tie game!");
  }

  // Run game
playGame();
