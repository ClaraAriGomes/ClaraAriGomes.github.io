let button = document.querySelector(".randomBackground");
let nav = document.querySelector("nav");

let savedColor = localStorage.getItem('backgroundColor');
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    if (nav) nav.style.backgroundColor = savedColor;
}

button.addEventListener("click", function () {
  let randomColor = randomHexColor();

  document.body.style.backgroundColor = randomColor;
  if (nav) nav.style.backgroundColor = randomColor;

  localStorage.setItem('backgroundColor', randomColor);
});

function randomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
