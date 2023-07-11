// global variables

let randomNum = Math.floor(Math.random() *101);
console.log(randomNum);
let score = 10; 
let highscore = 0;

// changeMsg function to change the message based on the score
function changeMsg(text) {
    document.querySelector(".message").textContent = text;
}

//addEventListener function 
document.querySelector(".guessButton").addEventListener("click", function(){

    // checks if the user input is a valid number
    let inputUser = Number(document.querySelector(".userInput").value);

    //if statement to return stement to input valid number
    if(!inputUser){
        changeMsg("Please enter a valid number");
    }
    else if(inputUser === randomNum){
        document.querySelector(".message").textContent = randomNum;
        changeMsg("Hurray! YOU WIN!");
    

        // change the background with fireworks
        document.querySelector("body").style.backgroundImage = "url('image/giphy.gif')";

        //change the font color
        document.querySelector(".message").style.color = "Green";

        //disabling userInput and guessButton
        document.querySelector(".userInput").disabled = true;
        document.querySelector(".guessButton").disabled = true;

        if(score > highscore){
            highscore = score;

            //udating highscore
            document.querySelector(".highscore").textContent = highscore;
        }

    }    

    else if(inputUser != randomNum){
        if (score === 0){
            changeMsg("Game Over! You lost!");

            // change the background to red
            document.querySelector("body").style.backgroundImage ="url('image/red.jpg')" ;

            //chage the font color
            document.querySelector(".message").style.color = "yellow";
            

             //disabling userInput and guessButton
            document.querySelector(".userInput").disabled = true;
            document.querySelector(".guessButton").disabled = true;
        } else {
            
            inputUser > randomNum ? changeMsg("Your number is too high!") : changeMsg("Your number is too low!");
            score--;
        }
        // deducted score update
        document.querySelector(".score").textContent = score;


    }
 
});

// playButton to reset the game
document.querySelector(".playButton").addEventListener("click", function(){
    // reset the random number and score
    randomNum = Math.floor(Math.random() *101);
    score = 10;


    // update the displayed score
    document.querySelector(".score").textContent = score;

    //enable the iputUser field
    document.querySelector(".userInput").disabled = false;

     //reset the font color
     document.querySelector(".message").style.color = "black";


    // change the message to initial prompt
    changeMsg("?");

    //enable the guessButton
    document.querySelector(".guessButton").disabled = false;

    // reset the body background color
    document.querySelector("body").style.backgroundImage = "url('image/bgimage.jpg'";
    

    // 
});
