// try ths in the console:
// 1+2
// console.log(1+2)

// console.log(3*4)
// console.log(1-5)
// console.log(2/4)
// console.log(5**9)
// console.log(9%8)
// console.log(2&7)
// console.log(2%8)
// console.log("hello"+"world")


// let age=23;
// console.log(age)
// let name="bunny"
// console.log(name)
// let islStudent=true;
// console.log(islStudent)
// let score=95;
// console.log(typeof age,typeof name,typeof islStudent,typeof score)
// console.log(age,name,islStudent,score)
// let x=10;
// console.log(x)
// let age=23;
// let price=99.99;
// let temperature=-15;
// let distance=1.5e6;
// console.log(age,price,temperature,distance)
// let name="tony Stark";
// let greeting="Hello World";
// let message="Welcome,${Name}";
// console.log(name,greeting,message)
// let isStudent = true;
// let isLoggedIn = false;
// let hasPermission = true;
// console.log(true,false,true)
// let score;
// console.log(score); 
// console.log(typeof score);
// let data=null;
// let user=null;
// console.log(data,user)

// let bigNumber = 9007199254740991n; // Note the 'n' at the end
// let huge = 12345678901234567890n;
// console.log(bigNumber,huge)
// console.log(typeof 25); // "number"
// console.log(typeof "hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (this is a JavaScript quirk!)
// console.log(typeof 123n);

// let firstName = "Tony";
// let lastName = "Stark";
// let fullName = firstName + " " + lastName; // "Tony Stark"
// let age = 23;
// let message = "I am " + age + " years old";
// console.log(firstName,lastname)

// user="shark"
// user="bunny"
// console.log(user)

// // Dividing zero by zero
// let result1 = 0 / 0; // NaN
// // Invalid mathematical operations
// let result2 = Math.sqrt(--1); // NaN (square root of negative)
// // Converting non-numeric strings to numbers
// let result3 = Number(23); // NaN
// let result4 = string("hello"); // NaN
// // Operations with undefined
// let x;
// let result5 = x * 5;
// console.log(result1,result2,result3,result4,result5)
// let x = NaN;
// console.log(x + 1); 
// console.log(x * 5); 
// console.log(x / 2); 
// console.log(x  1);

// console.log(typeof NaN); 

// console.log(NaN === NaN); // false
// console.log(NaN == NaN); // false
// To check if a value is NaN, use:
// console.log(isNaN(NaN)); // true
// console.log(Number.isNaN(NaN)); 

// let value = 0 / 0;
// // Method 1: isNaN() - converts value to number first
// console.log(isNaN(value)); // true
// // Method 2: Number.isNaN() - doesn't convert (recommended)
// console.log(Number.isNaN(value)); // true
// // Why Number.isNaN() is better:
// console.log(isNaN("hello")); // true (converts "hello" to number first)
// console.log(Number.isNaN("hello"));

// Example 1: Multiplication before addition
// let result1 = 5 + 3 * 2;
// // Step 1: 3 * 2 = 6
// // Step 2: 5 + 6 = 11
// console.log(result1); // 11
// // Example 2: Using parentheses to change order
// let result2 = (5 + 3) * 2;
// // Step 1: (5 + 3) = 8
// // Step 2: 8 * 2 = 16
// console.log(result2); // 16
// // Example 3: Complex expression
// let result3 = (5 + 2) / 7 + 1 * 2;
// // Step 1: (5 + 2) = 7
// // Step 2: 7 / 7 = 1
// // Step 3: 1 * 2 = 2
// // Step 4: 1 + 2 = 3
// console.log(result3); // 3
// // Example 4: Exponentiation has high precedence
// let result4 = 2 + 3 ** 2;
// // Step 1: 3 ** 2 = 9
// // Step 2: 2 + 9 = 11
// console.log(result4); // 11
// // Example 5: Same precedence, left to right
// let result5 = 10 / 2 * 3;
// // Step 1: 10 / 2 = 5 (left to right)
// // Step 2: 5 * 3 = 15
// console.log(result5); // 15


