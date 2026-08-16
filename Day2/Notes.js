// Identifier 5 Rules
//Character are allowed to A-Z a-z and two Special Character _ , $

//Character Allowed
//No space
//Strating Character
//Case sentivity
//Reserved words

// Valid examples
// let userName123;
// let _privateVariable;
// let $specialValue;
// let total_AMOUNT;

// Invalid
// let user name; // ❌ Error
// let total cost; // ❌ Error
// // Valid alternatives
// let userName; // ✓ Use camelCase
// let user_name; // ✓ Use underscores
// let totalCost; // ✓ Use camelCase

// Valid
// let age; // ✓ Starts with letter
// let _private; // ✓ Starts with underscore
// let $price; // ✓ Starts with dollar sign
// // Invalid
// let 123name; // ❌ Cannot start with digit
// let 9lives; // ❌ Cannot start with digit

// let userAge = 25;
// let userage = 30;
// let UserAge = 35;
// let USERAGE = 40;
// // These are FOUR DIFFERENT variables!
// console.log(userAge); // 25
// console.log(userage); // 30
// console.log(UserAge); // 35
// console.log(USERAGE); // 40

// Invalid - using reserved words
// let let = 10; // ❌ Error
// let if = 20; // ❌ Error
// let function = 30; // ❌ Error
// // Valid alternatives
// let letVariable = 10; // ✓
// let ifCondition = 20; // ✓
// let functionName = 30; // ✓

//VALID VS INVALID INDENTIFIER
// Invalid
// let user--name = "Alice"; // ❌ JavaScript thinks: user minus name
// // Valid
// let user_name = "Alice"; // ✓ Underscore is allowed
// let userName = "Alice"; // ✓ CamelCase (preferred)
// // Invalid
// let 1stPlace = "Gold"; // ❌ Cannot start with digit
// let 99balloons = 99; // ❌ Cannot start with digit
// // Valid
// let firstPlace = "Gold"; // ✓ Spell out the number
// let place1st = "Gold"; // ✓ Number at end is fine
// let balloons99 = 99; // ✓ Number at end is fine
// // Invalid
// let my$variable = 10; // ❌ Wait, this is actually VALID!
// let my#variable = 10; // ❌ # is not allowed
// // Remember: Only _ and $ are allowed as special characters
// let my_variable = 10; // ✓
// let my$variable = 10; // ✓

//NAMING CONVENTION
//CAMEL CASE
//SNAKE_CASE
//PASCALCASE
//SCREAMING_SNAKE_CASE
//CAMEL CASE
// let userName = "Alice";
// let totalPrice = 99.99;
// let isLoggedIn = true;
// let calculateTotalCost = function() { };
// let getUserInfo = function() { };

//SNAKE_CASE
// Variables
// let firstName = "John";
// let lastName = "Doe";
// let dateOfBirth = "1990-01-01";
// let emailAddress = "john@example.com";

//PASCALCASE
// const MAX_LOGIN_ATTEMPTS = 3;
// const API_KEY = "abc123xyz";
// const PI = 3.14159;
// const DATABASE_URL = "mongodb://localhost:27017";

// let strName = "Alice"; // str = string
// let numAge = 25; // num = number
// let bIsActive = true; // b = boolean

// Bad - unclear names
// let x = 25;
// let y = "John";
// let z = true;
// // Good - descriptive names
// let userAge = 25;
// let firstName = "John";
// let isEmailVerified = true;
// // Bad - too short
// let fn = "Alice";
// let ln = "Smith";
// // Good - clear and readable
// let firstName = "Alice";
// let lastName = "Smith";
// // Bad - abbreviations
// let usrAddr = "123 Main St";
// let empSal = 50000;
// // Good - spelled out
// let userAddress = "123 Main St";
// let employeeSalary = 50000;

//BOOLEAN
// let isLoggedIn = true;
// let isOver18 = false;
// let hasPermission = true;
// let isEmailVerified = false;

