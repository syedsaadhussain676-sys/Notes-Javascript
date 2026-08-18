// // Control flow 
// // If statements
// let age=20;
// if(age >= 15) {
//     console.log("Eligible fora license")
// }

// let temp=38;
// if (temp >29){
//     console.log("It's a hotside");
// }

// let password="secret123";
// if(password.length >= 8){
//     console.log("Strong password");  //Strong password
// }


// // else if statement
// if (condition1){
//     // code if condition1 is true
// } else if (condition2) {
// // code if condition2 is true
// } else if (condition3) {
// // code if condition3 is true
// }
// let score=76;
// if(score>=90){
//     console.log("Grade:A+");
// }
// else if(score>=78){
//     console.log("Grade:A");
// }
// else if(score>=56){
//     console.log("Grade:B");
// } else if (score>=33){
//     console.log("Grade:c");
// } else{
//     console.log("fail");
// }
// let speed = 85;
// if (speed > 100) {
// console.log("Severe speeding - Heavy fine");
// } else if (speed > 80) {
// console.log("Speeding - Warning");
// } else if (speed > 60) {
// console.log("Normal speed");
// }


// else Statement
// if (condition) {
// // code if true
// } else {
// // code if false
// }
// let age = 16;
// if (age >= 18) {
// console.log("You can vote");
// } else {
// console.log("You cannot vote yet");
// }
// // Output: You cannot vote yet
// let number = 7;
// if (number % 2 === 0) {
// console.log("Even number");
// } else {
// console.log("Odd number");
// }
// // Output: Odd number
// let temperature = 15;
// if (temperature > 30) {
// console.log("Hot");
// } else if (temperature > 20) {
// console.log("Warm");
// } else if (temperature > 10) {
// console.log("Cool");
// } else {
// console.log("Cold");
// }
// // Output: Cool



// // Nested Conditionals
// let marks = 85;
// if (marks >= 33) {
// if (marks >= 80) {
// console.log("Outstanding");
// } else {
// console.log("Pass");
// }
// } else {
// console.log("Better luck next time!");
// }
// // Output: Outstanding
// let age = 25;
// let isStudent = true;
// if (age < 18) {
// console.log("Child ticket: $5");
// } else {
// if (isStudent) {
// console.log("Student ticket: $8");
// } else {
// console.log("Adult ticket: $12");
// }
// }
// // Output: Student ticket: $8
// let num = 15;
// if (num > 0) {
// if (num % 2 === 0) {
// console.log("Positive even number");
// } else {
// console.log("Positive odd number");
// }
// } else if (num < 0) {
// console.log("Negative number");
// } else {
// console.log("Zero");
// }
// // Output: Positive odd number



// // Logical Operator
// // Logical AND ( && )
// let age = 25;
// let hasLicense = true;
// if (age >= 18 && hasLicense) {
// console.log("Can drive");
// } else {
// console.log("Cannot drive");
// }
// // Output: Can drive
// // Both conditions are true: 25 >= 18 (true) AND hasLicense (true)
// let score = 85;
// if (score >= 80 && score <= 100) {
// console.log("Grade A");
// }
// // Output: Grade A
// // 85 >= 80 (true) AND 85 <= 100 (true) → Both true
// let username = "admin";
// let password = "secret";
// if (username === "admin" && password === "secret") {
// console.log("Access granted");
// } else {
// console.log("Access denied");
// }
// // Output: Access granted


// // Logical OR ( || )
// let day = "Saturday";
// if (day === "Saturday" || day === "Sunday") {
// console.log("It's the weekend!");
// }
// // Output: It's the weekend!
// // First condition is true, so result is true
// let age = 65;
// if (age < 5 || age > 60) {
// console.log("Free admission");
// } else {
// console.log("Regular price");
// }
// // Output: Free admission
// // age > 60 is true (65 > 60)
// let isHoliday = false;
// let isBirthday = true;
// if (isHoliday || isBirthday) {
// console.log("Day off!");
// }
// // Output: Day off!
// // isBirthday is true