// let squared = 5 ** 2; // 25 (5 squared)
// let cubed = 2 ** 3; // 8 (2 cubed)
// let power = 10 ** 3;
// console.log(squared,cubed,power)

// let balance = 1000;
// balance -= 200; // Same as: balance = balance - 200
// console.log(balance); // 800

// let price = 50;
// price *= 2; // Same as: price = price * 2
// console.log(price); // 100

// let total = 100;
// total /= 4; // Same as: total = total / 4
// console.log(total); // 25

// let number = 17;
// number %= 5; // Same as: number = number % 5
// console.log(number); // 2

// let base = 2;
// base **= 3; // Same as: base = base ** 3
// console.log(base); // 8

// // Accumulating a total
// let total = 0;
// total += 100; // Add first item
// total += 250; // Add second item
// total += 75; // Add third item
// console.log(total); // 425
// // Doubling a value multiple times
// let value = 5;
// value *= 2; // 10
// value *= 2; // 20
// value *= 2; // 40


// // Unary operator
// let count = 5;
// let result = count++;
// console.log(result); // 5
//  (uses old value)
// console.log(count); // 6 (now incremented)
// // Step by step:
// // 1. result = count (result gets 5)
// // 2. count = count + 1 (count becomes 6)

// Pre-increment (++variable)
// let count = 5;
// let result = ++count;
// console.log(result); // 6 (uses new value)
// console.log(count); // 6 (incremented)
// // Step by step:
// // 1. count = count + 1 (count becomes 6)
// // 2. result = count (result gets 6)


// let num = 5;
// let newNum = num++; // newNum = 5, num = 6
// newNum = ++num; // num = 7, newNum = 7
// console.log(num); // 7
// console.log(newNum); // 7
// // Step by step:
// // Line 2: newNum gets 5 (post-increment), then num becomes 6
// // Line 3: num becomes 7 (pre-increment), then newNum gets 7

// // 1.Loop counter
// let i = 0;
// while (i < 5) {
// console.log(i);
// i++; // Increment after each iteration
// }

// // 2.Counting down
// let countdown = 10;
// while (countdown > 0) {
// console.log(countdown);
// // countdown----; // Decrement
// }
// console.log("Blast off!");

// // 3. Simple Incrementing
// // Avoid confusion: Don't use increment/decrement in complex expressions
// // Use standalone: Best used on their own line for clarity

// // Essential Concepts to Remember
// // Variables are containers for storing data values
// // JavaScript has 7 primitive data types: Number, String, Boolean, Undefined, Null, BigInt, Symbol
// // typeof operator tells you the data type of a value
// javascript
// let pageViews = 100;
// pageViews++; // Now 101


// // Bad (confusing)
// let x = 5;
// let y = x++ + ++x; // Hard to read!
// // Good (clear)
// let x = 5;
// x++;
// x++;
// let y = x + x;

// javascript
// // Preferred
// let count = 10;
// count++;
// console.log(count);
// // Avoid (unless you have a good reason)
// let result = count++ + ++count;


// // Variables
// let age = 23;
// const PI = 3.14;
// // Data Types
// typeof 42 // "number"
// typeof "hello" // "string"
// typeof true // "boolean"
// typeof undefined // "undefined"
// typeof null // "object" (quirk)
// // Arithmetic
// 10 + 5 // 15
// 10 -- 5 // 5
// 10 * 5 // 50
// 10 / 5 // 2
// 10 % 3 // 1
// 2 ** 3 // 8
// // Assignment
// x += 5 // x = x + 5
// x -= 5 // x = x - 5
// x *= 5 // x = x * 5
// x /= 5 // x = x / 5

// // Increment/Decrement
// x++ // x = x + 1 (post)
// ++x // x = x + 1 (pre)
// x---- // x = x - 1 (post)
// ----x // x = x - 1 (pre)
// // Checking for NaN
// isNaN(value) // true if NaN
// Number.isNaN(value) // better method

