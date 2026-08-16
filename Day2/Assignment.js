// // Problem 1: Valid or Invalid?
// // Mark each identifier as Valid (✓) or Invalid (✗) and explain why:
// firstName = Valid
// // 2ndPlace =  Invalid
// user_email = Valid
// // total--price = Invaldi
// $amount  = Valid 
// // my variable = Invalid
// _privateData = Valid
// let = Invalid


// // 2, Fix variable names
// // Current (incorrect or non-standard)
// // let user name = "Alice";
// // let 1stprize = 1000;
// // let total--cost = 250;
// let USERAGE = 25;
// // Your corrected versions:
// userName = "Alice";
// firstPrize = 1000;
// totalCost = 250;
// userAge = 25;

// // 3. Naming convention practice
// // Store a person's email address
// let emailAddress = "john@example.com";
// // Store whether a user is logged in (boolean)
// let isLoggedIn = true;
// // Store the maximum number of attempts
// const maxAttempts = 3;
// // Store a student's final grade
// let finalGrade = 85;
// // Store a product's price in dollars
// let productPrice = 99.99;

// // 4. Boolean practice
// // Create a variable for "is it raining?" - Set it to false
// let isRaining = false;
// console.log(isRaining)
// // Create a variable for "is the user an adult?" (age >= 18) - Set it to true
// let isAdult = true;
// // Create a variable for "does the password match?" - Set it to false
// let passwordMatches = false;

// // 5. Dynamic typing
// let x = 10;
// console.log(typeof x); //number
// x = "Hello";
// console.log(typeof x); // string
// x = true;
// console.log(typeof x); // boolean

// // 6.String Indexing
// let language="javaScript"
// // What is the first character?
// language[0] = j
// // What is the character at index 4?
// language[4] = S
// // What is the last character? (use length)
// language[language.length -1] = t
// // What is the length of the string?
// language.length = 10

// // 7.String Creation
// // Create a string with double quotes
// let message1 = "Happy Independence Day";
// // Create a string with single quotes that says: It's a sunny day
// let message2 = 'It\'s a sunny day';
// // Create a string with double quotes that says: He said, "Hello!"
// let message3 = 'He said, "Hello!"';

// // 8.String concatenation
// let firstName = "John";
// let lastName = "Doe";
// // Concatenate to create "John Doe"
// let fullName = firstName +" "+ lastName;
// // Create a message: "Hello, John Doe!"
// let greeting = "Hello, "+ fullName+ "!";
// let age = 25;
// // Create: "John is 25 years old"
// let info = firstName + " is " + age + "year old";

// // 9.Convert Template Literals
// let name = "Alice";
// let score = 95;
// let message = "Student " + name + " scored " + score + " points.";
// // Template literal version:
// let message = `Student ${name} scored ${score} points.`;
// // Original
// let product = "Laptop";
// let price = 999;
// let quantity = 2;
// let total = price * quantity;
// let receipt = "Item: " + product + ", Quantity: " + quantity + ", Total: $" + total;
// // Template literal version:
// let receipt = `Item: ${product}, Quantity: ${quantity}, Total: $${total}`;


// // 10. Template Literals
// let cityName = "Paris";
// let temperature = 25;
// // Create: "The temperature in Paris is 25 degrees."
// let weather = `The temperature in ${cityName} is ${temperature} degrees.`;
// let hourOfDay = 14;
// let userName = "Bob";
// // Create: "Good afternoon, Bob! It's 14:00."
// let greeting = `Good afternoon, ${userName}! It's ${hourOfDay}:00.`;


// // 11.Null vs undefined
// // A variable declared but not assigned
// let score;
// console.log(score); // Output: undefined
// // A variable intentionally set as empty
// let winner = null;
// console.log(winner); // Output: null
// // Accessing a non-existent property
// let user = { name: "Alice" };
// console.log(user.age); // Output: undefined

// // 12.Predict output
// console.log(10 > 5);   // true
// console.log(3 < 2);    // false
// console.log(5 >= 5);   // true
// console.log(8 <= 10);  // true
// console.log(7 != 7);   // false
// console.log(15 > 20);  // false

// // 13.write Comparison
// let age = 18;
// // Write a comparison that returns true
// age >= 18; // true
// let temperature = 30;
// // Write a comparison that returns true
// temperature > 25; // true
// let score = 75;
// // Write a comparison that returns false
// score < 60; // false


// // # Loose vs StrictEquality
// // 14. == vs ===
// console.log(5 == 5);       // true
// console.log(5 === 5);      // true
// console.log(5 == "5");     // true
// console.log(5 === "5");    // false
// console.log(true == 1);    // true
// console.log(true === 1);   // false
// console.log(0 == false);   // true
// console.log(0 === false);  // false

// // 15.Fix the code
// let userInput = "10";
// if (userInput === 10) {
//     console.log("Input is 10");
// }

// // 16. String comparison
// console.log('a' > 'A');      // true
// console.log('b' < 'c');      // true
// console.log('apple' < 'banana'); // true
// console.log('Z' < 'a');      // true
// console.log("10" < "2");     // true

// // 17.Case-Insensitive Comparison
// let str1 = "Hello";
// let str2 = "HELLO";
// // Write a comparison that returns true
// console.log(str1.toLowerCase() === str2.toLowerCase());//true

// // 18.User Greeting
// let userName = "Sarah";
// let hour = 9; // 9 AM
// // Create a greeting: "Good morning, Sarah!"
// let greeting = `Good morning, ${userName}!`;
// console.log(greeting); 

// // 19. Age Checker
// let userAge = 16;
// let minimumAge = 18;
// // Check if user is old enough
// let isOldEnough = userAge >= minimumAge;
// console.log(isOldEnough); // false

// // 20.  Email Validator
// let email = "alice@example.com";
// // Get the first character
// let firstChar = email[0];
// // Check if it's a lowercase letter (between 'a' and 'z')
// let isValid = firstChar >= 'a' && firstChar <= 'z';
// console.log(isValid); // true

// // 21.String Builder
// let productName = "Wireless Mouse";
// let productPrice = 29.99;
// let inStock = true;
// // Create: "Product: Wireless Mouse | Price: $29.99 | In Stock: true"
// let description = `Product: ${productName} | Price: $${productPrice} | In Stock: ${inStock}`;
// console.log(description);

// // 22.Initial Generator
// let firstName = "John";
// let middleName = "Robert";
// let lastName = "Smith";
// // Create initials: "J.R.S."
// let initials = firstName[0] + "." + middleName[0] + "." + lastName[0] + ".";
// console.log(initials);

// // 23. Find and Fix Error
// let firstPlace = "Gold";
// let userName = "Alice";
// let totalCost = 100;
// let age = 18;
// if (age === 18) {
//     console.log("You can vote");
// }
// let message = "It's a beautiful day";

// // 24. Logic Error
// let userInput = "25";
// if (Number(userInput) === 25) {
//     console.log("Input is correct");
// } else {
//     console.log("Input is incorrect");
// }


// // 25. Password Validator
// let password = "Pass123";
// // 1. Password length is at least 6 characters
// let isLongEnough = password.length >= 6;
// // 2. First character is uppercase (between 'A' and 'Z')
// let startsWithUppercase = password[0] >= 'A' && password[0] <= 'Z';
// // 3. Last character is a digit (between '0' and '9')
// let endsWithNumber = password[password.length - 1] >= '0' && password[password.length - 1] <= '9';
// console.log("Password is long enough:", isLongEnough);
// console.log("Starts with uppercase:", startsWithUppercase);
// console.log("Ends with number:", endsWithNumber);