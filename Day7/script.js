// function say() {
//   console.log("hello");
// }
// say();
// function shah(){
//     console.log("Tiger zinda hai")
// }
// shah();

// function greet(){
//     console.log("welcome to javascript")
// }
// greet();

// function showMessage(){
//     console.log("learning function is fun!")
// }
// showMessage();

// function saadIntroduction(){
//     console.log("My name is saad hussian")
//     console.log("my  age is 23")
//     console.log("I live in hyderabad")
// }
// saadIntroduction();

// function functionName(parameter1, parameter2) {
// // code that uses the parameters
// }

// function greetUser(name) {
// console.log("Hello, " + name + "!");
// }
// greetUser("saad");
// greetUser("shahrukh");
// greetUser("osama");
// greetUser("faizaan");
// greetUser("sahil");
// greetUser("burhan");

// function sum(a,b){
//     let sum = a+b;
//     console.log("sum is:" + sum);
// }
// sum(2,7);
// sum(9,9);

// function calcAverage(a,b,c){
//     let avg =(a+b+c)/1;
//     console.log(avg);
// }
// calcAverage(10,20,30);
// calcAverage(70,80,90);

// function createMessage(name,age){
//     console.log(name + " is " + age + " is year old");
// }
// createMessage("shahrukh",25);
// createMessage("burhan", 34);

// function calculateArea(length, width) {
// let area = length * width;
// console.log("Area is: " + area);
// }
// calculateArea(5, 10);
// calculateArea(7, 3);
// calculateArea(8, 3);
// calculateArea(9, 3);

// //The return keyword

// // Return sum of two numbers
// function sum(a, b) {
// return a + b;
// }
// let result = sum(10, 5);
// console.log(result); // Output: 15
// let total = sum(100, 200);
// console.log(total); // Output: 300

// // Return product of two numbers
// function multiply(x, y) {
// return x * y;
// }
// let answer = multiply(4, 5);
// console.log(answer); // Output: 20
// console.log(multiply(3, 7)); // Output: 21

// // Code after return never runs
// function test() {
// return 10;
// console.log("This will never print");
// return 20; // This is also ignored
// }
// let value = test();
// console.log(value); // Output: 10

// //Using return value a calculations
// function getPrice(){
//     return 50;
// }
// let price= getPrice();
// let tax= price * 100;
// let total= price + tax;
// console.log(total);

// // Return string
// function getGreeting(name) {
// return "Hello, " + name;
// }
// let message = getGreeting("Saad");
// console.log(message); // Output: Hello, Alice
// console.log(getGreeting("Amer")); // Output: Hello, Bob

// //Understanding scope
// function showScore() {
// let score = 100; // Function scope
// console.log(score); // Works!
// }
// showScore(); // Output: 100
// console.log(score); // Error: score is not defined

// //Each function has its own scope
// function func1() {
// let x = 10;
// console.log(x); // 10
// }
// function func2() {
// let x = 20;
// console.log(x); // 20
// }
// func1(); // Output: 10
// func2(); // Output: 20

// //block scope
// //block scope if statement
// (true) {
// let temp = 42;
// console.log(temp); // Works: 42
// }
// console.log(temp); // Error: temp is not defined

// //block scope with loops
// for (let i = 0; i < 3; i++) {
// console.log(i); // 0, 1, 2
// }
// console.log(i); // Error: i is not defined

// //bliock scope with curly braces
// {
// let secret = "Hidden";
// console.log(secret); // Works: Hidden
// }
// console.log(secret); // Error: secret is not defined

// //Lexical scope
// function outer() {
// let x = 5;
// function inner() {
// console.log(x); // Inner can see 'x'
// }
// inner();
// }
// outer(); // Output: 5

// //Multipe levels of nesting
// function level1() {
// let a = 10;
// function level2() {
// let b = 20;
// function level3() {
// console.log(a); // Can see 'a'
// console.log(b); // Can see 'b'
// }
// level3();
// }
// level2();
// }
// level1();
// // Output:
// // 10
// // 20

// //Outer cannot access inner variales
// function outer() {
// function inner() {
// let secret = "Hidden";
// }
// inner();
// console.log(secret); // Error: secret is not defined
// }
// outer();

