// const name = "Jhon";
// const age = 12;

// console.log("My name is " + name + " I am " + age + " years old");
// console.log(`My name is ${name}. I am ${age} years old.
//     asdfasdf`);

// const myFun = (a, b = 8) => {
//   console.log(a + b);
// };

// myFun(12, 10);

// array destructing
// const arr = [23, 45, 67, 78, 89];

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [a, b, c, d, e] = arr;

// console.log(a, b, c, d, e);

// object destructing
// const obj = {
//   name: "jhon",
//   age: 24,
//   address: "Itahari",
//   email: "jhon@gmail.com",
//   password: "12345678",
// };

// const { name, address, age, email, password } = obj;

// console.log(name);

// spread and rest operator

const [a, b, c, ...others] = arr; //rest operator
console.log(others);

const arr = [23, 45, 67, 78, 89];

console.log(...arr); //sperate operator

const obj = {
  name: "jhon",
  age: 24,
  address: "Itahari",
  email: "jhon@gmail.com",
  password: "12345678",
};

const { password, ...ress } = obj;

console.log(ress);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [10, 11, 12, 13, 14, 15, 16];

const newArr = [...arr1, ...arr2, 17, 18, 19, 20];

console.log(newArr);
