var celsiusEl = document.getElementById("celsius");
var fahrenheitEl = document.getElementById("fahrenheit");
var kelvinEl = document.getElementById("kelvin");
celsiusEl.addEventListener("change", myFunction);
fahrenheitEl.addEventListener("change", myFunction);
kelvinEl.addEventListener("change", myFunction);



function myFunction(evt) {
  var temp = evt.target.value;
  temp = parseFloat(temp);
  switch (evt.target.id) {
    case "celsius":
      fahrenheitEl.value = (((temp * 9)/5) + 32).toFixed(2);
      kelvinEl.value = (temp + 273.15).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((temp - 32) * (5/9)).toFixed(2);
      kelvinEl.value = (((temp - 32) / (9/5)) + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (temp - 273.15).toFixed(2);
      fahrenheitEl.value = (((temp-273.15) * (9/5)) + 32).toFixed(2);
      break;
  }
}
