// // Variable Declaration and Data Types
// let firstName = "Saad";
// let age = 18;
// let isStudent = true;
// let favoriteColor = "Blue";      
// let numberOfSiblings = 2;       
// console.log(firstName);
// console.log(age);
// console.log(isStudent);
// console.log(favoriteColor);
// console.log(numberOfSiblings);


// // Type checking
// console.log(typeof firstName)
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof favoriteColor);
// console.log(typeof numberOfSiblings);


// // Understanding undefined vs null
// // A.Undefined
// let score;
// console.log(score);
// console.log(typeof score);
// // b.Null
// let winner = null;
// console.log(winner);
// console.log(typeof winner);
// //C.Difference between undefined vs null
// let score;        // undefined
// let winner = null; // intentionally empty


// //Working with Strings
// let firstName = "Syed";
// let lastName = "Hussain";
// let fullName = firstName + " " + lastName;
// console.log(fullName);


// // Type Conversion Challenge
// let a = "5";
// let b = 3;
// let result = a + b;
// console.log(result);   //53
// console.log(typeof result);  //string

// // Aritimatic operation
// let a = 10;
// let b = 3;
// console.log("Sum:", a + b);
// console.log("Difference:", a - b);
// console.log("Product:", a * b);
// console.log("Quotient:", a / b);
// console.log("Remainder:", a % b);

// //Temperature
// let celsius = 25;
// let fahrenheit = (celsius * 9 / 5) + 32;
// console.log("25°C is equal to " + fahrenheit + "°F");

// //Circle Calculation
// let radius = 5;
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius ** 2;
// console.log("Circumference:", circumference.toFixed(2));
// console.log("Area:", area.toFixed(2));

// // Shiping bill calculator
// let notebooks = 3 * 45;
// let pens = 2 * 15;
// let backpack = 1 * 850;
// let total = notebooks + pens + backpack;
// console.log("Notebooks:", notebooks);
// console.log("Pens:", pens);
// console.log("Backpack:", backpack);
// console.log("Total Cost: ₹" + total);

// //Even Odd checker
// let number = 10;
// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// //fix the operation
// let result=10+20*5/3;  //50

// //Create a formula
// let number = 15;
// number = number + 5;
// number = number * 3;
// number = number - 10;
// number = number / 4;
// console.log(number);  //12.5

// //Assignment operator
// let salary = 0;
// salary += 15000;  // Salary received
// salary -= 8000;   // Rent paid
// salary += 5000;   // Bonus received
// salary -= 3000;   // Shopping
// console.log("Final balance:" + salary);

// //compound Intrest
// let amount = 10000;
// // Year 1
// amount *= 1.10;
// console.log("Year 1:", amount);  //Year 1: 11000
// // Year 2
// amount *= 1.10;
// console.log("Year 2:", amount);  //Year 2: 12100
// // Year 3
// amount *= 1.10;
// console.log("Year 3:", amount);  //Year 3: 13310

// //post vs pre-increment
//post-increment
// let x = 10;
// let y = x++;
// console.log("x:", x, "y:", y);  //x: 11 y: 10
//pre-increment
// let a = 10;
// let b = ++a;
// console.log("a:", a, "b:", b);  //a: 11 b: 11


// // Detecting NaN
// let value1 = 100;
// let value2 = "test" / 2;
// let value3 = 0 / 0;
// let value4 = "123";
// console.log(value1, typeof value1);
// console.log(value2, typeof value2);
// console.log(value3, typeof value3);
// console.log(value4, typeof value4);