// let age = 20;
// let isAdult = age >= 18; // true
// console.log(isAdult); // true
// let score = 75;
// let isPassing = score >= 60; // true
// let isFailing = score < 60; // false
// let temperature = 30;
// let isHot = temperature > 25; // true
// let isCold = temperature < 10; // false

// Toggle states
// let isMenuOpen = false;
// let isDarkMode = true;
// let isPlaying = false;
// // User states
// let isLoggedIn = true;
// let isAdmin = false;
// let isVerified = true;
// // Feature flags
// let isFeatureEnabled = true;
// let isBetaUser = false;
// // Validation
// let isEmailValid = true;
// let isPasswordStrong = false;
// let isFormComplete = true;

// if (0) {
// console.log("This won't run"); // 0 is falsy
// }
// if (1) {
// console.log("This will run"); // 1 is truthy
// }
// if ("hello") {
// console.log("This will run"); // non-empty string is truthy
// }

//STRING IN JAVASCRIPT
//STRING DECLARATION SINGLE QUOTES
// let firstName = 'Alice';
// let greeting = 'Hello, World!';
// let message = 'It\'s a beautiful day'; // Escape quote with \
// console.log(firstName,)

//DOUBLE QUOTES
// let firstName = "Alice";
// let greeting = "Hello, World!";
// let message = "She said, \"Hello!\""; // Escape quote with

//BACKTICKS
// let firstName = `Alice`;
// let greeting = `Hello, World!`;
// let message = `It's a "beautiful" day`; // No escaping needed!

// Use double quotes on outside, single quotes inside
// let message1 = "It's a beautiful day"; // ✓ Works!
// let message2 = "He said, 'Hello there!'"; // ✓ Works!
// // Use single quotes on outside, double quotes inside
// let message3 = 'She said, "Good morning!"'; // ✓ Works!
// let message4 = 'The word "hello" is friendly'; // ✓ Works!

// ESCAPE CHARACTER WITH BACKSLASH
// // Escape single quote inside single quotes
// let message1 = 'It\'s a beautiful day'; // ✓ Works!
// // Escape double quote inside double quotes
// let message2 = "He said, \"Hello there!\""; // ✓ Works!

// //USE TEMPLATE LITERALS
// // No escaping needed!
// let message1 = `It's a beautiful day`; // ✓ Works!
// let message2 = `She said, "Good morning!"`; // ✓ Works!
// let message3 = `Use 'any' "quotes" you want!`; // ✓ Works!

// //LENGTH PROPERTIES
// let name = "Alice";
// console.log(name.length); // 5
// let message = "Hello, World!";
// console.log(message.length); // 13
// let empty = "";
// console.log(empty.length); // 0

// let text = "Hello, World!";
// // Convert to uppercase
// console.log(text.toUpperCase()); // "HELLO, WORLD!"
// // Convert to lowercase
// console.log(text.toLowerCase()); // "hello, world!"
// // Extract part of string
// console.log(text.slice(0, 5)); // "Hello"
// // Replace text
// console.log(text.replace("World", "JavaScript")); // "Hello, JavaScript!"

//STRING METHOD
// let newLine = "First line\nSecond line";
// console.log(newLine);
// // Output:
// // First line
// // Second line
// let tab = "Name:\tAlice";
// console.log(tab);
// // Output: Name: Alice
// let backslash = "This is a backslash: \\";
// console.log(backslash);
// // Output: This is a backslash: \
// let quote = "She said, \"Hi!\"";
// console.log(quote);
// // Output: She said, "Hi!"

//STRING INDEXING
// let city = "London";
// console.log(city[0]); // "L" - first character
// console.log(city[1]); // "o" - second character
// console.log(city[2]); // "n" - third character
// console.log(city[3]); // "d" - fourth character
// console.log(city[4]); // "o" - fifth character
// console.log(city[5]); // "n" - sixth (last) character

