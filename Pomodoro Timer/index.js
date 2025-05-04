// Start Button
var minutes = 24;
var seconds = 60;
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start")
var timer;

function countDown() {
  seconds--;
  timerEl.innerHTML = minutes + ":" + seconds;
  if (seconds == 0) {
    if (minutes == 0 && seconds == 0) {
      timerEl.innerHTML = "00:00";
      clearInterval(timer);
      alert("Times Up")
    }
    minutes--;
    seconds = 60;
  }
}


function startTimer() {
  console.log("started");
  timer = setInterval(countDown,1000);
  timerEl.innerHTML = minutes + ":" + seconds;
  startEl.style.pointerEvents = "none";
}
// Stop Button
function stopTimer() {
  console.log("stopped")
  clearInterval(timer);
  startEl.style.pointerEvents = "auto";
}
// Reset Timer
function resetTimer() {
  console.log("Reset")
  clearInterval(timer);
  minutes = 24;
  seconds = 60;
  timerEl.innerHTML = "25:00";
  startEl.style.pointerEvents = "auto";
}
