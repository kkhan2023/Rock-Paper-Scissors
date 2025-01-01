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

//re-worked code to switches instead of if statements using arrays

function getHumanChoice(choice) {
  switch (choice) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
  }
}

// Get the buttons from the HTML

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Add event listeners to each button

rockButton.addEventListener("click", () => {
  const humanChoice = getHumanChoice("rock");
  if (humanChoice) {
    console.log("Human chose:", humanChoice);
  }
});

paperButton.addEventListener("click", () => {
  const humanChoice = getHumanChoice("paper");
  if (humanChoice) {
    // Proceed with the game logic
    console.log("Human chose:", humanChoice);
  }
});

scissorsButton.addEventListener("click", () => {
  const humanChoice = getHumanChoice("scissors");
  if (humanChoice) {
    // Proceed with the game logic
    console.log("Human chose:", humanChoice);
  }
});

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
