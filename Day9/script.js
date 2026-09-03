//The forEach method

// array.forEach((element, index, array) => {
// // code to execute for each element
// });

// //Print all element
// let fruits=["apple", "banana","chery","mango"];
// fruits.forEach((fruits)=>{
//     console.log(fruits);
// });


// //Print with index
// let colors=["red","blue","yellow","black"];
// colors.forEach((colors,index)=>{
//     console.log(`${index}:${colors}`);
// });


// //Calculate sum using external varaible
// let numbers=[10,20,30,40,50];
// let sum =0;
// numbers.forEach((num)=>{
//     sum += num;
// });
// console.log(`Total:${sum}`)


// let numbers=[30,40,50,20,80];
// let sum=0;
// numbers.forEach((numbers)=>{
//     sum += numbers;
// });
// console.log(`Total:${sum}`);


// //Add formatted prices
// let prices=[99,87,76,54,323];
// prices.forEach((price)=>{
//     console.log(`${price}.00`)
// }); 


// // Push to another array
// let names = ["Saad", "burhan", "chaush"];
// let upperNames = [];
// names.forEach((name) => {
// upperNames.push(name.toUpperCase());
// });
// console.log(upperNames);


// //Print multiplication table
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
// console.log(`5 x ${num} = ${5 * num}`);
// });


//Working with objects
// let students = [
// { name: "Rahul", age: 20 },
// { name: "Priya", age: 22 },
// { name: "Arjun", age: 19 }
// ];
// students.forEach((student) => {
// console.log(`${student.name} is ${student.age} years old`);
// });

// let students =["maaz","salman","arbaaz","taha","mohd"]
// const newArr=students.forEach((e,index)=>{
//         console.log(index + 1,"hello",e);
// });
// console.log("check new array", newArr);

// //checking condition
// let scores = [85, 92, 78, 45, 90];
// scores.forEach((score) => {
// if (score >= 80) {
// console.log(`${score} - Excellent!`);
// } else {
// console.log(`${score} - Keep trying!`);
// }
// });



// //The map method
// let newArray=array.map((element,index,array)=>{
//     return transformedElement;
// });

// let priceWithTaxes = prices.map( price => price * 1.18)
// console.log(priceWithTaxes)

// //Double all numbers
// let numbers=[1,2,3,4,5];
// let doubled =numbers.map((num)=> num*2);
// console.log(doubled);
// console.log(numbers);

// let fruits = ["apple", "banana", "orange", "mango"];

// const newArr = fruits.map((fruit) => {
//   return fruit.toUpperCase();
// });
// console.log(newArr)

// let numbers=[22,33,44,46,55,99];
// let doubled = numbers.map((num)=>num*2);
// console.log(doubled)


// // convert to upper case
// let names=["shark","burhan","sahil"];
// let upperNames=names.map((name)=>name.toUpperCase());
// console.log(upperNames);

// let names1=["saad","khan","mohd"];
// let upperNames1=names1.map((name1)=>name1.toUpperCase());
// console.log(upperNames1);


// // Square all numbers
// let nums=[2,3,4,5];
// let squares=nums.map((nums)=>nums**2);
// console.log(squares);

// let nums=[22,333,44,44,55,99];
// let squares=nums.map((nums)=>nums*2);
// console.log(squares)


// //Extract object properties
// let students = [
// { name: "John", marks: 85 },
// { name: "Sarah", marks: 92 },
// { name: "Mike", marks: 78 }
// ];
// let names = students.map((student) => student.name);
// console.log(names); // ["John", "Sarah", "Mike"]


// //Add GST to prices
// let prices = [100, 200, 150, 300];
// let pricesWithGST = prices.map((price) => price * 1.18);
// console.log(pricesWithGST); // [118, 236, 177, 354]


// //Create full names
// let firstNames = ["Raj", "Priya", "Amit"];
// let lastNames = ["Sharma", "Patel", "Kumar"];
// let fullNames = firstNames.map((firstName, index) => {
// return `${firstName} ${lastNames[index]}`;
// });
// console.log(fullNames);
// // ["Raj Sharma", "Priya Patel", "Amit Kumar"]


// //Format as currency
// let amounts = [100, 250, 500, 1000];
// let formatted = amounts.map((amount) => `₹${amount}.00`);
// console.log(formatted);


// //Create HTML elements
// let items = ["Home", "About", "Services", "Contact"];
// let menuItems = items.map((item) => `<li>${item}</li>`);
// console.log(menuItems);


