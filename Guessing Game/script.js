//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));


//check if guess is right
if(guess === secretNumber) {
    alert("You guessed " + guess + ". " + " Which is right!!!")
} else if (guess > secretNumber) {
    alert("To high, guess again");
} else {
    alert("To low, guess again");
}