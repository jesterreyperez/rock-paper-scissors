// Logic to get the choice of the computer
function getComputerChoice() {
  const computerRandomChoice = Math.random();
  if (computerRandomChoice < 0.33) {
    return "rock";
  } else if (computerRandomChoice < 0.66) {
    return "paper";
  } else {
    return "scissor";
  }
}
console.log(getComputerChoice());