// //Temperature conversion
// let celsius = [0, 10, 20, 30, 40];
// let fahrenheit = celsius.map((temp) => (temp * 9/5) + 32);
// console.log(fahrenheit);


// //Add index of items
// let fruits = ["Apple", "Banana", "Mango"];
// let numberedList = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
// console.log(numberedList);



// //The filter method
// let result = array.every((element) => {
// return condition; // true or false
// });

// // Even numbers
// let numbers = [2,3,1,4,4,5,6,7,7,8]
// let evennumbers = numbers.filter(function(number){
//     return number % 2===0;
// });
// console.log(evennumbers);

// // filter names
// let names = ["ali","saad","burhan","shark"]
// let result =names.filter(names=> names.length>3);
// console.log(result)

// let users=[
//     {
//         name:"burhan",
//         age:22,
//         isActive:true
//     },
//     {
//         name:"faizaan",
//         age:26,
//         isActive:false
//     },
//     {
//         name:"sahil",
//         age:24,
//         isActive:true
//     },
//     {
//         name:"shark",
//         age:28,
//         isActive:false
//     },
// ];

// let activeUsers = users.filter(function(user) {
//     return user.isActive === true;
// });

// console.log(activeUsers);

// let numbers=[1,2,3,4,5,6,7,8,9]
// const filterArray=numbers.filter((elem)=>{
//     if (elem % 2==0){
//         return true
//     } else{
//         return false
//     }
// });
// console.log(filterArray);

// let filterArray = numbers.filter((e)=>{
//     return e % 2==0
// });
// console.log(filterArray);

// let filterArray = numbers.filter((e)=> e % 9==0);
// console.log(filterArray);



// the .every
// // Check if all are adults
// let ages = [20, 25, 18, 30, 22];
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults); // true


// //check if all failed
// let ages = [20, 25, 17, 30, 22];
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults); // false (17 < 18)


// let ages = [20, 25, 20, 30];

// let finalAns = ages.every((elem)=>{
//     if(elem >= 18){
//         return true
//     } else {
//         return false
//     }
// })

// console.log(finalAns)

// let ages = [20, 25, 19, 30];

// let finalAns = ages.every(elem => elem <= 18);

// console.log(finalAns);

// //check if all numbers are positive
// let numbers = [5, 10, 15, 20];
// let allPositive = numbers.every((num) => num > 0);
// console.log(allPositive); // true


// //check if all students pass
// let marks = [78, 85, 92, 67, 89];
// let allPassed = marks.every((mark) => mark >= 50);
// console.log(allPassed); // true


// //check if allproduct are in stock
// let products = [
// { name: "Laptop", inStock: true },
// { name: "Mouse", inStock: true },
// { name: "Keyboard", inStock: false }
// ];
// let allAvailable = products.every((product) => product.inStock === true);
// console.log(allAvailable); // false



// //The some method
// let result = array.some((element) => {
// return condition; // true or false
// });


// //check if any teenager exists
// let ages = [20, 25, 17, 30, 22];
// let hasTeenager = ages.some((age) => age < 18);
// console.log(hasTeenager); // true (17 is a teenager)

// let ages = [15,10,12,14]
// let adult = ages.some((age)=> age < 18);
// console.log(adult);  

// //check if any negative number
// let numbers = [5, 10, -3, 20, 15];
// let hasNegative = numbers.some((num) => num < 0);
// console.log(hasNegative); // true


// //check if any student fail
// let marks = [78, 85, 92, 45, 89];
// let anyoneFailed = marks.some((mark) => mark < 50);
// console.log(anyoneFailed); // true (45 < 50)


// //check if product in cheap
// let prices = [1500, 2000, 450, 3000];
// let hasCheapItem = prices.some((price) => price < 500);
// console.log(hasCheapItem); // true (450 < 500)


// //check if any task task is incomplete
// let tasks = [
// { task: "Buy milk", done: true },
// { task: "Clean room", done: false },
// { task: "Study", done: true }
// ];
// let hasIncomplete = tasks.some((item) => item.done === false);
// console.log(hasIncomplete); // true


// //Comparing some and every
// // Age checking
// let ages = [20, 25, 18, 30, 22];
// // every - ALL must be adults
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults); // true
// // some - AT LEAST ONE must be adult
// let someAdults = ages.some((age) => age >= 18);
// console.log(someAdults); // true


