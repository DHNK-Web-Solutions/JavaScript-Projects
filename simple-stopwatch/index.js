var minutes = 0;
var seconds = 0;
var centiSeconds = 0;

var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");
var centiSecondsEl = document.getElementById("centiSeconds");
var startEl = document.getElementById("start")
var timer;

function stopWatch() {
  if (centiSeconds < 10) {
    centiSecondsEl.innerHTML = "0" + centiSeconds;
    centiSeconds++;
  } else {
    centiSecondsEl.innerHTML = centiSeconds;
    centiSeconds++;
    if (centiSeconds == 100) {
      seconds++;
      if (seconds < 10) {
        secondsEl.innerHTML = "0" + seconds;
      } else {
        secondsEl.innerHTML = seconds;
      }
      centiSeconds = 0;
      if (seconds == 60) {
        minutes++;
        if (minutes < 10) {
          minutesEl.innerHTML = "0" + minutes;
        } else {
          minutesEl.innerHTML = minutes;
        }
        seconds = 0;
      }
    }
  } 
}

function startTimer() {
  timer = setInterval(stopWatch, 10);
  startEl.style.pointerEvents = "none"
}
function stopTimer() {
  clearInterval(timer);
  startEl.style.pointerEvents = "auto"
}
function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  centiSeconds = 0;
  centiSecondsEl.innerHTML = "0" + centiSeconds;
  secondsEl.innerHTML = "0" + seconds;
  minutesEl.innerHTML = "0" + minutes;
  startEl.style.pointerEvents = "auto"
}