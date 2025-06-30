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

const heading = document.querySelector("#heading");
const text = document.querySelector(".text");

console.log(heading.innerHTML);
heading.innerHTML = "Welcome to the Sidebar Example Example";

text.innerHTML =
  "This is a simple sidebar example using JavaScript. Click the bar icon to open the sidebar and the cross icon to close it.";
