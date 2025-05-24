var sectionEl = document.getElementById("section2");
var headerEl = document.querySelector("#navbar");
var bottomContainerEl = document.getElementById("bottomContainer");

window.onscroll = function myFunction(evt) {
  if (window.scrollY > 
    bottomContainerEl.offsetTop - headerEl.offsetHeight) {
    headerEl.classList.add("scroll")
  } else {
    headerEl.classList.remove("scroll");
  }
}