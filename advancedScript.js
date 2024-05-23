console.log("Advanced Scripting Concepts");

////Execution Context

// var globalVar = "Global";

// function outerFunctionScop() {
//   var outerFunVar = "Outer";

//   function innerFunctionScop() {
//     var innerFunVar = "inner";

//     console.log(innerFunVar);
//     console.log(outerFunVar);
//     console.log(globalVar);
//   }
//   innerFunctionScop();
// }

// function f() {
//   let a = "a";

//   if (true) {
//     let a = "zzz";
//     console.log(a);
//   }
//   console.log(a);
// }
// f();

// for (let i = 0; i < 5; i++) {
//   function print() {
//     console.log(i);
//   }
//   print();
// }

//Object

// const person = {
//   name: "Kabindra",
//   age: "30",
//   profession: "Full stack Developer",
//   address: "Sydney",

//   bio() {
//     return `Hey this is ${this.name}, and ${this.name} lives in ${this.address}`;
//   },
// };
// console.log(person.bio());

//Factiory Function Methods

// function aboutPerson(name, add) {
//   return {
//     name,
//     add,
//     bio() {
//       return `My name is ${this.name} and ${this.name} lives in ${this.add} `;
//     },
//   };
// }
// const kabiBio = aboutPerson("Kabindra", "Sydney");
// console.log(kabiBio.bio());

// const premBio = aboutPerson("Prem", "Uk");
// console.log(premBio.bio());

// Constructor Function

// function AboutPerson(name, add) {
//   this.name = name;
//   this.add = add;
// }

// AboutPerson.prototype.bio = function () {
//   return `My name is ${this.name} and ${this.name} lives in ${this.add} `;
// };
// const kabiBio = new AboutPerson("Kabindra", "Sydney");
// console.log(kabiBio.bio());

//// Class Based OOP

// class Person {}

// This KeyWord Use Cases
// Global Context

// console.log(window, this);
// console.log(window === this);

//Functional Programming

const person = Object.freeze({
  name: "Prem",
  career: "Dented Code",
});

person.name = "Sam";
console.log(person);

const newP = { ...person, name: "kabi" };
console.log(person, newP);
