// console.log("hi")

// // Student Object
// const student = {
//     name : "saad",
//     age : 23,
//     english : 65,
//     math : 87,
//     physics : 43,
//     getAvg (){
//         let avg = (this.english + this.math + this.physics) /3
//         console.log(`${this.name} got avg marks= ${avg}`);
//     }
// }

// student.getAvg();



// //Bank account
// const account={
//     holder:"saad hussain",
//     balance:99999,
//     deposit (amount){
//     this.balance += amount;
// console.log(`${this.holder} deposited $${amount}. New balance: $${this.balance}`);
// }
// };
// account.deposit(500);


// //shpping cart
// const cart = {
// items: ["Apple", "Banana"],
// total: 2,
// addItem(item) {
// this.items.push(item);
// this.total = this.items.length;
// console.log(`Added ${item}. Total items: ${this.total}`);
// }
// };
// cart.addItem("Orange"); 



// //Exception handling try&catch
// try {
// // Code that might cause an error
// } catch (err) {
// // Code that runs if an error occurs
// }


// // Handling Missing Variables
// console.log("Program starts");
// try {
// console.log(undefinedVariable); // This doesn't exist!
// } catch (err) {
// console.log("Caught an error: Variable not found");
// }
// console.log("Program continues");


// //Division Error
//     function divide(a, b) {
// try {
// if (b === 0) {
// throw "Cannot divide by zero!";
// }
// return a / b;
// } catch (err) {
// console.log("Error:", err);
// return null;
// }
// }
// console.log(divide(10, 2)); // 5
// console.log(divide(10, 0)); // Error: Cannot divide by zero!


// //User Input Validation
// try {
// // Code that might cause an error
// } catch (err) {
// // Code that runs if an error occurs
// }

// javascript
// console.log("Program starts");
// try {
// console.log(undefinedVariable); // This doesn't exist!
// } catch (err) {
// console.log("Caught an error: Variable not found");
// }
// console.log("Program continues"); // This runs!

// javascript
// function divide(a, b) {
// try {
// if (b === 0) {
// throw "Cannot divide by zero!";
// }
// return a / b;
// } catch (err) {
// console.log("Error:", err);
// return null;
// }
// }
// console.log(divide(10, 2)); // 5
// console.log(divide(10, 0)); // Error: Cannot divide by zero!



// // user input validation
// function validateAge(age) {
// try {
// if (age < 0) {
// throw "Age cannot be negative!";
// }
// if (age > 150) {
// throw "Age seems unrealistic!";
// }
// console.log(`Valid age: ${age}`);
// } catch (err) {
// console.log("Validation Error:", err);
// }
// }
// validateAge(25); // Valid age: 25
// validateAge(--5); // Validation Error: Age cannot be negative!
// validateAge(200); // Validation Error: Age seems unrealistic!


// //Arrow function
// const sum = function(a, b) {
// return a + b;
// };
// const sum = (a, b) => {
// return a + b;
// };

// const sum = (a, b) => a + b;



// // Basic Arrow Function
// const greet = (name) => {
// return `Hello, ${name}!`;
// };
// console.log(greet("John")); // Hello, John!


// //implicit function
// const square = (num) => num * num;
// console.log(square(5)); // 25
// console.log(square(10)); // 100


// // Single Parameter (No Parentheses Needed)
// const double = num => num * 2;
// console.log(double(7)); // 14


// //Multiple Statements
// const calculateTotal = (price, tax) => {
// let total = price + (price * tax);
// return total;
// };
// console.log(calculateTotal(100, 0.1)); // 110


// //Array Methods with Arrow Functions
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
// let evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]



// //Timing Events: setTimeout & setInterval
// console.log("Starting...");
// setTimeout(() => {
// console.log("This appears after 3 seconds");
// }, 3000);
// console.log("Continuing...");


// //Delay greeting
// function greetUser(name) {
// setTimeout(() => {
// console.log(`Welcome back, ${name}!`);
// }, 2000);
// }
// greetUser("Alice"); // Appears after 2 seconds



// // Repeating Counter
// let count = 0;
// let id = setInterval(() => {
// count++;
// console.log(`Count: ${count}`);
// if (count === 5) {
// clearInterval(id); // Stop after 5 times
// console.log("Counter stopped!");
// }
// }, 1000);


// //lock display
// let seconds = 0;
// setInterval(() => {
// seconds++;
// console.log(`Elapsed time: ${seconds} seconds`);
// }, 1000);



// //Stoping interval
// let intervalId = setInterval(() => {
// console.log("Repeating message...");
// }, 2000);
// // Stop it after 10 seconds
// setTimeout(() => {
// clearInterval(intervalId);
// console.log("Interval stopped!");
// }, 10000);



// //this with Arrow Functions
// //The Problem with Regular Functions
// const student = {
// name: "Alex",
// marks: 95,
// getName: function() {
// return this.name; // Works! 'this' = student
// },
// getMarks: () => {
// return this.marks; // Doesn't work! 'this' = global scope
// }
// };
// console.log(student.getName()); // "Alex"
// console.log(student.getMarks()); // undefined


// //Arrow function in callbacks
// const user = {
// name: "Sarah",
// greet: function() {
// // Regular function loses 'this' in setTimeout
// setTimeout(function() {
// console.log(`Hello ${this.name}`); // undefined!
// }, 1000);
// }
// };
// user.greet();


// //Solution with arrow function
// const user = {
// name: "Sarah",
// greet: function() {
// // Arrow function keeps 'this' from parent
// setTimeout(() => {
// console.log(`Hello ${this.name}`); // Works!
// }, 1000);
// }
// };
// user.greet(); // Hello Sarah (after 1 second)


// //Practical usecase
// const counter = {
// count: 0,
// start: function() {
// // Arrow function maintains 'this' reference to counter
// setInterval(() => {
// this.count++;
// console.log(this.count);
// }, 1000);
// }
// };
// counter.start(); // Counts: 1, 2, 3, 4...



// //when NOT to use arrow function
// const calculator={
//     value:0,
//     add:(num)=>{
//         this.value +=num;
//     },
//     subtract : function (num){
//     this.num-=num;
//     }
// };
