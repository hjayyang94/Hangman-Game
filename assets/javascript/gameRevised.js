var list_of_words = ["apple", "bear", "car", "dragon", "elephant", "factory"];
var numberWins = 0;
var wordToGuess = list_of_words[Math.floor(Math.random() * list_of_words.length)];
var hiddenWord = [];
var guesses = [""];
var life = 5;
var wins = 0;
var gameOver = false;

var game = {

    reset: function () {
        wordToGuess = list_of_words[Math.floor(Math.random() * list_of_words.length)];
        hiddenWord = [];
        for (var i = 0; i < wordToGuess.length; i++) {
            hiddenWord.push("_");
        }
        document.getElementById("guessWord").innerHTML = hiddenWord;
        life = 15;
        gameOver = false;
        guesses = "";
    },

    checkInput: function (input) {
        var letters = /^[a-z]+$/;
        if (input.match(letters)) {
            return true;
        }
        else {
            alert("Your guess isn't valid! try again");
            return false
        }
    },
}

game.reset();

document.onkeyup = function (event) {

    var playerGuess = event.key;


    if (game.checkInput(playerGuess)) {
       

        if (guesses.includes(playerGuess+" ")) {
            //say it's already in there, don't do anything else
            document.getElementById("helpText").innerHTML = "You already tried that letter!";
        }
        else {
            guesses += playerGuess + " ";
            document.getElementById("listGuess").innerHTML = "Letters Already Guessed:\n" + guesses;


            if (wordToGuess.includes(playerGuess)) {

                document.getElementById("helpText").innerHTML = "Wohoo! You got a letter";
                //You got the letter. fill in guesses
                for (i = 0; i < wordToGuess.length; i++) {
                    if (playerGuess === wordToGuess[i]) {
                        hiddenWord[i] = playerGuess;
                    }
                }

                document.getElementById("guessWord").innerHTML = hiddenWord;
            }
            else {
                //You got it wrong, lose a life
                life--;
                document.getElementById("lifePoints").innerHTML = "Number of Guesses Remaining: " + life;
                document.getElementById("helpText").innerHTML = "Wrong! Try a different letter";
            }
        }

        if (hiddenWord.indexOf("_") === -1) {
            wins++;
            document.getElementById("winCount").innerHTML = "Wins: " + wins;
            document.getElementById("helpText").innerHTML = "You won!\n\nPress any button to try again";
            gameOver = true;
        }
        if (life < 1) {
            document.getElementById("helpText").innerHTML = "You lost ): \n\nPress any button to try again";
            gameOver = true;
        }
        if (gameOver) {
            game.reset();
        }
    }
}








