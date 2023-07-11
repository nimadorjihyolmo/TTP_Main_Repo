const timerElement = document.getElementById('timer');
const timeRemaining = 5;

function timeDecrease() {
    if(timeRemaining > 0) {
        timerElement.innerText = timeRemaining;
        timeRemaining--;
    } else {
        timerElement.innerText = "Time is up!";
        clearInterval(timer); 
    }
  
}

setInterval(timeDecrease, 1000);
