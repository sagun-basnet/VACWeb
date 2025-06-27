// const btn = document.querySelector("button");
// const box = document.querySelector(".box");
// const reset = document.querySelector(".reset");
// const body = document.querySelector("body");
// btn.addEventListener("click", () => {
//   box.style.backgroundColor = "black";
// });

// reset.addEventListener("click", () => {
//   box.style.backgroundColor = "white";
// });

const btnRed = document.querySelector(".btn-red");
const btnGreen = document.querySelector(".btn-green");
const btnBlue = document.querySelector(".btn-blue");
const btnYellow = document.querySelector(".btn-yellow");
const btnBlack = document.querySelector(".btn-black");
const body = document.querySelector("body");

btnRed.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});
btnGreen.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});
btnBlue.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});
btnYellow.addEventListener("click", () => {
  body.style.backgroundColor = "turquoise";
});
btnBlack.addEventListener("click", () => {
  body.style.backgroundColor = "black";
});
