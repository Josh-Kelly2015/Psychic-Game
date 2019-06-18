//Globabl variables. alphabet to generate random letters to guess. other variables to track changing values
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//tracks wins 
var wins = 0;
//tracks losses 
var losses = 0;
//tracks amount of guesses
var guessesLeft = 10;
//randomizes alphabet variables 
var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(letter)

// function letter(length) {
//     var result = '';
//     for (var i = 0; i < length; i++) {
//         result += alphabet[Math.floor(Math.random() * alphabet.length)];
//     }
//     return result;
// }
// console.log(letter(1));

//listening for event of onkeyup
document.onkeyup = function (event) {

    //put the value of pressed key inside guesses variable
    var userInput = event.key;

    //if guesses specifically = letter wins increment by 
    if (userInput === letter) {
        wins++;

        // i need a function to call on so i can replace the original letter 


    }
    //otherwise guessesLeft decrements
    else {
        guessesLeft--;

    }
    //2nd if statement to handle the amount of guesses you get
    if (guessesLeft === 0) {
        losses++
        guessesLeft = 10;

    }


    // this displays to my divs. had to type string in here cuz .innerHTML rewrites entire div
    document.getElementById("letter").innerHTML = "Guess what letter I'm thinking of ";
    document.getElementById("wins").innerHTML = "Wins: " + wins; //increments per match 
    document.getElementById("losses").innerHTML = "Losses: " + losses; // decremnts losses inside div
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft; //puts my guessesLeft to the desired div
    document.getElementById("guesses").innerHTML = "Your Guesses So Far: " + userInput   //list all guesses here


}
