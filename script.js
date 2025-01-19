const validChoices = ["rock", "paper", "scissors"];

// Step 1: Generate a random computer choice
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomIndex];    
};

const getHumanChoice = () => {
    let userInput = "";

    while (!validChoices.includes(userInput)) {
        userInput = prompt("Let's play a game of Rock, Paper, Scissor. Choose your weapon!").toLowerCase();

        if (!validChoices.includes(userInput)) {
            alert("Invalid choice. Please choose Rock, Paper or Scissors.");
        }
    }
    return userInput;
};

// Global scores
let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        alert("It's a tie");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++; 
        alert(`You lose :( ${computerChoice} beats ${humanChoice}`);
    }   
};

const playGame = () => {
    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        // Display round scores
        console.log(`Round ${i}: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Display final results
    if (humanScore > computerScore) {
        alert("You win the game!");
    } else if (humanScore < computerScore) {
        alert("You lose the game :(");
    } else {
        alert("It's a tie!");
    }
};

// Start the game
playGame();