# Rock, Paper, Scissors Game

This is a simple game of Rock, Paper, Scissors created using pure JavaScript and tested using the console. The game allows the user to play against the computer and keeps track of the score.

## Installation

To install the game, simply clone the repository and open the index.html file in your browser.
```bash 
git clone https://github.com/your-username/rock-paper-scissors.git
```

## Usage

To play the game, follow these steps:

1. Open the index.html file in your web browser.
2. Open the console log in your browser.
3. Type game() into the console and hit enter. This will start the game.
4. A popup window will appear asking you to enter your selection of rock, paper, or scissors.
5. Type your selection into the input field and click the "OK" button.
6. The computer will randomly select its move, and the game result will be displayed in the console log.

You can continue playing rounds by refreshing the page and entering a new move when prompted.

The game ends after five rounds, and the final score will be displayed in the console.

## Requirements

To create a Rock, Paper, Scissors game using JavaScript, follow these steps:

1. Create a blank HTML document with a script tag (Hint: it is best practice to link an
   external .js file).
   This game is going to be played completely from the console, so don’t
   worry about putting anything else in there.

2. Your game is going to play against the computer, so begin with a function called
   computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

3. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
   i. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). (Here’s a tip on how to do that)

**Important note:** you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results.

4. Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

i. Remember loops? This is a great opportunity to use one to play those five rounds.
ii. At this point you should be using console.log() to display the results of each round and the winner at the end.
iii. Use prompt() to get input from the user. Read the docs here.
iv. Feel free to re-work your previous functions if you need to. Specifically, you
might want to change the return value to something more useful.