// //With one falling case
// let ages = [20, 25, 15, 30, 22];
// // every - ALL must be adults (fails because of 15)
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults); // false
// // some - // some - AATT LEAST LEAST ONE must be adult (passes because others ar ONE must be adult (passes because others are adults) e adults)
// let someAdults = ages.some((age) => age >= 18);
// console.log(someAdults); // true


// //Numbers check
// let numbers = [2, 4, 6, 8, 10];
// // every - ALL must be even
// let allEven = numbers.every((num) => num % 2 === 0);
// console.log(allEven); // true
// // some - AT LEAST ONE must be even
// let someEven = numbers.some((num) => num % 2 === 0);
// console.log(someEven); // true


// //Empty caet scenario
// let prices = [150, 200, 300];
// // every - ALL must be affordable
// let allAffordable = prices.every((price) => price <= 100);
// console.log(allAffordable); // false
// // some - // some - AATT LEAST LEAST ONE must be affor ONE must be affordable dable
// let someAffordable = prices.some((price) => price <= 100);
// console.log(someAffordable); // false




// //The reduce operator
// // .reduce

// // accumulator pattern

// let prices = [200, 250, 170, 300];

// let sum = 0;

// for (let price of prices) {
//   sum = sum + price;
// }

// console.log(sum);