// let word = "JavaScript";
// // First character
// let first = word[0];
// console.log(first); // "J"
// // Last character using length
// let last = word[word.length -- 1];
// console.log(last); // "t"
// // Why length - 1?
// // Because length is 10, but last index is 9 (0-based indexing)
// console.log(word.length); // 10
// console.log(word[9]); // "t"
// console.log(word[10]); // undefined (out of bounds)

// let name = "Alice"; // length is 5, valid indices: 0-4
// console.log(name[0]); // "A" ✓
// console.log(name[4]); // "e" ✓
// console.log(name[5]); // undefined (no character at index 5)
// console.log(name[10]); // undefined
// console.log(name[--1]); // undefined (negative indices don't work like Python)

// let password = "Pass123";
// let firstChar = password[0];
// let lastChar = password[password.length -- 1];
// console.log("First character:", firstChar); // "P"
// console.log("Last character:", lastChar); // "3"

//Strings are Immutable: You cannot change individual characters
// //let word = "Hello";
// word[0] = "J"; // This does NOT work!
// console.log(word); // Still "Hello"
// // To "change" a string, create a new one
// let newWord = "J" + word.slice(1);
// console.log(newWord); // "Jello"

//Length vs Last Index
// //let text = "Hello";
// console.log(text.length); // 5
// console.log(text[text.length]); // undefined (index 5 doesn't exist)
// console.log(text[text.length -- 1]); // "o" (correct last character)

//String Concatenation
//Concatenation means joining strings together. JavaScript provides the + operator for this purpose.
// // Joining two strings
// let firstName = "Alice";
// let lastName = "Smith";
// let fullName = firstName + lastName;
// console.log(fullName); // "AliceSmith"
// // Adding space
// let fullNameWithSpace = firstName + " " + lastName;
// console.log(fullNameWithSpace); // "Alice Smith"

//MULTIPLE CONCATENATION
// let greeting = "Hello";
// let name = "World";
// let punctuation = "!";
// let message = greeting + ", " + name + punctuation;
// console.log(message); // "Hello, World!"

//concatenting numbers and string
// // Number + String = String
// let score = 100;
// let message1 = "Your score is: " + score;
// console.log(message1); // "Your score is: 100"
// console.log(typeof message1); // "string"
// // String + Number = String
// let message2 = "Player " + 1;
// console.log(message2); // "Player 1"
// // Multiple numbers and strings
// let age = 25;
// let message3 = "I am " + age + " years old";
// console.log(message3); // "I am 25 years old"

// let userName = "Bob";
// let points = 150;
// let welcomeMsg = "Welcome back,"+ userName + "!";
// let scoreMsg = "You have" + points + "points,";
// console.log(welcomeMsg);
// console.log(scoreMsg);

// let newLine = "First line\nSecond line";
// console.log(newLine);
// // Output:
// // First line
// // Second line
// let tab = "Name:\tAlice";
// console.log(tab);
// // Output: Name: Alice
// let backslash = "This is a backslash: \\";
// console.log(backslash);
// // Output: This is a backslash: \
// let quote = "She said, \"Hi!\"";
// console.log(quote);
// Output: She said, "Hi!"

//Number Addition vs String Concatenation
//// All numbers - addition
// console.log(10 + 20); // 30 (number addition)
// // String first - concatenation
// console.log("10" + 20); // "1020" (string concatenation)
// // Number first, then string - concatenation
// console.log(10 + "20"); // "1020" (string concatenation)
// // Mixed operations
// console.log(10 + 20 + "30"); // "3030" (10+20=30, then "30"+"30")
// console.log("10" + 20 + 30); // "102030" (all concatenation)
// // Using parentheses
// console.log("Result: " + (10 + 20)); // "Result: 30" (forces addition first)

//Concatenation vs Template Literals
// Concatenation (hard to read)
// let name = "Alice";
// let age = 25;
// let city = "New York";
// let message = "My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
// // Template Literal (easier to read) - We'll cover this next!
// let betterMessage = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;

