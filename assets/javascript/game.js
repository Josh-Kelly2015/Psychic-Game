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
var updateLetter = function (){ letter =  alphabet[Math.floor(Math.random() * alphabet.length)]};
updateLetter();
console.log(letter)
var array = [];
//listening for event of onkeyup
document.onkeyup = function (event) {

    //put the value of pressed key inside guesses variable
    var userInput = event.key;

    //if guesses specifically = letter wins increment by 
    if (userInput === letter) {
        wins++;
        // array.push(userInput);
        console.log(array);
        console.log(array);
        guessesLeft = 10;
        // array = [];
        updateLetter();
        console.log(letter);
    }
    //otherwise guessesLeft decrements
    else {
        guessesLeft--;

    }
    //2nd if statement to handle the amount of guesses you get
    if (guessesLeft === 0) {
        losses++
        guessesLeft = 10;
        array = [];
        updateLetter();
        console.log(array);
       console.log(array);
    }
    else if (userInput !== letter){
    array.push(userInput);
    // console.log(array);
}
    // this displays to my divs. had to type string in here cuz .innerHTML rewrites entire div
    document.getElementById("letter").innerHTML = "Guess what letter I'm thinking of ";
    document.getElementById("wins").innerHTML = "Wins: " + wins; //increments per match 
    document.getElementById("losses").innerHTML = "Losses: " + losses; // decremnts losses inside div
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft; //puts my guessesLeft to the desired div
    document.getElementById("guesses").innerHTML = "Your Guesses So Far: " + array;   //list all guesses here


}