// // sum of all numbers
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => {
// return total + num;
// }, 0);
// console.log(sum);
// Step-by-step execution:
// total = 0, num = 1 → return 0 + 1 = 1
// total = 1, num = 2 → return 1 + 2 = 3
// total = 3, num = 3 → return 3 + 3 = 6
// total = 6, num = 4 → return 6 + 4 = 10
// total = 10, num = 5 → return 10 + 5 = 15

// //product of all number
// let numbers = [2, 3, 4, 5];
// let product = numbers.reduce((result, num) => result * num, 1);
// console.log(product); // 120 (2 * 3 * 4 * 5)

// //calculate total price
// let cart = [
// { item: "Shirt", price: 500 },
// { item: "Shoes", price: 1200 },
// { item: "Hat", price: 300 }
// ];
// let total = cart.reduce((sum, product) => sum + product.price, 0);
// console.log(total); // 2000

// //count occurance
// let fruits = ["apple", "banana", "apple", "mango", "apple", "banana"];
// let count = fruits.reduce((counter, fruit) => {
// counter[fruit] = (counter[fruit] || 0) + 1;
// return counter;
// }, {});
// console.log(count);
// // { apple: 3, banana: 2, mango: 1 }

// // Flatten nested arrays
// let nested = [[1, 2], [3, 4], [5, 6]];
// let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// console.log(flat); // [1, 2, 3, 4, 5, 6]

// //Find longest word
// let words = ["hi", "hello", "hey", "goodbye"];
// let longest = words.reduce((longest, word) => {
// return word.length > longest.length ? word : longest;
// }, "");
// console.log(longest); // "goodbye"

// //Group by cateogry
// let items = [
// { name: "Apple", type: "fruit" },
// { name: "Carrot", type: "vegetable" },
// { name: "Banana", type: "fruit" },
// { name: "Potato", type: "vegetable" }
// ];
// let grouped = items.reduce((result, item) => {
// if (!result[item.type]) {
// result[item.type] = [];
// }
// result[item.type].push(item.name);
// return result;
// }, {});
// console.log(grouped);
// // { fruit: ["Apple", "Banana"], vegetable: ["Carrot", "Potato"] }


// //calculate average
// let scores = [85, 90, 78, 92, 88];
// let sum = scores.reduce((total, score) => total + score, 0);
// let average = sum / scores.length;
// console.log(average); // 86.6




// // Finding Maximum in Array
// // Find maximum number
// let numbers = [45, 78, 23, 89, 34, 12];
// let max = numbers.reduce((maximum, num) => {
// return num > maximum ? num : maximum;
// });
// console.log(max); // 89

// //finding maximum with value initial
// let numbers=[45,56,89,56,99,2222222];
// let max =numbers.reduce((maximum,num)=>{
//     return num>maximum ? num : maximum;
// },numbers[0]);
// console.log(max);

// //find minimum number
// let numbers=[22,45,36,77,65,12];
// let min = numbers.reduce((minimum,num)=>{
//     return num<minimum ? num:minimum;
// },numbers[0]);
// console.log(min);

// //Find hihest price
// let products = [
// { name: "Laptop", price: 50000 },
// { name: "Mouse", price: 500 },
// { name: "Monitor", price: 15000 }
// ];
// let maxPrice = products.reduce((max, product) => {
// return product.price > max ? product.price : max;
// }, 0);
// console.log(maxPrice); // 50000

// //Find student with highest marks
// let students = [
// { name: "saad", marks: 85 },
// { name: "dawod", marks: 92 },
// { name: "sunny", marks: 78 }
// ];
// let topper = students.reduce((highest, student) => {
// return student.marks > highest.marks ? student : highest;
// });
// console.log(topper); // { name: "dawod", marks: 92 }



// //Default parameter
// function functionName(param1 = defaultValue1, param2 = defaultValue2) {
// // function body
// }

// //simple greeting
// function greet(name = "Guest") {
// console.log(`Hello, ${name}!`);
// }
// greet("Alice"); // Hello, Alice!
// greet(); // Hello, Guest!

// //calculate with tax
// function calculateTotal(price, taxRate = 0.18) {
// return price + (price * taxRate);
// }
// console.log(calculateTotal(1000)); // 1180 (uses 18% tax)
// console.log(calculateTotal(1000, 0.10)); // 1100 (uses 10% tax)

// //multiple defaults
// function createUser(name, age = 18, country = "India") {
// return { name, age, country };
// }
// console.log(createUser("Raj"));
// // { name: "Raj", age: 18, country: "India" }
// console.log(createUser("Priya", 25));
// // { name: "Priya", age: 25, country: "India" }
// console.log(createUser("Tom", 30, "USA"));
// // { name: "Tom", age: 30, country: "USA" }

// //power function
// function power(base, exponent = 2) {
// return base ** exponent;
// }
// console.log(power(5)); // 25 (5^2)
// console.log(power(5, 3)); // 125 (5^3)
// console.log(power(2, 4)); // 16 (2^4)

// //calculate discount
// function applyDiscount(price, discount = 10) {
// return price -- (price * discount / 100);
// }
// console.log(applyDiscount(1000)); // 900 (10% off)
// console.log(applyDiscount(1000, 20)); // 800 (20% off)

// //Array slice with defaults
// function getElements(arr, start = 0, end = arr.length) {
// return arr.slice(start, end);
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(getElements(numbers)); // [1, 2, 3, 4, 5]
// console.log(getElements(numbers, 2)); // [3, 4, 5]
// console.log(getElements(numbers, 1, 3)); // [2, 3]

// //Using expressions as defaults
// function multiply(a, b = a * 2) {
// return a * b;
// }
// console.log(multiply(5)); // 50 (5 * 10)
// console.log(multiply(5, 3)); // 15 (5 * 3)



// //Spread Operator ( ... )
// // copy an array
// let original = [1, 2, 3, 4];
// let copy = [...original];
// console.log(copy); // [1, 2, 3, 4]
// // Proof they're different arrays
// copy.push(5);
// console.log(original); // [1, 2, 3, 4] (unchanged)
// console.log(copy); // [1, 2, 3, 4, 5]

// //merge two arrays
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let merged = [...arr1, ...arr2];
// console.log(merged); // [1, 2, 3, 4, 5, 6]

// //add elements while copying
// let numbers = [2, 3, 4];
// let expanded = [1, ...numbers, 5, 6];
// console.log(expanded); // [1, 2, 3, 4, 5, 6]

// //combine multiple arrays
// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "potato"];
// let dairy = ["milk", "cheese"];
// let groceries = [...fruits, ...vegetables, ...dairy];
// console.log(groceries);
// // ["apple", "banana", "carrot", "potato", "milk", "cheese"]

// //spread string into array
// let word = "HELLO";
// let letters = [...word];
// console.log(letters); // ["H", "E", "L", "L", "O"]

// //insert in middle
// let start = [1, 2];
// let end = [5, 6];
// let middle = [3, 4];
// let complete = [...start, ...middle, ...end];
// console.log(complete); // [1, 2, 3, 4, 5, 6]

// //pass array elements function argument
// function sum(a, b, c) {
// return a + b + c;
// }
// let numbers = [1, 2, 3];
// console.log(sum(...numbers)); // 6 (same as sum(1, 2, 3))

// //find max in array
// let numbers = [45, 78, 23, 89, 34];
// let max = Math.max(...numbers);
// console.log(max); // 89



// //spread with object literals
// //copy right
// let original = { name: "John", age: 25 };
// let copy = { ...original };
// console.log(copy); // { name: "John", age: 25 }
// // Proof they're different objects
// copy.age = 30;
// console.log(original); // { name: "John", age: 25 } (unchanged)
// console.log(copy); // { name: "John", age: 30 }

// //add new properties
// let user = { name: "Alice", age: 22 };
// let updatedUser = { ...user, city: "Mumbai" };
// console.log(updatedUser);
// // { name: "Alice", age: 22, city: "Mumbai" }

// //override properties
// let user = {
// name: "Tony Stark",
// email: "tony@stark.com",
// age: 45
// };
// let updatedUser = {
// ...user,
// email: "ironman@stark.com", // Override
// city: "New York" // Add new
// };
// console.log(updatedUser);
// // { name: "Tony Stark", email: "ironman@stark.com", age: 45, city: "New York" }

// //merge multiple objects
// let personal = { name: "Rahul", age: 25 };
// let contact = { email: "rahul@email.com", phone: "9876543210" };
// let address = { city: "Delhi", country: "India" };
// let complete = { ...personal, ...contact, ...address };
// console.log(complete);
// // { name: "Rahul", age: 25, email: "rahul@email.com", phone: "9876543210", city: "Delhi", country: "India" }

// //update nested object (shallow copy issue)
// let user = {
// name: "John",
// address: { city: "Mumbai", pin: 400001 }
// };
// let updated = { ...user, name: "Johnny" };
// console.log(updated);
// // { name: "Johnny", address: { city: "Mumbai", pin: 400001 } }
// // Note: address is still referenced, not copied deeply

// //add computed properties
// let product = { name: "Laptop", price: 50000 };
// let withTax = {
// ...product,
// tax: product.price * 0.18,
// total: product.price * 1.18
// };
// console.log(withTax);
// // { name: "Laptop", price: 50000, tax: 9000, total: 59000 }



// //Rest Operator ( ... )
// function functionName(...restParams) {
// // restParams is an array containing all arguments
// }

// //collect all argument 
// function sum(...numbers) {
// return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(5, 10, 15, 20)); // 50
// console.log(sum(100, 200, 300, 400)); // 1000

// //first and rest
// function announce(winner, ...others) {
// console.log(`Winner: ${winner}`);
// console.log(`Runners-up: ${others.join(", ")}`);
// }
// announce("Alice", "Bob", "Charlie", "David");
// // Winner: Alice
// // Runners-up: Bob, Charlie, David

// //Multiple fixed parameters + rest
// function createTeam(captain, viceCaptain, ...players) {
// return {
// captain,
// viceCaptain,
// players
// };
// }
// let team = createTeam("Virat", "Rohit", "Dhoni", "Hardik", "Bumrah");
// console.log(team);
// // {
// // captain: "Virat",
// // viceCaptain: "Rohit",
// // players: ["Dhoni", "Hardik", "Bumrah"]
// // }

// // Visual Example
//combine first last and middle
// function describePodium(first, second, ...others) {
// console.log(`Gold: ${first}`);
// console.log(`Silver: ${second}`);
// console.log(`Others: ${others.join(", ")}`);
// }
// describePodium("India", "Australia", "England", "Pakistan", "South Africa");
// // Gold: India
// // Silver: Australia
// // Others: England, Pakistan, South Africa

// // Spread vs Rest Comparison
// // Feature Spread ( ... ) Rest ( ... )
// // Purpose Expands/Unpacks Collects/Packs
// // Usage Array/Object literals, function calls Function parameters
// // Direction Array → Individual Elements Individual Elements → Array
// // Position Can be anywhere MUST be last parameter
// // Example [...arr] function(...args)
// // SPREAD - Expands array into individual elements
// let arr = [1, 2, 3];
// console.log(...arr); // Output: 1 2 3 (three separate values)
// // REST - Collects individual elements into array
// function collect(...items) {
// console.log(items); // Output: [1, 2, 3] (one array)
// }
// collect(1, 2, 3);



// //Array Destructuring
// let colors = ["Red", "Green", "Blue"];
// let [first, second, third] = colors;
// console.log(first); // "Red"
// console.log(second); // "Green"
// console.log(third); // "Blue"

// //partial destructuring
// let numbers = [1, 2, 3, 4, 5];
// let [first, second] = numbers;
// console.log(first); // 1
// console.log(second); // 2
// // Rest of the array is ignored

// // Skip elements
// let numbers = [10, 20, 30, 40, 50];
// let [first, , third, , fifth] = numbers;
// console.log(first); // 10
// console.log(third); // 30
// console.log(fifth); // 50

// // Swap variables
// let a = 5;
// let b = 10;
// [a, b] = [b, a]; // Swap
// console.log(a); // 10
// console.log(b); // 5

// //With default values
// let [a = 1, b = 2, c = 3] = [10, 20];
// console.log(a); // 10 (from array)
// console.log(b); // 20 (from array)
// console.log(c); // 3 (default value, array only has 2 elements)

// //rest in destructuring
// let numbers = [1, 2, 3, 4, 5];
// let [first, second, ...rest] = numbers;
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]

