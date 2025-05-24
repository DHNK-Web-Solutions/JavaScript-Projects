var userInput;
var comuterInput;

var userWin = 0;
var computerWin = 0;

document.getElementById("rock").addEventListener("click", gameStart);
document.getElementById("scissor").addEventListener("click", gameStart);
document.getElementById("paper").addEventListener("click", gameStart);
var resultEl = document.getElementById("result");
var userSpanEl = document.getElementById("user");
var computerSpanEl = document.getElementById("computer");
userSpanEl.innerHTML = userWin;
computerSpanEl.innerHTML = computerWin;

function gameStart(evt) {
  resultEl.style.display = "block";
  userInput = evt.target.id;
  var computerInput = computer();
  if (userInput == computerInput) {
    resultEl.innerHTML = "Its a tie"
  } else if (userInput == "rock" && computerInput == "scissor") {
    resultEl.innerHTML = "You win! rock beats scissors";
    userWin++;
  } else if (userInput == "rock" && computerInput == "paper") {
    resultEl.innerHTML = "You lose! paper beats rock";
    computerWin++;
  } else if (userInput == "scissor" && computerInput == "rock") {
    resultEl.innerHTML = "You lose! rock beats Scissors";
    computerWin++;
  } else if (userInput == "scissor" && computerInput == "paper") {
    resultEl.innerHTML = "You win! scissors beats rock";
    userWin++;
  } else if (userInput == "paper" && computerInput == "rock") {
    resultEl.innerHTML = "You win! paper beats rock";
    userWin++;
  } else if (userInput == "paper" && computerInput == "scissor") {
    resultEl.innerHTML = "You lose! paper beats scissors";
    computerWin++;
  }
  userSpanEl.innerHTML = userWin;
  computerSpanEl.innerHTML = computerWin;
}
function computer() {
  var random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "scissor";
    case 3: 
      return "paper";
  }
}