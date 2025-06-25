const btn = document.querySelector("button");
const box = document.querySelector(".box");
const reset = document.querySelector(".reset");

btn.addEventListener("click", () => {
  box.style.backgroundColor = "black";
});

reset.addEventListener("click", () => {
  box.style.backgroundColor = "white";
});
