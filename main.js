//Step 01
import { differenceInSeconds } from "date-fns";
//function for countdown seconds
function* countdownTimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
// Step 02 : counter inilization
let timer = countdownTimer(30);
//function to create a count down timer
function displayCountdown() {
    //value below 10
    let result = timer.next();
    if (!result.done) {
        //current time and date call
        const now = new Date();
        //calculate minutes in time
        const countdownTimer = new Date(now.getTime() + (result.value * 1000));
        //calculate remaining seconds in time 
        const remainingSeconds = differenceInSeconds(countdownTimer, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000); //1 seconds is equal to 1000ms
    }
    else {
        // display result countdown complete 
        console.log("Countdown Complete!");
    }
}
//invoke
displayCountdown();
