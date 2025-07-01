const timeOut = () => {
  console.log("I am from Time Out function");
};

// timeOut();

// let a = 1;
// a = a + 1;
// console.log(a);

// const myTimeout = setTimeout(() => {
//   timeOut();
// }, 2000);

// clearTimeout(myTimeout);

// let a = 1;
// const myInterval = setInterval(() => {
//   a = a + 1;
//   console.log(a);
//   if (a === 3) {
//     clearInterval(myInterval);
//   }
// }, 2000);

// stop watch ============================>
let min = 0;
let a = 0;
setInterval(() => {
  a += 1;
  console.log("Min: " + min + " Sec: " + a);
  //   console.log(min);

  if (a === 10) {
    a = 0;
    min += 1;
  }
}, 1000);

// ========================================================

try {
  const a = 19;
  const b = 0;
  if (b === 0) {
    throw Error("B cannot be equal to 0");
  }

  console.log(a / b);
} catch (err) {
  console.log(err);
}
