// Secret number
const secretNumber = 7;

// Number of attempts
let attempts = 5;


// Get elements from HTML
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const resetButton = document.getElementById("resetButton");
const messageElement = document.getElementById("message");
const attemptsElement = document.getElementById("attempts");
const gameBox = document.getElementById("gameBox");


// Function for messages
function showMessage(message) {
    messageElement.textContent = message;
}


// Check the player's guess
function checkGuess() {

    // Read input value
    const inputValue = guessInput.value;

    // Check if input is empty
    if (inputValue === "") {
        showMessage("Enter a number");
        return;
    }

    // Convert input to number
    const guess = Number(inputValue);

    // Check number range
    if (guess < 1 || guess > 10) {
        showMessage("Choose a number from 1 to 10");
        return;
    }

    // Correct guess
    if (guess === secretNumber) {

        showMessage("Correct!");

        // Add win class
        gameBox.classList.add("win");

        // Disable Check button
        checkButton.disabled = true;

        return;
    }

    // Wrong guess
    attempts--;

    // Update attempts
    attemptsElement.textContent = attempts;

    // Game over
    if (attempts === 0) {

        showMessage("Game over");

        // Add lose class
        gameBox.classList.add("lose");

        // Disable Check button
        checkButton.disabled = true;

        return;
    }

    // Hint
    if (guess > secretNumber) {
        showMessage("Too high");
    } else {
        showMessage("Too low");
    }
}


// Reset the game
function resetGame() {

    // Reset attempts
    attempts = 5;

    // Update attempts
    attemptsElement.textContent = attempts;

    // Clear input
    guessInput.value = "";

    // Reset message
    showMessage("Good luck!");

    // Enable Check button
    checkButton.disabled = false;

    // Remove win and lose classes
    gameBox.classList.remove("win", "lose");
}


// Check button
checkButton.addEventListener("click", checkGuess);


// Reset button
resetButton.addEventListener("click", resetGame);
