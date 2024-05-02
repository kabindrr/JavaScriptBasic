// console.log("Hello world");
// alert("concentrate while learning");

// variables in javascript

// var, let , const

// var name = "Kabindra Ranabhat";
// console.log(name);

// let add = "Sydney";

// console.log(name, add);
// console.log(name, add);
// console.log(name, add);
// console.log(name, add);
// console.log(name, add);

// // name = "sam";
// // console.log(name);
// // const age = 20;
// // console.log(age);
// // console.log(age, name);
// // age = 50;

// // arithmatic operators

// const a = 5;
// const b = 5;
// const c = b;
// console.log(a, b, c);

// const result = a + b + c;
// console.log(result);

// math objects

// console.log(Math.round(4.7));
// console.log(Math.(4.7));

// console.log(Math.round(Math.random() * 80));
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.ceil(Math.random() * 1000));

// const v1 = 5;
// const v2 = 10;

// v1 == v2;
// console.log(v1);
// console.log(v2);

// // data types Java Script

// const value = "kabindra";

// console.log(typeof value, value);

// let name = "kabindra";
// console.log(name);

// let u1 = name;
// console.log(u1);

// console.log(name);
// console.log(u1);

// name = "sam";

// console.log(name);
// console.log(u1);

// const user = {
//   name: "kabindra",
//   address: "Sydney",
//   number: 2345678,
// };
// console.log(user);

// const u1 = user;
// user.name = "sam";

// console.log(user);
// console.log(u1);

// Numbers in Javascript

// const num = 23456789;

// console.log(num);

// const num = "jhkfllld23456";
// const val = parseFloat(num);
// console.log(typeof num, val);
// isNaN(val);
// console.log(typeof val, isNaN(val));

// const str = 'Hi i\'m is "Kabindra"  from Nepal and I live in Sydney';
// console.log(typeof str);
// console.log(str);

// const name = 'My name is "KABINDRA RANABHAT" and I Live in "SYDNEY"';

// const val = name.length;
// console.log(name);
// console.log(typeof name);
// console.log(val);
// const val2 = name.toLowerCase();
// console.log(val2);

// const val3 = name.toUpperCase();

// console.log(val3);

// console.log(name.charAt(21));

// console.log(name.lastIndexOf("a"));
// console.log(name.lastIndexOf("Y"));
// console.log(name.indexOf("Y"));
// console.log(name.replace("SYDNEY", "LONDON"));
// console.log(name.replace("KABINDRA", "SAM"));
// console.log(name.slice(12, 15));
// console.log(name.slice(-7, -4));
// console.log(name.slice(0, -8));
// console.log(name.slice(-2));
// console.log(name.slice(-2));
// console.log(name.includes("KABINDRA"));
// console.log(name.search(""));
// console.log(name.split(""));
// console.log(name.split(" "));

// Conditional Statements

// if else
//
// const pet = "cow";

// if (pet === "cat") {
//   console.log("Meaooooooooooooooo");
// } else if (pet === "dog") {
//   console.log("Woooooooooooffffffffffffffffff");
// } else if (pet === "cow") {
//   console.log("Mooooooooooooooooooooooo");
// } else {
//   console.log("ALeeaaaaaaaaaannnnnnnnnnn");
// }

// Ternary Operators

// const age = 60;

// age < 50 ? console.log("welcome") : console.log("Go home");

// const val = 11;
// val >= 12
//   ? console.log("You are Grownup category")
//   : console.log("You are a toddler");

// Arrays
// const firstArray = [
//   "Kabindra",
//   30,
//   "Sydney",
//   null,
//   undefined,
//   ["Ranabhat", 31],
//   {},
//   () => {},
// ];
// console.log(typeof firstArray, firstArray);

// const fruits = [
//   "apple",
//   "banana",
//   "cherry",
//   "DragonFruits",
//   "pineapple",
//   "orange",
//   "mango",
// ];

// // const fruitSalad = fruits[2];
// // fruits.splice(2, 0, "watermelon");

// // const NotGoodFruits = fruits.slice(3, 6);
// // console.log(typeof fruits, fruits);
// // console.log(fruits.length);
// // console.log(fruits.find[1]);
// // console.log(fruitSalad);
// // console.log(NotGoodFruits);

