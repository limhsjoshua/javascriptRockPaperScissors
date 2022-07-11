//user
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    console.log("Invalid entry!");
  }
};
// console.log(getUserChoice('rock'));

//computer
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "scissors";
  } else if (randomNumber === 2) {
    return "paper";
  }
};
// console.log(getComputerChoice());

//determining the winning process
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return console.log("That was a tie!");
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, computer has won!";
    } else {
      return "Yay, you have won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, computer has won!";
    } else {
      return "Yay, you have won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, computer has won!";
    } else {
      return "Yay, you have won!";
    }
  }
  if (userChoice === "bomb") {
    return "Sneaky cheat! You won!";
  }
};
// console.log(determineWinner('rock', 'paper'));

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("Computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
