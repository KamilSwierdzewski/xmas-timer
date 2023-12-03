const countdownDisplay = document.getElementById("countdown-display");
const christmas = new Date("DEC 25, 2023, 00:00:00");

var x = setInterval(function timer() {
  var now = new Date();
  var timeLeft = christmas - now;
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  countdownDisplay.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
});
