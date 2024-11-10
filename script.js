// Write code so computer will randomly return one 'rock', 'paper' or 'scissors'

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //generate a random number from 0 to 2
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// write the code so that the human will return one of the valid choices based on user input

function getHumanChoice() {
  const userInput = prompt("Pick rock, paper, or scissors"); // Input by user
  const arrayOfChoices = ["Rock", "Paper", "Scissors"]; // Users 3 choices
  const lowercaseInput = userInput.toLowerCase(); // Initialize users input to be case sensitive

  if (lowercaseInput === arrayOfChoices[0].toLowerCase()) {
    return "Rock";
  } else if (lowercaseInput === arrayOfChoices[1].toLowerCase()) {
    return "Paper";
  } else if (lowercaseInput === arrayOfChoices[2].toLowerCase()) {
    return "Scissors";
  } else {
    alert("Invalid input, please try again");
    return getHumanChoice();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(
      `You chose ${humanChoice}, the computer chose ${computerChoice}`
    );

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      humanScore++;

      console.log("You win this round!");
    } else {
      computerScore++;
      console.log("Computer wins this round!");
    }
  }

  // Game loop (example of 5 rounds)
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Final scores
  console.log("Final Scores:");
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's score: ${computerScore}`);
}

playGame();
