// Step 1: Check if JavaScript is linked
console.log("Hello World");

// Step 6: Logic to play entire game
function playGame() {
  // Step 4: Declare players score variables
  let humanScore = 0;
  let computerScore = 0;

  // Step 3: Logic to get human player choice
  function getHumanChoice() {
    const humanChoice = prompt("rock, paper, scissor");
    return humanChoice.toLowerCase();
  }

  // Step 2: Logic to get the choice of the computer
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

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  // Step 5: Logic to play a single round
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

  playRound(humanSelection, computerSelection);
  console.log(
    `Human Player score = ${humanScore} | Computer Player Score = ${computerScore}`,
  );
}

playGame();
