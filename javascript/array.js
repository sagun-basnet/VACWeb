var arr = [
  4,
  8,
  5,
  "asdfasdf",
  false,
  12.43,
  [1, 2, 3, 4, 5, 5],
  { name: "jhon", age: 12, arr: [1, 2, 3, 5, 6] },
];

console.log(arr[7].name);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

var obj = {
  name: "jhon",
  age: 35,
  address: {
    country: "Nepal",
    state: "Koshi",
    city: "Itahari",
  },
  isNepali: true,
  salary: 133000.0,
  myArr: [23, 245, "asdf"],
};

console.log(obj.myArr[1]);

var myArr = [3, 12, 5, 8, 14, 8, 1];

function greatest(arr) {}

greatest(myArr);
