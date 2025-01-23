//re-worked code to switches instead of if statements using arrays
// Get the buttons from the HTML

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const text = document.querySelector('#text')

// live game scores

let humanScore = 0;
let computerScore = 0;

//list nodes to be created during game round

const roundOutput = [
{text: "its a tie!"}, {text: "you win this round!"}, {text: "You lose this round"}

];

const finalDecision = [
  {text: "You win the game!"}, {text: "Sorry, you lose the game!"}
];

//initialize buttons

rockButton.addEventListener("click", getHumanChoice);
paperButton.addEventListener("click", getHumanChoice);
scissorsButton.addEventListener("click", getHumanChoice);

//human selection

function getHumanChoice(event) {
const choice = event.target.id;

if (choice === "rockButton") {
  text.innerHTML = "YOU CHOSE ROCK";
  return "Rock"
} else if (choice === "paperButton") {
  text.innerHTML = "YOU CHOSE PAPER";
  return "Paper"
} else if (choice === "scissorsButton") {
  text.innerHTML = "YOU CHOSE SCISSORS";
  return "Scissors"
}
}
  




//computer selection 

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

function PlayGame() {
  if (getHumanChoice === getComputerChoice) {
    
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

/*tion getHumanChoice(choice) {
  stch (choice) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
  }
}


//initialize buttons
button1.onclick = getHumanChoice(rock);
button2.onclick = getHumanChoice(paper);
button3.onclick = getHumanChoice(scissors);

// Get the list element from the HTML
const scoreUpdates = document.querySelectorAll("ul");

function getHumanChoice(rock) {
  if ((rock = "rock")) {
  }
}

// Add event listeners to each button

/*rockButton.addEventListener("click", () => {
  const listUpdates = document.createElement("li");
  const humanChoice = getHumanChoice("rock");
  if ((humanChoice = true)) {
    listUpdates.textContent = "Human chose rock";
    scoreUpdates.appendChild(listUpdates);
  }
});

paperButton.addEventListener("click", () => {
  const listUpdates = document.createElement("li");
  const humanChoice = getHumanChoice("paper");
  if (humanChoice) {
    // Proceed with the game logic
    listUpdates.textContent = "Human chose paper";
    scoreUpdates.appendChild(listUpdates);
  }
});

scissorsButton.addEventListener("click", () => {
  const listUpdates = document.createElement("li");
  const humanChoice = getHumanChoice("scissors");
  if (humanChoice) {
    // Proceed with the game logic
    listUpdates.textContent = "Human chose scissors";
    scoreUpdates.appendChild(listUpdates);
  }
});

/*function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //generate a random number from 0 to 2
  addEventListener.button;
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(
      `You chose ${humanChoice}, the computer chose ${computerChoice}`
    );

    const pScore = document.getElementById("playerScore");
    const cScore = document.getElementById("humanScore");

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
