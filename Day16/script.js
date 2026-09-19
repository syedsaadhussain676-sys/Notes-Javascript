// //Introduction to Hoisting

// //The magic of javascript

// var x = 7;
// function getName() {
// console.log("Namaste JavaScript");
// }
// getName(); // Output: "Namaste JavaScript"
// console.log(x); // Output: 7

// getName(); // Output: "Namaste JavaScript"
// console.log(x); // Output: undefined
// var x = 7;
// function getName() {
// console.log("Namaste JavaScript");
// }

// //Understanding undefined vs not defined
// getName();
// console.log(x); // undefined
// var x = 7;
// function getName() {
// console.log("Namaste JavaScript");
// }
// getName();
// console.log(x); // ReferenceError: x is not defined
// function getName() {
// console.log("Namaste JavaScript");
// }

// //How functions are hoisted
// //logging a function
// console.log(getName);
// function getName() {
// console.log("Namaste JavaScript");
// }
// console.log(getName); // Prints the entire function
// function getName() {
// console.log("Namaste Javascript");
// }

// // Behind the Scenes - Execution Context
// // 1. Memory Creation Phase (also called Creation Phase)
// // 2. Code Execution Phase
// console.log(x); // undefined
// getName(); // "Namaste JavaScript"
// var x = 7;
// function getName() {
// console.log("Namaste JavaScript");
// }
// console.log(x); // 7
// getName(); // Works perfectly!
// console.log(getName); // Prints entire function code
// function getName() {
// console.log("Namaste JavaScript");
// }
// getName(); // TypeError: getName is not a function
// console.log(getName); // undefined
// var getName = () => {
// console.log("Namaste JavaScript");
// }
// getName(); // TypeError: getName is not a function
// console.log(getName); // undefined
// var getName = function() {
// console.log("Namaste JavaScript");
// }

// //Introduction to let and const
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;
// console.log(a); // 10
// console.log(b); // undefined
// var b = 10;
// console.log(b); // 10

// //Memory Allocation - var vs let and const
// var b = 10;
// console.log(window.b); // 10
// console.log(b); // 10
// let a = 10;
// console.log(window.a); // undefined (not a property of window)
// console.log(a); // 10
// Memory during execution:
// Global Object (window):
// ├── b: 10 (var)
// Separate Memory Space (Script):
// ├── a: 10 (let)

// // ↓ TDZ for 'a' starts here
// // ↓
// // ↓
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// // ↓
// // ↓
// let a = 10; // ← TDZ for 'a' ends here
// console.log(a); // 10 - Now accessible

// // Good practices
// const PI = 3.14159; // Value won't change
// const userName = "John"; // Value won't change
// let counter = 0; // Value will change
// let isLoggedIn = false; // Value will change
// // Avoid (old style)
// var x = 10;
// // Some code
// // Some code
// console.log(a); // ReferenceError
// // More code
// let a = 10;
// let a = 10; // Declare and initialize at the top
// // Now use it anywhere below
// console.log(a); // 10
// // Rest of your code
// let a; // Declare at top
// a = 10; // Initialize immediately or soon after
// console.log(a); // 10

// //Mixed hoisting
// console.log(a); // undefined (var)
// console.log(b); // ReferenceError (let in TDZ)
// var a = 10;
// let b = 20;

// //function declaration types
// // Traditional function
// greet(); // "Hello!"
// function greet() {
// console.log("Hello!");
// }
// // Arrow function
// sayHi(); // TypeError: sayHi is not a function
// var sayHi = () => {
// console.log("Hi!");
// }
// // Function expression
// welcome(); // TypeError: welcome is not a function
// var welcome = function() {
// console.log("Welcome!");
// }

// //Global object
// var globalVar = "I'm global";
// let blockVar = "I'm not global";
// const constVar = "I'm also not global";
// console.log(window.globalVar); // "I'm global"
// console.log(window.blockVar); // undefined
// console.log(window.constVar); // undefined

// //Const with Ojbects
// const person = {
// name: "John",
// age: 30
// };
// // This is allowed (modifying properties)
// person.age = 31;
// person.city = "New York";
// console.log(person); // { name: "John", age: 31, city: "New York" }
// // This is NOT allowed (reassigning the variable)
// person = { name: "Jane" }; // TypeError: Assignment to constant variable

// //CORE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// //Understanding the core problem
// // Call Stack
// // The place where JavaScript code currently executes
// // Follows the LIFO (Last In, First Out) principle
// // Can only execute one function at a time
// // When a function is called, it's pushed onto the stack
// // When a function completes, it's popped off the stack

// function first() {
// console.log("First");
// }
// function second() {
// first();
// console.log("Second");
// }
// second();

// // while (true) {
// // if (Call Stack is empty) {
// // if (Microtask Queue has tasks) {
// // Move all tasks from Microtask Queue to Call Stack
// // } else if (Callback Queue has tasks) {
// // Move one task from Callback Queue to Call Stack
// // }
// // }
// // }

// //Microtasks vs. Macrotasks: Understanding Priority
// console.log("1. Start");
// setTimeout(() => {
// console.log("2. Timer Callback");
// }, 0); // Even with 0ms delay!
// Promise.resolve().then(() => {
// console.log("3. Promise Resolved");
// });
// console.log("4. End");

// console.log("Script Start");
// setTimeout(() => {
// console.log("Timeout 1");
// }, 0);
// Promise.resolve()
// .then(() => {
// console.log("Promise 1");
// return Promise.resolve();
// })
// .then(() => {
// console.log("Promise 2");
// });
// setTimeout(() => {
// console.log("Timeout 2");
// }, 0);
// Promise.resolve().then(() => {
// console.log("Promise 3");
// });
// console.log("Script End");
