var button1El = document.getElementById("button1")
var button2El = document.getElementById("button2")
var button3El = document.getElementById("button3")
var articles = document.querySelectorAll(".content")
button1El.addEventListener("click", myFunction);
button2El.addEventListener("click", myFunction);
button3El.addEventListener("click", myFunction);
var btns = document.querySelectorAll(".button")
function myFunction(evt) {
  btns.forEach((btn) => {
    btn.classList.remove("live");
  });
  articles.forEach((art) => {
    art.classList.remove("live");
  })
  document.getElementById(evt.target.dataset.id).classList.add("live");
  evt.target.classList.add("live")
}