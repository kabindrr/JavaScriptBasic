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

for (let i = 0; i < 5; i++) {
  function print() {
    console.log(i);
  }
  print();
}
