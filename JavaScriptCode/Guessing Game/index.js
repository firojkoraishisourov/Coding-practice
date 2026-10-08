//Guessing game
//Guess a number from 1 to 5
//Generate a random number between 1 to 5
//If the guess number matches random number; then show message won else lost
//Run the game for 5 times
//show the number of wons and losts

let numberOfWon = 0;
let numberOfLost = 0;

for(let i = 0; i < 5; i ++){
    let guessNum = parseInt(prompt("Enter a number from 1 to 5 : "));

    let randomNumber = Math.floor(Math.random()*5) + 1 ; 

    if(guessNum == randomNumber){
        console.log("You have won !!")
        numberOfWon++;
    }else{
        console.log("You have lost!! Random number was "+randomNumber);
        numberOfLost++;
    }

}

document.write("You have won "+numberOfWon+" times. <br>");
document.write("You have lost "+numberOfLost+" times.");
