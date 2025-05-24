var input = document.getElementById("weight").addEventListener("keydown", calculate);
var weight = "";
var resultEl = document.getElementById("result");
var prevWeight = "";
var prevWeightKG;
function calculate(evt) {
  if ((evt.keyCode >= 96 && evt.keyCode <= 105) || (evt.keyCode >= 48 && evt.keyCode <= 57)) {
    weight+= evt.key;
  } else if (evt.keyCode == 8) {
    if (weight.length > 1) {
      weight = weight.substring(0, weight.length - 1);
    } else if (weight.length == 1) {
      prevWeight+= weight;
      weight = weight.substring(0, weight.length - 1);
      prevWeightKG = parseFloat(prevWeight) * 0.453592;
      prevWeightKG = prevWeightKG.toFixed(2);
    } else {
      prevWeightKG = parseFloat(prevWeightKG);
      resultEl.innerHTML = prevWeightKG;
    }
  }
    if (!weight.length == 0) {
      var weightKg = parseFloat(weight) * 0.453592;
      weightKg = weightKg.toFixed(2); 
      resultEl.innerHTML = weightKg;
    } else {
      resultEl.innerHTML = prevWeightKG;
    }
}