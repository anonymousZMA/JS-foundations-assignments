const selections = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  return selections[Math.floor(Math.random() * selections.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Verifying Player Selection
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  )
    return `Well, somebody's clearly been hitting the wrong buttons. Keep calm and try again, friend!`;

  if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
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
  for (let time = 0; time < 5; time++) {
    let playerSelection = prompt("Please enter you selection ");
    if (playerSelection == null)
      return `Hey there! Don't be shy, make your move! But remember, leaving the input field empty won't do you any good. So go ahead and show that computer who's boss!`;

    const computerSelection = computerPlay();

    console.log(
      `Computer Selection: ${computerSelection} - Player Selection: ${playerSelection}`
    );
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      `Computer Score: ${computerScore} - Player Score: ${playerScore}`
    );

    if (time !== 4) {
      console.log(
        `No pressure, but you only have ${4 - time} more shots at greatness!`
      );
    } else {
      console.log(
        `Sorry, game over! You've used up all your attempts. Better luck next time!`
      );
    }
    console.log("-".repeat(100));
  }

  if (computerScore > playerScore) {
    return `Niahaha 😈 Machine Beat Human`;
  } else {
    return `Well, Congrats! you won 🥴`;
  }
}
