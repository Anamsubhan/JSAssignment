// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


var secretNumber = 5
var userInput = +prompt("Enter Your Number")
if (userInput === 5) {
    alert("Congratulations! You Guess a Secret Number")
} else if (userInput > 5) {
    alert("Sorry! Your Number Is High, Better Luck Next Time")
} else {
    alert("Sorry! Your Number Is Low, Better Luck Next Time")
}