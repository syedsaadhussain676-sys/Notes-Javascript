// Introduction to loops
// console.log("Hello World");
// console.log("Hello Wolrd");
// console.log("Hello World");

//With a loop
// for (let i = 0; i < 100; i++) {
//   console.log("Hello");
// }
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// for (let i = -1; i <= 100; i++) {
//   console.log(i);
// }

// Print Odd Numbers from 1 to 15
// for (let i = 1; i <= 15; i += 2) {
//   console.log(i);
// }
// Print Even Numbers from 2 to 10
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Blast off!");

// Infinite Loops (Warning!)
// // ❌ INFINITE LOOP - Don't run this!
// for (let i = 1; i <= 5; ) {
// console.log(i);
// // i never changes, so i <= 5 is always true
// }
// // ❌ INFINITE LOOP
// for (let i = 1; i >= 0; i++) {
// console.log(i);
// // i keeps increasing, so i >= 0 is always true
// }
// for (let i = 1; i <= 5; i++) {
// console.log(i);
// }
// for (let i = 10; i >= 0; i--) {
// console.log(i);
// }
// let count = 4;
// while (count < 5) {
//   console.log(count);
//   count++; // Now it will stop at 5
// }

//The While Loop
// // Initialization (outside the loop)
// let i = 1;
// while (condition) {
// // Code to execute
// // Updation (inside the loop)
// i++;
// }
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// let sum = 0;
// let num = 1;
// while (sum < 50) {
//   sum += num;
//   console.log(`Added ${num}, sum is now ${sum}`);
//   num++;
// }
// console.log(`Final sum: ${sum}`);
// // Output:
// // Added 1, sum is now 1
// // Added 2, sum is now 3
// // Added 3, sum is now 6
// // ...
// // Added 10, sum is now 55
// // Final sum: 55

// passwordvalidation
// let password = "";
// let attempts = 0;
// while (password !== "secret123" && attempts < 3) {
//   password = prompt("Enter password:");
//   attempts++;
//   if (password === "secret123") {
//     console.log("Access granted!");
//   } else if (attempts < 3) {
//     console.log(`Wrong password. ${3 - attempts} attempts remaining.`);
//   } else {
//     console.log("Access denied. Too many attempts.");
//   }
// }
// let number = 1000;
// while (number > 1) {
//   number = number / 2;
//   console.log(number);
// }
// // Output: 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, 0.9765625
// let target = 1000;
// let power = 1;
// let exponent = 0;
// while (power <= target) {
//   exponent++;
//   power = 2 ** exponent;
// }
// console.log(
//   `2^${exponent} = ${power} is the first power of 2 greater than ${target}`,
// );
// // Output: 2^10 = 1024 is the first power of 2 greater than 1000

// Iterating over array
// let cities = ["London", "Paris", "Tokyo", "New York", "Sydney"];
// for (let i = 0; i < cities.length; i++) {
// console.log(`${i}: ${cities[i]}`);
// }
// // Output:
// // 0: London
// // 1: Paris
// // 2: Tokyo
// // 3: New York
// // 4: Sydney
// let scores = [85, 92, 78, 95, 88];
// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
// sum += scores[i];
// }
// let average = sum / scores.length;
// console.log(`Total: ${sum}, Average: ${average}`);
// let numbers = [23, 67, 12, 89, 45, 91, 34];
// let max = numbers[0]; // Start with first element
// for (let i = 1; i < numbers.length; i++) {
// if (numbers[i] > max) {
// max = numbers[i];
// }
// }
// console.log(`Maximum value: ${max}`);
// // Output: Maximum value: 91
// let colors = ["red", "green", "blue", "yellow"];
// console.log("Original order:");
// for (let i = 0; i < colors.length; i++) {
// console.log(colors[i]);
// }
// console.log("\nReverse order:");
// for (let i = colors.length- 1; i >= 0; i--) {
// console.log(colors[i]);
// }
// // Output:
// // Original order: red, green, blue, yellow
// // Reverse order: yellow, blue, green, red
// let ages = [12, 25, 17, 30, 15, 40, 19];
// let adults = [];
// for (let i = 0; i < ages.length; i++) {
// if (ages[i] >= 18) {
// adults.push(ages[i]);
// }
// }
// console.log("Adults:", adults);
// // Output: Adults: [25, 30, 40, 19]
// let teams = [
// ["Alice", "Bob"],
// ["Charlie", "David"],
// ["Eve", "Frank"]
// ];
// for (let i = 0; i < teams.length; i++) {
// console.log(`Team ${i + 1}:`);
// for (let j = 0; j < teams[i].length; j++) {
// console.log(` - ${teams[i][j]}`);
// }
// }
// // Output:
// // Team 1:
// // - Alice
// // - Bob
// // Team 2:
// // - Charlie
// // - David
// // Team 3:
// // - Eve
// // - Frank
// let matrix1 = [
//   [1, 2],
//   [3, 4],
// ];
// let matrix2 = [
//   [5, 6],
//   [7, 8],
// ];
// let result = [];
// for (let i = 0; i < matrix1.length; i++) {
//   result[i] = [];
//   for (let j = 0; j < matrix1[i].length; j++) {
//     result[i][j] = matrix1[i][j] + matrix2[i][j];
//   }
// }
// console.log(result);

