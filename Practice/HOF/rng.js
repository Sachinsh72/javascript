/* The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number. */



//store the delay in a variable in i
let totalSec=3;

//every second indicating the time remaining until the random number is generated
let timerInSeconds = setInterval(()=>{
    console.log(totalSec,"second remaining to generate random number");
    totalSec--;
},1000);

//then outputs the generated number
setTimeout(()=>{
    clearInterval(timerInSeconds);
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    console.log("Random number generated :",randomNumber);
},3000)