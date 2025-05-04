var result = [];
var resultListEl = document.getElementById("resultList");
var roll = 0;
resultListEl.innerHTML = "";
function diceRoll() {
  var random = Math.floor(Math.random() * 6) + 1;
  result.push(random);
  roll++;
  var rollDivEl = document.createElement("div");
  rollDivEl.classList.add("rollDiv");
  resultListEl.appendChild(rollDivEl);
  var rollTitleEl = document.createElement("h2");
  rollTitleEl.innerHTML = `Roll ${roll}`;
  rollDivEl.appendChild(rollTitleEl);
  var rollImgEl = document.createElement("img");
  rollImgEl.src = `./images/dice-${random}.svg`;
  rollDivEl.appendChild(rollImgEl);
  var mainImg = document.getElementById("mainImg");
  mainImg.src = `./images/dice-${random}.svg`;
}