//NULL VS  UNDEFINED
// // Concatenation (hard to read)
// let name = "Alice";
// let age = 25;
// let city = "New York";
// let message = "My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
// // Template Literal (easier to read) - We'll cover this next!
// let betterMessage = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;

// When You Get Undefined
// Variable declared but not initialized:
// Function with no return value:

// Accessing non-existent object property:

// Array element that doesn't exist;

// Function parameter not provided:
// javascript
// let score;
// console.log(score); // undefined
// console.log(typeof score); // "undefined"

// function greet() {
// console.log("Hello!");
// // No return statement
// }
// let result = greet();
// console.log(result); // undefined

// let user = { name: "Alice" };
// console.log(user.age); // undefined (property doesn't exist)

// let colors = ["red", "blue"];
// console.log(colors[5]); // undefined

// Null
// Null represents the intentional absence of a value. You explicitly assign null to indicate "no value" or
// "empty."
// When to Use Null
// Intentionally setting something as empty:
// Resetting a value:

// API responses:
// function greet(name) {
// console.log(name);
// }
// greet(); // undefined (no argument passed)

//NULL
// let currentUser = null; // No user logged in
// console.log(currentUser); // null
// console.log(typeof currentUser); // "object" (this is a JavaScript quirk!)
// let userData = {
// name: "Bob",
// email: "bob@example.com",
// phone: null // User hasn't provided phone number
// };

// let value1; // undefined
// let value2 = null; // null
// // Check for undefined
// if (value1 === undefined) {
// console.log("value1 is undefined");
// }
// // Check for null
// if (value2 === null) {
// console.log("value2 is null");
// }
// // Check for either (common pattern)
// if (value1 == null) { // Note: using == (loose equality)
// console.log("value1 is null or undefined");
// }
// // This works because: undefined == null is true

// console.log(typeof undefined); // "undefined" ✓ Makes sense
// console.log(typeof null); // "object" ⚠️ Historical bug!
// // To properly check for null, use strict equality:
// let value = null;
// if (value === null) {
// console.log("It's null");
// }
// // Don't rely on typeof for null
// if (typeof value === "object") {
// // This could be null OR an actual object!
// console.log("Could be null or an object");
// }

//OUTPUT METHODS
// console.log("Name:", "Alice");
// console.log("Age:", 25);
// console.log("City:", "New York");
// // Output:
// // Name: Alice
// // Age: 25
// // City: New York
// let product = "Laptop";
// let price = 999;
// console.log("Product:", product);
// console.log("Price:", price);
// // Or combine in one log
// console.log("Product:", product, "- Price:", price);
// // Output: Product: Laptop - Price: 999
// // Warning message (yellow in console)
// console.warn("This is a warning!");
// // Error message (red in console)
// console.error("This is an error!");
// // Info message
// console.info("This is information");
// // Clear the console
// console.clear();

// //TEMPLATE LITERALS
// let name = "Alice";
// let age = 25;
// // Old way (concatenation)
// let message1 = "My name is " + name + " and I am " + age + " years old.";
// // New way (template literal)
// let message2 = `My name is ${name} and I am ${age} years old.`;
// console.log(message1); // My name is Alice and I am 25 years old.
// console.log(message2); // My name is Alice and I am 25 years old.

// // Regular strings (need escape characters)
// let oldWay = "Line 1\nLine 2\nLine 3";
// // Template literals (natural multi-line)
// let newWay = `Line 1
// Line 2
// Line 3`;
// console.log(newWay);
// // Output:
// // Line 1
// // Line 2
// // Line 3

// let a = 10;
// let b = 20;
// console.log(`Sum: ${a + b}`); // Sum: 30
// console.log(`Product: ${a * b}`); // Product: 200
// // console.log(`${a} + ${b} = ${a + b}`); // 10 + 20 = 30