// // const arrangedFruits = fruits.sort();
// // // console.log(fruits.sort());

// // const val = fruits.slice(2, 4);
// // console.log(val);
// const val = fruits.slice(2, 6);
// console.log(fruits, val);

// Java Script Loops

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// while loop

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// for (let i = 0; i < 100; i++) {
//   console.log(i);
//   if (i === 50) break;
// }

// Js specific Array loops

const fruits = ["apple", "pineapple", "banana", "mango"];

// console.log(fruits);
// console.log(fruits[1]);

// for (let item of fruits) {
//   console.log(item);
// }

// const upperFruits = [];

// for (let item of fruits) {
//   upperFruits.push(item.toUpperCase());
// }

// console.log(upperFruits);

// for (let i = 0; i <= fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });
// fruits.map((item, i) => {
//   console.log(item, i);
// });

// const newData = fruits.filter((item, i) => {
//   return item.includes("n");
// });
// console.log(newData);

// const money = [12, 23, 456, 5678, 87654];
// console.log(money);
// const total = money.reduce((subTotal, item) => {
//   return subTotal + item;
// }, 0);
// console.log(total);
// console.log(total);

// const result = fruits.every((item) => {
//   console.log(item);
//   return;
// });
// console.log(result);

// const result = money.find((item) => item === 456);
// console.log(result);

// const love = new Array(50).fill("😍");
// console.log(love);

// Create an array of 50 random numbers range between 1 and 100 programmatically

// console.log(randomNumber);

// const arrayNumber = [];
// for (i = 0; i < 50; i++) {
//   const randomNumber = Math.floor(Math.random() * 100 + 1);
//   arrayNumber.push(randomNumber);
// }
// // console.log(arrayNumber);

// //Sort the above array in descending order
// arrayNumber.sort((a, b) => b - a);
// // console.log(arrayNumber);

// //get total of the array
// const total = arrayNumber.reduce((acc, num) => acc + num, 0);
// // console.log(total);

// //Divide original array in to 2 new arrays that contains even or odd numbers only each.
// const evenArg = arrayNumber.filter((item) => item % 2 === 0);
// const oddArg = arrayNumber.filter((item) => item % 2 !== 0);
// console.log(evenArg);
// console.log(oddArg);
// // remove duplicate number for the original array
// // const uniqueArray = [...new Set(arrayNumber)];
// const uniqueArray = [];
// for (let i = 0; i < arrayNumber.length; i++) {
//   // console.log(arrayNumber[i]);
//   if (!uniqueArray.includes(arrayNumber[i])) {
//     uniqueArray.push(arrayNumber[i]);
//   }
// }
// console.log(uniqueArray);

// const uniqueArrayByDefault = [...new Set(arrayNumber)];
// console.log(uniqueArrayByDefault);

// create unique array 50 numbers rang between 1 to 100 programattically
// const uniqueArray = [];
// for (let i = 0; i < 50; i++) {
//   const randomArray = Math.floor(Math.random() * 100 + 1);
//   uniqueArray.push(randomArray);
// }
// console.log(uniqueArray);

// const sortedArray = uniqueArray.sort((a, b) => b - a);
// console.log(sortedArray);

// const totalArray = uniqueArray.reduce((acc, num) => acc + num, 0);
// console.log(totalArray);

// const uniqueArray = [];

// for (let i = 0; uniqueArray.length < 99; i++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   if (!uniqueArray.includes(randomNumber)) {
//     uniqueArray.push(randomNumber);
//   }
//   console.log(i);
// }
// console.log(uniqueArray);

// JavaScript Objects

// const person = {
//   name: "Kabindra",
//   age: 30,
//   skills: ["html", "css", "javascript", ["flexBox", "gridSystem"]],
//   isMarried: true,
//   hasPet: undefined,
//   gender: null,
//   parent: {
//     f: "Basanta",
//     m: "Kamala",
//   },
// };

// console.log(person);

// // const data = person.skills;
// // const data = person.skills[1];
// // const data = person.skills[3][1];
// // const data = person.skills[3][0];
// const data = person.parent.f;
// console.log(data);

