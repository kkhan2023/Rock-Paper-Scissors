// Computer choice function

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = [Math.floor(Math.random() * options.length)];
  return options[randomIndex];
}

// if player has won the round

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

// player scores

let playerScore = 0;
let computerScore = 0;

// get results from player or computer

function getRoundResults(userOption) {
  const computerResult = getComputerChoice();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins!  ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

// retrieving elements from DOM to manipulate with JS

const playerScoreSpanElement = document.getElementById("playerScore");
const computerScoreSpanElement = document.getElementById("computerScore");
const roundResultsMsg = document.getElementById("text");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".buttons-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// Scores & results

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore >= 5 || computerScore >= 5) {
    winnerMsgElement.innerText = `${
      playerScore >= 5 ? "Player" : "Computer"
    } has won the game!`;

    optionsContainer.style.display = "none";
    winnerMsgElement.style.display = "block";
    resetGameBtn.style.display = "block";
  }
}

// restart game after 5 games of RPS have been played and a winner has been determined

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rockButton");
const paperBtn = document.getElementById("paperButton");
const scissorsBtn = document.getElementById("scissorsButton");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