// //nested array destructuring
// let data = [1, [2, 3], 4];
// let [a, [b, c], d] = data;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4

// //function return destructuring
// function getScores() {
// return [95, 87, 92];
// }
// let [highest, middle, lowest] = getScores();
// console.log(highest); // 95
// console.log(middle); // 87
// console.log(lowest); // 92



// // Object Destructuring
// //object destructuring
// let student = {
// name: "Rahul",
// age: 20,
// grade: "A"
// };
// let { name, age, grade } = student;
// console.log(name); // "Rahul"
// console.log(age); // 20
// console.log(grade); // "A"

// //Order doesn't matter
// let user = { name: "Alice", age: 25, city: "Mumbai" };
// let { city, name, age } = user; // Different order
// console.log(name); // "Alice"
// console.log(age); // 25
// console.log(city); // "Mumbai"

// //Renaming variables
// let user = {
// username: "karan123",
// email: "karan@email.com"
// };
// let { username: id, email: mail } = user;
// console.log(id); // "karan123"
// console.log(mail); // "karan@email.com"
// // console.log(username); // Error: username is not defined

// // Default values
// let settings = { theme: "dark" };
// let { theme, language = "English", notifications = true } = settings;
// console.log(theme); // "dark"
// console.log(language); // "English" (default)
// console.log(notifications); // true (default)

