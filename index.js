const countdownDisplay = document.getElementById("countdown-display");
const countdownText = document.getElementById("countdown-text");
const christmas = new Date("Dec 25, 2023, 00:00:00").getTime();
let year = new Date().getFullYear();

let x = setInterval(function timer() {
  let now = new Date();
  let timeLeft = christmas - now;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  countdownDisplay.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  /*if (days < -2){
        christmas = new Date("DEC 25, " + (year + 1) + "00:00:00").getTime();
    }*/
  if (timeLeft < 0) {
    clearInterval(x);
    countdownDisplay.innerHTML = "Ho-Ho-Ho";
    countdownText.innerHTML = "It's Christmas";
  }
});
