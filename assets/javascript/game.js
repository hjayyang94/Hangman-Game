//Words to guess

var list_of_words = ["apple", "bear", "car"]
var numberWins = 0;
var wordToGuess = list_of_words[Math.floor(Math.random() * list_of_words.length)];
var hiddenWord = []
var guesses = ""
var life = 15;


console.log(wordToGuess);
//Creating "_ _ _ _ _" for word
for (var i = 0; i < wordToGuess.length; i++) {
    hiddenWord.push("_");
}
document.getElementById("guessWord").innerHTML = hiddenWord;

//Whenever player guesses
document.onkeyup = function (event) {
    var playerGuess = event.key;
    console.log(playerGuess);

    if (guesses.includes(playerGuess)) {
        //say it's already in there, don't do anything else
        document.getElementById("helpText").innerHTML = "You already tried that letter!";
    }
    else {
        guesses += playerGuess + " ";
        document.getElementById("listGuess").innerHTML = "Letters Already Guessed:\n" + guesses;


        if (wordToGuess.includes(playerGuess)) {

            document.getElementById("helpText").innerHTML = "Wohoo! You got a letter";
            //You got the letter. fill in guesses
            for(i = 0; i<wordToGuess.length; i++){
                if (playerGuess === wordToGuess[i]){
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


}