// //// Create an array of 50 random numbers range between 1 and 100 programmatically
// const randomArray = [];

// for (let i = 0; i < 50; i++) {
//   const randomNumber = Math.floor(Math.random() * 100 + 1);
//   randomArray.push(randomNumber);
// }
// console.log(randomArray);

// // //Sort the above array in descending order
// randomArray.sort((a, b) => a - b);
// console.log(randomArray);

// //// //get total of the array
// const totalArray = randomArray.reduce((acc, item) => acc + item, 0);
// console.log(totalArray);

// // //Divide original array in to 2 new arrays that contains even or odd numbers only each.

// const oddArray = randomArray.filter((item) => item % 2 !== 0);
// console.log(oddArray);

// const evenArray = randomArray.filter((item) => item % 2 === 0);
// console.log(evenArray);

// // create unique array 50 numbers rang between 1 to 100 programattically
// const uniqueArray = [];
// for (let i = 0; uniqueArray.length < 50; i++) {
//   const randomArray = Math.floor(Math.random() * 100 + 1);
//   if (!uniqueArray.includes(randomArray)) {
//     uniqueArray.push(randomArray);
//   }
//   console.log(i);
// }
// console.log(uniqueArray);

// Read the data from object

// const person = {
//   name: "sam Smith",
//   phone: 2345678,
//   address: "Sydney",
//   isMarried: true,
//   hasPet: undefined,
//   gender: null,
//   skills: ["html", "css", "javascript"],
//   bio: () => {
//     return "Hi there";
//   },
// };
// const data = person.name;
// console.log(data);

// person.name = "kabindra";
// console.log(person.name);
// person.number = 123456;
// console.log(person);
// person.address = "uk";
// console.log(person);

// console.log(person);
// delete person.phone;
// console.log(person);
// person.skills.pop();
// console.log(person);
// person.skills.push("Javascript");
// console.log(person);
// person.skills.pop();
// console.log(person);

// //Destructuring data
// const { name, phone, address } = person;
// console.log(phone);

// const { phone, address, ...properties } = person;
// // console.log(name);
// // console.log(phone);
// // console.log(skills);
// console.log(properties);
// console.log(phone);
// console.log(address);
// console.log(properties);

// const career = {
//   title: "Full Stack Engineer",
//   salary: "200k",
//   location: "Sydney",
// };

// const combo = { career };
// // console.log(combo);
// const combo2 = { ...career };
// console.log(combo);
// console.log(combo2);
// const combo3 = { ...career, ...person };
// console.log(combo3);

// Date Manuplation in JavaScript

// const today = new Date();
// console.log(today);

// console.log(typeof today);

// const today = new Date();
// // const data = today.getDay();
// // console.log(data);
// const data = today.toISOString();
// // const data = today.toLocaleDateString();
// console.log(data);

// today.setDate(today.getDate() + 10);
// console.log(today);

// Date Challange

// Create a function that Takes food and the expire date and returns on of the followings.

// const checkExp = () => {
//   // food expired
//   // //food not expired
// };

// //1// If expired ab is expired 4 days ago

// //2// If not expired you have 10 days to use this product....

// const foods = [
//   {
//     name: "Tuna",
//     exp: "2024-04-28",
//   },
//   {
//     name: "Milk",
//     exp: "2024-02-02",
//   },
// ];

// foods.map((food, i) => {
//   console.log(foods);
// // });
// const milliSecPerDay = 24 * 60 * 60 * 1000;
// const checkExp = (name, exp) => {
//   const today = Date.now();
//   const expDate = new Date(exp).getTime();

//   const expiaryDate = Math.floor((expDate - today) / milliSecPerDay);
//   if (expiaryDate < 1) {
//     return `${name} is expired ${expiaryDate} days ago`;
//   } else {
//     return ` You have ${expiaryDate} to use ${name} this product`;
//   }
// };

// const foods = [
//   {
//     name: "Tuna",
//     exp: "2024-04-28",
//   },
//   {
//     name: "milk",
//     exp: "2024-05-13",
//   },
// ];

// foods.map((food) => {
//   // console.log(food, i);

//   const result = checkExp(food);
// });
