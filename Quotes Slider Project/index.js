// var execute = setTimeout(changeMain, 1000);
var id = 0;
var list = [
  {
    quote: "Root of honesty and virtue lies in good education.",
    name: "Plutarch",
    imgURL: "images/plutarch.jpg"
  },
  {
    quote: "Love is composed of a single soul inhabiting two bodies.",
    name: "Aristotle",
    imgURL: "images/aristotle.jpg"
  },
  {
    quote: "What worries you, masters you",
    name: "John Locke",
    imgURL: "images/john.jpg"
  }
]
var quote = document.getElementById("quote");
var author = document.getElementById("name");
var img = document.getElementById("img")
var time = 10 * 1000;

changeMain();

function changeMain() {
  quote.textContent = list[id].quote;
  author.textContent = list[id].name;
  img.src = list[id].imgURL;
  id++;
  console.log(id);
  if (id === list.length) {
    id = 0;
  } 
  setTimeout(changeMain, time);
}


// function change() {
//   alert("Hello");
// }