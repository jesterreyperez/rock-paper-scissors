// Function to get computer's random choice
function getComputerChoice() {
  const mathRandom = Math.random(); // get random number between 0 and 1

  if (mathRandom < 0.34) {
    // if number is less than 0.34
    return "rock"; // return rock
  } else if (mathRandom < 0.66) {
    // if number is between 0.34 and 0.66
    return "paper"; // return paper
  } else {
    // if number is greater than 0.66
    return "scissors"; // return scissors
  }
}

// Function to get human player's choice
function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:"); // ask user for input
  return choice.toLowerCase(); // convert input to lowercase for consistency
}

let humanScore = 0; // global human score
let computerScore = 0; // global computer score

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase(); // make input case-insensitive

  if (humanChoice === computerChoice) {
    // if both choices are same
    console.log("It's a tie!"); // announce tie
    return; // end function, no score changes
  }

  // Check winning combinations for human
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; // increase human score
    console.log(`You win! ${humanChoice} beats ${computerChoice}`); // announce human win
  } else {
    computerScore++; // increase computer score
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`); // announce computer win
  }
}

// Quick test: play one round before the full game
const humanSelection = getHumanChoice(); // get human choice
const computerSelection = getComputerChoice(); // get computer choice
playRound(humanSelection, computerSelection); // play one round
console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`); // print scores

// Function to play a full 5-round game
function playGame() {
  let humanScore = 0; // reset human score inside game
  let computerScore = 0; // reset computer score inside game

  for (let i = 1; i <= 5; i++) {
    // loop 5 rounds
    const humanSelection = getHumanChoice(); // ask for human choice
    const computerSelection = getComputerChoice(); // generate computer choice

    console.log(`Round ${i}:`); // show current round number

    if (humanSelection === computerSelection) {
      // tie case
      console.log("It's a tie!");
    } else if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log(`You win! ${humanSelection} beats ${computerSelection}`); // human wins
      humanScore++; // increase human score
    } else {
      console.log(`You lose! ${computerSelection} beats ${humanSelection}`); // computer wins
      computerScore++; // increase computer score
    }

    console.log(
      `Current Scores -> Human: ${humanScore}, Computer: ${computerScore}`
    ); // print scores
    console.log("-----------------------------------"); // separator line
  }

  // After 5 rounds, announce final results
  console.log("Final Results:");
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (humanScore < computerScore) {
    console.log("😢 You lose the game!");
  } else {
    console.log("🤝 It's a tie game!");
  }
}

// Run the full 5-round game
playGame();
