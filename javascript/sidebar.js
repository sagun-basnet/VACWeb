const bar = document.querySelector(".bar");
const cross = document.querySelector(".cross");
const sidebar = document.querySelector(".sidebar");

bar.addEventListener("click", () => {
  sidebar.style.left = "0px";
  bar.style.display = "none";
  cross.style.display = "block";
});

cross.addEventListener("click", () => {
  sidebar.style.left = "-200px";
  bar.style.display = "block";
  cross.style.display = "none";
});