// //Using outer paramerts in inner function
// function greet(name) {
// function createMessage() {
// return "Hello, " + name;
// }
// console.log(createMessage());
// }
// greet("Saad"); // Output: Hello, Saad

// //Function expreesion
// const multiply = function(a, b) {
// return a * b;
// };
// console.log(multiply(4, 5)); // Output: 20
// console.log(multiply(10, 3)); // Output: 30

// //function expreesion with greetings
// const sayHi = function(name) {
// console.log("Hi, " + name + "!");
// };
// sayHi("sahark"); // Output: Hi, sahark!
// sayHi("Sahil"); // Output: Hi, Sahil!

// //Storing different functions
// const add = function(a, b) {
// return a + b;
// };
// const subtract = function(a, b) {
// return a -- b;
// };
// console.log(add(10, 5)); // Output: 15
// console.log(subtract(10, 5)); // Output: 5



// //Higher order function
// function repeatTask(fucn, n) {
//   for (let i = 1; i < n; i++) {
//     func();
//   }
// }

// const alertUser = () => {
//   console.log("Alert!");
// };
// repeatTask(alertUser,3);


// //Apply discount to price
// function applyDiscount(price, discountFunc) {
// return discountFunc(price);
// }
// const tenPercent = (price) => price * 0.9;
// const twentyPercent = (price) => price * 0.8;
// console.log(applyDiscount(100, tenPercent)); // Output: 90
// console.log(applyDiscount(100, twentyPercent)); // Output: 80


// //Excecute different operations
// function calculate(a, b, operation) {
// return operation(a, b);
// }
// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;
// console.log(calculate(5, 3, add)); // Output: 8
// console.log(calculate(5, 3, multiply)); // Output: 15



// //Procces array element
// function processArray(arr, processor) {
// for (let i = 0; i < arr.length; i++) {
// processor(arr[i]);
// }
// }
// const printDouble = (num) => {
// console.log(num * 2);
// };
// processArray([1, 2, 3], printDouble);
// // Output:
// // 2
// // 4
// // 6


// //Methods
// const car = {
// brand: "Tesla",
// start: function() {
// console.log("Engine on");
// },
// stop: function() {
// console.log("Engine off");
// }
// };
// car.start(); // Output: Engine on
// car.stop(); // Output: Engine off



// //Modern Shorthand Syntax (Preferred)
// const mathTools = {
// add(a, b) {
// return a + b;
// },
// subtract(a, b) {
// return a -- b;
// }
// };
// console.log(mathTools.add(5, 3)); // Output: 8
// console.log(mathTools.subtract(10, 4)); // Output: 6



// //Calculator Object
// const calculator = {
// add(a, b) {
// return a + b;
// },
// multiply(a, b) {
// return a * b;
// }
// };
// console.log(calculator.add(10, 5)); // Output: 15
// console.log(calculator.multiply(4, 7)); // Output: 28



// //Person object with methods
// const person = {
// name: "Alice",
// greet() {
// console.log("Hello, I am " + this.name);
// },
// sayAge(age) {
// console.log("I am " + age + " years old");
// }
// };
// person.greet(); // Output: Hello, I am Alice
// person.sayAge(25); // Output: I am 25 years old


// //Bank account object
// const account = {
// balance: 1000,
// deposit(amount) {
// this.balance = this.balance + amount;
// console.log("New balance: " + this.balance);
// },
// withdraw(amount) {
// this.balance = this.balance -- amount;
// console.log("New balance: " + this.balance);
// }
// };
// account.deposit(500); // Output: New balance: 1500
// account.withdraw(200); // Output: New balance: 1300


// //Sring formatter object
// const formatter = {
// toUpper(str) {
// return str.toUpperCase();
// },
// toLower(str) {
// return str.toLowerCase();
// },
// trim(str) {
// return str.trim();
// }
// };
// console.log(formatter.toUpper("hello")); // Output: HELLO
// console.log(formatter.toLower("WORLD")); // Output: world
// console.log(formatter.trim(" spaces ")); // Output: spaces


// //Counter object
// const counter = {
// count: 0,
// increment() {
// this.count++;
// console.log("Count: " + this.count);
// },
// reset() {
// this.count = 0;
// console.log("Counter reset");
// }
// };
// counter.increment(); // Output: Count: 1
// counter.increment(); // Output: Count: 2
// counter.reset(); // Output: Counter reset