// let name = "Alice";
// let age = 25;
// let city = "New York";
// // Concatenation (hard to read and write)
// let msg1 = "Hi, I'm " + name + ". I'm " + age + " years old and I live in " + city + ".";
// // Template Literal (easy to read and write)
// let msg2 = `Hi, I'm ${name}. I'm ${age} years old and I live in ${city}.`;
// console.log(msg1); // Hi, I'm Alice. I'm 25 years old and I live in New York.
// console.log(msg2); // Hi, I'm Alice. I'm 25 years old and I live in New York.

// let name = "Alice";
// age = 25;
// city = "New York";
// msg1 = "Hi, I'm " + name + ". I'm " + age + " years old and I live in " + city + ".";
// console.log(msg1);

// let a = 10;
// let b = 20;
// console.log(`Sum: ${a + b}`); // Sum: 30
// console.log(`Product: ${a * b}`); // Product: 200
// console.log(`${a} + ${b} = ${a + b}`); // 10 + 20 = 30



//Commparison operator
//The six main comparison operator 
//Greater than >
// console.log(10 > 5); // true
// console.log(5 > 10); // false
// console.log(5 > 5); // false (not greater, just equal)
// let age = 20;
// console.log(age > 18); // true 

//Less than <
// console.log(5<10);
// console.log(10<5);
// console.log(5<5);
// let score=45;
// console.log(score<100);

//Greaterthan or equal to >=
// console.log(10 >= 5); // true (10 is greater)
// console.log(5 >= 10); // false
// console.log(5 >= 5); // true (equal counts!)
// let age = 18;
// console.log(age >= 18); // true (can vote)

//Less Than or Equal To <= 
// console.log(5 <= 10); // true
// console.log(10 <= 5); // false
// console.log(5 <= 5); // true
// let temperature = 25;
// console.log(temperature <= 30); // true

// Not Equal To !=
// console.log(5 != 4); // true
// console.log(5 != 5); // false
// console.log(5 != "5"); // false (converts string to number)
// let userInput = 10;
// console.log(userInput != 0); // true

// Loose Equality == 
// console.log(5 == 5); // true
// console.log(5 == "5"); // true (string converted to number)
// console.log(1 == true); // true (boolean converted to number)
// console.log(0 == false); // true
// let x = 10;
// let y = "10";
// console.log(x == y); // true (type conversion happens)   

// let age = 20;
// if (age >= 18) {
// console.log("You can vote");
// } else {
// console.log("You cannot vote yet");
// }

// let temperature = 30;
// if (temperature > 29) {
// console.log("It's hot outside");
// } else {
// console.log("It's cool outside");
// }

// let temp = -12;
// if (temp >-19) {
//     console.log("It's hot outside")
// } else {
//     console.log("It's a coolest outside")
// }

// let password = "saad123"
// let minLength = 8;
// if(password.length>=minLength){
//     console.log("Password are a strong enough");
// } else {
//     console.log("password is to short")
//}

// Loose vs Strict Equality
// Understanding the difference between loose ( == ) and strict ( === ) equality is crucial for writing bug-free
// Loose Equality ( == )
// Same types - straightforward comparison
// console.log(5 == 5); // true
// console.log("hi" == "hi"); // true
// // Different types - converts before comparing
// console.log(5 == "5"); // true (string "5" converted to number 5)
// console.log(1 == true); // true (true converted to 1)
// console.log(0 == false); // true (false converted to 0)
// console.log("" == false); // true (both are "falsy")

// // Number vs String
// console.log(10 == "10"); // true (string to number)
// console.log(0 == ""); // true (empty string to 0)
// console.log(0 == "0"); // true
// // Boolean vs Number
// console.log(true == 1); // true
// console.log(false == 0); // true
// console.log(true == 2); // false (true is 1, not 2)
// // Special cases
// console.log(null == undefined); // true (special rule)
// console.log(null == 0); // false
// console.log(undefined == 0); // false

