function calculate() {
  var billAmount = parseFloat(document.getElementById("bill").value);
  var tipPercentage = parseFloat(document.getElementById("tip").value);
  var total = billAmount + ((tipPercentage * billAmount) / 100);
  document.getElementById("total").textContent = total;
}