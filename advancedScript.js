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

function aboutPerson(name, add) {
  return {
    name,
    add,
    bio() {
      return `My name is ${this.name} and ${this.name} lives in ${this.add} `;
    },
  };
}
const kabiBio = aboutPerson("Kabindra", "Sydney");
console.log(kabiBio.bio());

const premBio = aboutPerson("Prem", "Uk");
console.log(premBio.bio());