// Strict Equality ( === )
// // Same type and value - true
// console.log(5 === 5); // true
// console.log("hi" === "hi"); // true
// console.log(true === true); // true
// // Different types - always false
// console.log(5 === "5"); // false (number vs string)
// console.log(1 === true); // false (number vs boolean)
// console.log(0 === false); // false (number vs boolean)
// console.log("" === false); // false (string vs boolean)

// // Number comparisons
// console.log(10 === 10); // true ✓
// console.log(10 === "10"); // false ✓ (different types)
// // String comparisons
// console.log("hello" === "hello"); // true ✓
// console.log("hello" === "Hello"); // false ✓ (case-sensitive)
// // Boolean comparisons
// console.log(true === true); // true ✓
// console.log(true === 1); // false ✓ (different types)
// console.log(false === 0); // false ✓ (different types)
// // Special values
// console.log(null === undefined); // false ✓ (different types)
// console.log(null === null); // true ✓
// console.log(undefined === undefined); // true ✓

//String comparison
// // Single character comparisons
// console.log('a' > 'A'); // true (97 > 65)
// console.log('b' < 'c'); // true (98 < 99)
// console.log('A' < 'a'); // true (65 < 97)
// // String comparison
// console.log("apple" < "banana"); // true (a < b)
// console.log("cat" > "bat"); // true (c > b)

// // Compares first different character
// console.log("apple" < "application"); // true
// // Compares: a=a, p=p, p=p, l=l, e < i, so "apple" < "application"
// console.log("hello" > "help"); // false
// // Compares: h=h, e=e, l=l, l < p, so "hello" < "help"
// console.log("cat" < "catalog"); // true
// // Compares: c=c, a=a, t=t, then "cat" ends (shorter < longer when prefix matches)

// // Uppercase < Lowercase
// console.log('A' < 'a'); // true (65 < 97)
// console.log('Z' < 'a'); // true (90 < 97)
// // Comparisons with mixed case
// console.log("Apple" < "apple"); // true (A < a)
// console.log("HELLO" < "hello"); // true (H < h)
// // This can be counter-intuitive!
// console.log("Zoo" < "apple"); // true (Z < a)

// Number Strings
// When comparing number strings, remember they're compared as strings, not numbers:
// To compare number strings as numbers:
// Practical Examples
// Example 1: Alphabetical Sorting
// javascript
// // String comparison (character by character)
// console.log("10" < "2"); // true ⚠️
// // Why? Compare first character: "1" < "2" (49 < 50)
// console.log("100" < "20"); // true ⚠️
// // Why? Compare first character: "1" < "2"
// // Actual number comparison
// console.log(10 < 2); // false ✓
// console.log(100 < 20); // false ✓




// // Valid Identifiers
// let userName; // ✓ camelCase
// let user_name; // ✓ snake_case
// let $price; // ✓ Starts with $
// let _private; // ✓ Starts with _
// // Strings
// let str1 = "Hello"; // Double quotes
// let str2 = 'Hello'; // Single quotes
// let str3 = `Hello ${name}`; // Template literal
// // String Indexing
// let city = "London";
// city[0] // "L" (first character)
// city[5] // "n" (last character)
// // Concatenation
// "Hello" + " " + "World" // "Hello World"
// // Template Literals
// `My name is ${name} and I'm ${age} years old.`
// // Comparison Operators
// 10 > 5 // true
// 5 < 10 // true
// 5 >= 5 // true
// 5 <= 5 // true
// 5 != 4 // true
// 5 == "5" // true (loose)
// 5 === "5" // false (strict) ✓ Use this!
// // String Comparison
// 'a' > 'A' // true (lowercase > uppercase)
// 'apple' < 'banana' // true (a < b)
// "10" < "2" // true (string comparison)
// // Null vs Undefined
// let x; // undefined
// let y = null; // null