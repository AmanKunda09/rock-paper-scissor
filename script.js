function getComputerChoice() {
  let choice = ["rock", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);
  return choice[num];
}
let choice = getComputerChoice();
function playRound(playerSelection, computerSelection) {
  let userChoice = playerSelection.toLowerCase();
  if (userChoice == "rock") {
    if (computerSelection == "rock") {
      console.log("no one won! its a draw");
      return 0;
    } else if (computerSelection == "scissor") {
      console.log(`You won! ${userChoice} beats ${computerSelection} `);
      return 1;
    } else if (computerSelection == "paper") {
      console.log(`You lost! ${computerSelection} beats ${userChoice} `);
      return 0;
    }
  } else if (userChoice == "paper") {
    if (computerSelection == "paper") {
      console.log("no one won! its a draw");
      return 0;
    } else if (computerSelection == "rock") {
      console.log(`You won! ${userChoice} beats ${computerSelection} `);
      return 1;
    } else if (computerSelection == "scissor") {
      console.log(`You lost! ${computerSelection} beats ${userChoice} `);
      return 0;
    }
  } else {
    if (computerSelection == "scissor") {
      console.log("no one won! its a draw");
      return 0;
    } else if (computerSelection == "paper") {
      console.log(`You won! ${userChoice} beats ${computerSelection} `);
      return 1;
    } else if (computerSelection == "rock") {
      console.log(`You lost! ${computerSelection} beats ${userChoice} `);
      return 0;
    }
  }
}
function game() {
  let player = prompt("what is your choice");

  return playRound(player, choice);
}
let score = 0;
for (let i = 0; i < 5; i++) {
  score += game();
  console.log("current score is " + score);
}
