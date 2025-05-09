var videoEl = document.getElementById("video");
var containerEl = document.getElementById("container");
var closeEl = document.getElementById("close");
function myFunction() {
  videoEl.classList.toggle("show");
  containerEl.classList.toggle("hide");
  closeEl.classList.toggle("show");
} 