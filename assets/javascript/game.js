//Globabl variables. alphabet to generate random letters to guess. other variables to track changing values
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//tracks wins 
var wins = 0;
//tracks losses 
var losses = 0;
//tracks amount of guesses
var guessesLeft = 10;
//randomizes alphabet variables 
var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(letter)


//listening for event of onkeyup
document.onkeyup = function (event) {

    //put the value of pressed key inside guesses variable
    var guesses = event.key;

    //if guesses specifically = letter wins increment by 
    if (guesses === letter) {
        wins++;
        // change letter if correctly guessed 
        

        //otherwise guesses decrements
    }
    else {
        guessesLeft--;
        
    }
    //2nd if statement to handle the amount of guesses you get
    if (guessesLeft === 0) {
        losses++
        guessesLeft = 10;
        //also need to change letter at 0 guesses left  
    }

    // this displays to my divs. had to type string in here cuz .innerHTML rewrites entire div
    document.getElementById("letter").innerHTML = "Guess what letter I'm thinking of ";
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guesses").innerHTML = "Your Guesses So Far: " + guesses;

}