// // Renaming + Default values
// let product = { name: "Laptop", price: 50000 };
// let { name: productName, price, discount = 0 } = product;
// console.log(productName); // "Laptop"
// console.log(price); // 50000
// console.log(discount); // 0 (default)

// //Function parameter destructuring
// function displayUser({ name, age, city = "Unknown" }) {
// console.log(`${name} is ${age} years old and lives in ${city}`);
// }
// displayUser({ name: "Priya", age: 22, city: "Delhi" });
// // Priya is 22 years old and lives in Delhi
// displayUser({ name: "Tom", age: 25 });
// // Tom is 25 years old and lives in Unknown

// // API response destructuring
// let apiResponse = {
// status: "success",
// data: {
// user: "john_doe",
// posts: 150,
// followers: 1200
// },
// timestamp: "2024-01-15"
// };
// let {
// status,
// data: { user, followers },
// timestamp
// } = apiResponse;
// console.log(status); // "success"
// console.log(user); // "john_doe"
// console.log(followers); // 1200
// console.log(timestamp); // "2024-01-15"

// //Rest with object desturcturing
// let user = {
// name: "Alice",
// age: 25,
// email: "alice@email.com",
// phone: "9876543210",
// city: "Mumbai"
// };
// let { name, age, ...otherDetails } = user;
// console.log(name); // "Alice"
// console.log(age); // 25
// console.log(otherDetails);

// //desturcturing in loops
// let students = [
// { name: "Rahul", marks: 85 },
// { name: "Priya", marks: 92 },
// { name: "Arjun", marks: 78 }
// ];
// students.forEach(({ name, marks }) => {
// console.log(`${name} scored ${marks}`);
// });
// // Rahul scored 85
// // Priya scored 92
// // Arjun scored 78


// //Quick reference
// // Array methods
// // reduce - convert array to single value
// array.reduce((acc, curr) => acc + curr, 0);

// //ES6 Features
// // Default Parameters
// function greet(name = "Guest") {}
// // Spread (expand)
// let copy = [...array];
// let merged = {...obj1, ...obj2};
// // Rest (collect)
// function sum(...numbers) {}
// // Destructuring
// let [a, b] = array;
// let {name, age} = object;