// // Logical NOT (!)
// let isLoggIn=false;
// if(!isLoggIn) {
//     console.log("please log in")
// }
// // Output: Please log in
// // !false = true
// let isWeekend= false;
// if(!isWeekend) {
//     console.log("Time to work!");   
// }
// // Output: Time to work!
// console.log(!(5 > 3)); // false (inverts true)
// console.log(!(10 < 2)); // true (inverts false)
// console.log(!true); // false
// console.log(!false); // true
// let username = "";
// if (!username) {
// console.log("Username is required");
// }
// // Output: Username is required
// // empty string is falsy, !falsy = true
// let age = 25;
// let isCitizen = true;
// let hasVoted = false;
// if (age >= 18 && isCitizen && !hasVoted) {
// console.log("Eligible to vote");
// }
// // Output: Eligible to vote
// // age >= 18 (true) AND isCitizen (true) AND !hasVoted (true) = true
// let age = 70;
// let isStudent = false;
// if (age > 60 || isStudent) {
// console.log("10% discount applies");
// }
// // Output: 10% discount applies
// // age > 60 is true



// //Boolean truethyvs fasly
// if ("hello") {
// console.log("Truthy!"); // This runs
// }
// if (0) {
// console.log("This won't run"); // 0 is falsy
// }
// if ("") {
// console.log("This won't run"); // Empty string is falsy
// }
// if ([]) {
// console.log("Arrays are truthy!"); // This runs
// }
// // Output:
// // Truthy!
// // Arrays are truthy!
// let score = 0;
// if (score) {
// console.log("You have " + score + " points");
// } else {
// console.log("No points yet");
// }
// // Output: No points yet
// // 0 is falsy



// //Switch statement
// switch (expression) {
// case value1:
// // code if expression === value1
// break;
// case value2:
// // code if expression === value2
// break;
// default:
// // code if no cases match
// }let signal = "yellow";
// switch(signal) {
// case "red":
// console.log("Stop");
// break;
// case "yellow":
// console.log("Caution");
// break;
// case "green":
// console.log("Go");
// break;
// default:
// console.log("Invalid Signal");
// }
// // Output: Caution
// let day = 3;
// switch(day) {
// case 1:
// console.log("Monday");
// break;
// case 2:
// console.log("Tuesday");
// break;
// case 3:
// console.log("Wednesday");
// break;
// case 4:
// console.log("Thursday");
// break;
// case 5:
// console.log("Friday");
// break;
// default:
// console.log("Weekend");
// }
// // Output: Wednesday
// let day = "Saturday";
// switch(day) {
// case "Saturday":
// case "Sunday":
// console.log("Weekend!");
// break;
// case "Monday":
// case "Tuesday":
// case "Wednesday":
// case "Thursday":
// case "Friday":
// console.log("Weekday");
// break;
// default:
// console.log("Invalid day");
// }
// // Output: Weekend!



// // User Interaction: alert() and prompt()
// alert("your message here")
// alert("welcome the our vehicle")
// let userName = "Alice";
// alert("Hello, " + userName + "!");
// // Shows: Hello, Alice!
// let score = 95;
// alert(`Your score is ${score}!`);
// // Shows: Your score is 95!

// //prompt
// let variable = prompt("Your question");
// let age = prompt("Enter your age:");
// console.log(typeof age); // "string"
// // Convert to number
// let ageNum = Number(age);
// console.log(typeof ageNum); // "number"
// let ageStr = prompt("Enter your age:");
// let age = Number(ageStr);
// if (age >= 18) {
// alert("You are an adult");
// } else {
// alert("You are a minor");
// }
// let temp = Number(prompt("What's the temperature?"));
// if (temp > 30) {
// alert("It's hot!");
// } else if (temp > 20) {
// alert("It's warm");
// } else {
// alert("It's cold");
// }let score = Number(prompt("Enter your score:"));
// let grade;
// if (score >= 90) {
// grade = "A";
// } else if (score >= 80) {
// grade = "B";
// } else if (score >= 70) {
// grade = "C";
// } else {
// grade = "F";
// }
// alert(`Your grade is: ${grade}`);
// let username = prompt("Enter username:");
// let password = prompt("Enter password:");
// if (username === "admin" && password === "1234") {
// alert("Login successful!");
// } else {
// alert("Invalid credentials");
// }



// // if statement
// if (condition) { }
// // if-else
// if (condition) { } else { }
// // if-else if-else
// if (condition1) { }
// else if (condition2) { }
// else { }
// // Logical AND
// if (condition1 && condition2) { }
// // Logical OR
// if (condition1 || condition2) { }
// // Logical NOT
// if (!condition) { }
// // Switch
// switch(variable) {
// case value1:
// // code
// break;
// case value2:
// // code
// break;
// default:
// // code
// }
// // User interaction
// alert("Message");
// let input = prompt("Question");
// let num = Number(prompt("Number?"));
