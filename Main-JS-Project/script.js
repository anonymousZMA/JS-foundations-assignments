const selections = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  return selections[Math.floor(Math.random() * selections.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == ("" || null))
    return `Hey there! Don't be shy, make your move! But remember, leaving the input field empty won't do you any good. So go ahead and show that computer who's boss!`;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection !== ("rock" || "paper" || "scissors"))
    return `Well, somebody's clearly been hitting the wrong buttons. Keep calm and try again, friend!`;
  if (computerSelection == "rock" && playerSelection == "scissors") {
    computerScore++;
    return `You Lost!, ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    computerScore++;
    return `You Lost!, ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    computerScore++;
    return `You Lost!, ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection == playerSelection) {
    return `Well, it's a tie`;
  } else {
    playerScore++;
    return `Congrats! You won! ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please enter you selection ");
    console.log("🚀 ~ file: script.js:24 ~ playerSelection:", playerSelection);

    const computerSelection = computerPlay();
    console.log(
      "🚀 ~ file: script.js:26 ~ computerSelection:",
      computerSelection
    );
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      `Computer Score: ${computerScore} - Player Score: ${playerScore}`
    );
    if (i !== 4) {
      console.log(
        `No pressure, but you only have ${4 - i} more shots at greatness!`
      );
    } else {
      console.log(
        `Sorry, game over! You've used up all your attempts. Better luck next time!`
      );
    }
    console.log("-".repeat(100));
  }
  if (computerScore > playerScore) {
    console.log(`Niahaha 😈 Machine Beat Human`);
  } else {
    console.log(`Well, Congrats! you won 🥴`);
  }
}