// The for...of Loop
// Iterate Through Array
// let colors = ["Red", "Blue", "Green", "Yellow"];
// for (let color of colors) {
//   console.log(color);
// }
// Sum Array ELement
// let prices = [19.99, 29.99, 49.99, 9.99];
// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(`Total:$${total.Fixed(2)}`);

// Iterate therough string
// let word = "Javascript";
// for (let char of word) {
//   console.log(word);
// }

//
// //Count Vowels on String
// let sentence = "Hello World";
// let vowels = "aeiouAEIOU";
// let count = 0;
// for (let char of sentence) {
// if (vowels.includes(char)) {
// count++;
// }
// }
// console.log(`Number of vowels: ${count}`);
// // Output: Number of vowels: 3

//Nested for...of with Array 2D
// let departments = [
//   ["Alice", "Bob", "Charlie"],
//   ["David", "Eve"],
//   ["Frank", "Grace", "Henry", "Ivy"],
// ];
// for (let department of departments) {
//   for (let employee of department) {
//     console.log(employee);
//   }
// }
// // Output: Alice, Bob, Charlie, David, Eve, Frank, Grace, Henry, Ivy

// Favorite Movie Guessing Game
// let favoriteMovie = "Inception";
// let guess = "";
// while (guess !== favoriteMovie && guess !== "quit") {
//   guess = prompt("Guess my favorite movie (or type 'quit' to give up):");
//   if (guess === favoriteMovie) {
//     console.log("🎉 Correct! You guessed it!");
//   } else if (guess === "quit") {
//     console.log(`You gave up. It was ${favoriteMovie}.`);
//   } else {
//     console.log("❌ Wrong! Try again");
//   }
// }
// // For Loop
// for (let i = 0; i < 10; i++) {
// console.log(i);
// }
// // While Loop
// let i = 0;
// while (i < 10) {
// console.log(i);
// i++;
// }
// // Do-While Loop
// let j = 0;
// do {
// console.log(j);
// j++;
// } while (j < 10);
// // For...of Loop
// let arr = [1, 2, 3];
// for (let num of arr) {
// console.log(num);
// }
// // Break
// for (let i = 0; i < 10; i++) {
// if (i === 5) break;
// console.log(i); // 0,1,2,3,4
// }
// // Continue
// for (let i = 0; i < 5; i++) {
// if (i === 2) continue;
// console.log(i); // 0,1,3,4
// }

// Nested loops with Array
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; i <= 3; i++) {
//     console.log(`i=${i},j=${j}`);
//   }
// }
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`i=${i}, j=${j}`);
//   }
// }

// /Multiplication Table
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i}*${j} = ${i * j}`);
//   }
// }
// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let row = 1; row <= 4; row++) {
//   let line = "";
//   for (let col = 1; col <= 4; col++) {
//     line += col + " ";
//   }
//   console.log(line);
// }
// let size = 5;
// for (let i = 1; i <= size; i++) {
//   let row = "";
//   for (let j = 1; j <= size; j++) {
//     row += "# ";
//   }
//   console.log(row);
// }

// For loops with nested Array
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

// Team Players
// let teams = [
//   ["Alice", "Bob"],
//   ["burhan", "shark"],
//   ["sahil", "faizan"],
// ];
// for (let i = 0; i < teams.length; i++) {
//   console.log(`Teams${i + 1}:`);
//   for (let j = 0; j < teams[i].length; j++) {
//     console.log(`${teams[i][j]}`);
//   }
// }

// //Student Grades
// let grades = [
//   [76, 66, 44],
//   [99, 87, 65],
//   [57, 87, 83],
// ];
// for (let i = 0; i < grades.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < grades[i].length; j++) {
//     sum += grades[i][j];
//   }
//   let average = sum / grades[i].length;
//   console.log(`Student${i + 1} average:${average.toFixed(2)}`);
// }

// // Sum All Elements in 2D Array
// let numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers[i].length; j++) {
//     total += numbers[i][j];
//   }
// }
// console.log(`Total sum: ${total}`);

// Find Element in 2D Array
// let data = [
// [10, 20, 30],
// [40, 50, 60],
// [70, 80, 90]
// ];
// let searchFor = 50;
// let found = false;
// for (let i = 0; i < data.length; i++) {
// for (let j = 0; j < data[i].length; j++) {
// if (data[i][j] === searchFor) {
// console.log(`Found ${searchFor} at [${i}][${j}]`);
// found = true;
// break;
// }
// }
// if (found) break;


//Nested for.of loop