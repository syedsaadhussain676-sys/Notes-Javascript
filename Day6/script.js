//Introduction to objects literals

// let saad = {
//   name: "saad",
//   age: 22,
//   place: "yakutpura",
// };
// console.log(saad);

// let product ={
//     title: "Laptop",
//     price : 40000,
//     inStock :true,
// }
// console.log(product)

// let location = {
//     latitude : "34.3545.N",
//     longitude : "77.1054.N",
//     city: "hyderabad"
// }
// console.log(location)

// let book = {
//     title : "javaScript Guide",
//     author : "john dev",
//     pages : 350,
//     published : 2025,
// }
// console.log(book)

// let post = {
//     userName : "buran",
//     content : "Learning JavaScript",
//     likes : 150,
//     comments: 23
// }
// console.log(post)

// //Accessing object Properties
// //Using dot notation
// let student = { name:"Burhan", age:21,city:"hyderabad"};
// console.log(student.name, student.age, student.city);

// // Using bracket notation
// console.log(student["city"]); // "hyderabad"
// console.log(student["name"]); // "Burhan"

// // When to use bracket notation (spaces in key)
// let person = { "first name": "syed", "last name": "hussain" };
// console.log(person["first name"]);
// console.log(person["last name"]);

// // Using variables with bracket notation
// let key = "age";
// console.log(student[key]); // 21

// // Mixed access
// let car = { brand:"Ferrari",model:"camry",year:2023};
// console.log(car.brand);
// console.log(car["model"]);

// // Modifying Objects (Add, Update, Delete)
// // Updating existing properties
// let student = { name: "saad", age: 21, city: "yakutpura" };
// student.age = 22;
// student.city = "Boston";
// console.log(student); // { name: "Alex", age: 22, city: "Boston" }

// // Adding new properties
// student.grade = "A+";
// student.major = "Computer Science";
// console.log(student);
// // { name: "Alex", age: 22, city: "Boston", grade: "A+", major: "Computer Science" }

// // Deleting properties
// delete student.city;
// console.log(student); // { name: "Alex", age: 22, grade: "A+", major: "Computer Science" }

// //  Multiple modifications
// let product = { name: "Iphone", price: 30000 };
// product.price = 28000; // Update
// product.brand = "Samsung"; // Add
// delete product.name; // Delete
// console.log(product); // { price: 28000, brand: "Samsung" }

// // Using bracket notation for modifications
// let car = { brand: "Honda" };
// car["model"] = "Civic";
// car["year"] = 2024;
// console.log(car); // { brand: "Honda", model: "Civic", year: 2024 }

// // Basic nested objects
// let userDatabase = {
//     user1:{name:"saad",grade:"A+",city:"hyderabad"},
//     user2:{name:"shark",grade:"B",city:"bihar"}
// };
// console.log(userDatabase.user1.name);
// console.log(userDatabase.user2.grade);

// // Company departments
// let company = {
// engineering: { employees: 50, manager: "John" },
// sales: { employees: 30, manager: "Sarah" },
// hr: { employees: 10, manager: "Mike" }
// };
// console.log(company.engineering.employees); // 50
// console.log(company.sales.manager); // "Sarah"

// // Student records with subjects
// let students = {
// student1: { name: "Emma", math: 85, science: 90 },
// student2: { name: "Oliver", math: 78, science: 88 }
// };
// console.log(students.student1.math); // 85
// console.log(students.student2.science); // 88

// // inventory by category
// let inventory = {
// electronics: { laptops: 25, phones: 50 },
// clothing: { shirts: 100, pants: 75 }
// };
// console.log(inventory.electronics.laptops); // 25
// console.log(inventory.clothing.shirts); // 100

// // Accessing and modifying nested values
// let school = {
// classA: { students: 30, teacher: "Ms. Smith" },
// classB: { students: 28, teacher: "Mr. Brown" }
// };
// school.classA.students = 32;
// school.classB.teacher = "Ms. Johnson";
// console.log(school.classA.students); // 32
// console.log(school.classB.teacher); // "Ms. Johnson"

// Array of Objects
// List of students
// let students = [
// { name: "Alice", age: 20, grade: "A" },
// { name: "Bob", age: 21, grade: "B" },
// { name: "Charlie", age: 19, grade: "A+" }
// ];
// console.log(students[0].name); // "Alice"
// console.log(students[1].grade); // "B"
// console.log(students.length); // 3

// //product catalog
// let products =[
//     {id: 101,name:"laptop",price:45000},
//     {id: 102,name:"Mouse",price:500},
//     {id: 103,name:"Keyboard",price:1500}
// ];
// console.log(products[0].name);
// console.log(products[1].price);

// // Social media posts
// let posts = [
// { username: "user1", content: "Hello World!", likes: 50 },
// { username: "user2", content: "JavaScript is fun", likes: 120 },
// { username: "user3", content: "Coding daily", likes: 85 }
// ];
// console.log(posts[1].username); // "user2"
// console.log(posts[0].likes); // 50

// //Course list
// let courses = [
// { name: "Math", id: 101, credits: 3 },
// { name: "Physics", id: 102, credits: 4 },
// { name: "Chemistry", id: 103, credits: 3 }
// ];
// console.log(courses[0].credits); // 3
// console.log(courses[1].name); // "Physics"

// // Example 5: Modifying array of objects
// let cars = [
// { brand: "Toyota", model: "Camry", year: 2020 },
// { brand: "Honda", model: "Civic", year: 2021 }
// ];
// cars[0].year = 2024;
// cars.push({ brand: "Ford", model: "Mustang", year: 2023 });
// console.log(cars[0].year); // 2024
// console.log(cars[2].brand); // "Ford"
// console.log(cars)

// // The math Object (Introduction)
// //Math constants
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045

// // Absolute value
// console.log(Math.abs(-42)); // 42
// console.log(Math.abs(15)); // 15
// console.log(Math.abs(-7.5)); // 7.5

// // Power (exponentiation)
// console.log(Math.pow(2, 3)); // 8 (23)
// console.log(Math.pow(5, 2)); // 25 (52)
// console.log(Math.pow(10, 3)); // 1000 (103)

// // Rounding down and up
// console.log(Math.floor(4.9)); // 4
// console.log(Math.floor(4.1)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.9)); // 5

// // Using Math.PI for calculations
// let radius = 5;
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius * radius;
// console.log(circumference); // 31.41592653589793
// console.log(area); // 78.53981633974483



// // Math.Random()-Generating Random NUmbers
// // Example 1: Basic random decimal
// console.log(Math.random()); // 0.6472... (different each time)
// console.log(Math.random()); // 0.2851...
// console.log(Math.random()); // 0.9234...
// // Example 2: Random decimal scaled to 10
// let num = Math.random() * 10;
// console.log(num); // 4.637... (between 0 and 10)
// // Example 3: Random decimal scaled to 100
// let percentage = Math.random() * 100;
// console.log(percentage); // 73.245... (between 0 and 100)
// // Example 4: Multiple random numbers
// console.log(Math.random() * 5); // 0 to 5
// console.log(Math.random() * 20); // 0 to 20
// console.log(Math.random() * 50); // 0 to 50
// // Example 5: Understanding the range
// console.log(Math.random()); // Could be: 0.000... to 0.999...
// console.log(Math.random() * 10); // Could be: 0.000... to 9.999...
// console.log(Math.random() * 100); // Could be: 0.000... to 99.999...



// // Generating Random Integers
// // Example 1: Random integer from 1 to 10 (step by step)
// let step1 = Math.random(); // 0.463...
// let step2 = step1 * 10; // 4.63...
// let step3 = Math.floor(step2); // 4
// let step4 = step3 + 1; // 5
// console.log(step4); // 5
// // Example 2: Random integer from 1 to 10 (one line)
// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random); // Could be: 1, 2, 3, 4, 5, 6, 7, 8, 9, or 10
// // Example 3: Random integer from 1 to 100
// let random100 = Math.floor(Math.random() * 100) + 1;
// console.log(random100); // 1 to 100
// // Example 4: Random integer from 1 to 6 (dice roll)
// let diceRoll = Math.floor(Math.random() * 6) + 1;
// console.log(diceRoll); // 1, 2, 3, 4, 5, or 6
// // Example 5: Random integer from 1 to 5
// let rating = Math.floor(Math.random() * 5) + 1;
// console.log(rating); // 1, 2, 3, 4, or 5



// // Random Number Formula
// // Example 1: Random number from 1 to 10
// let num = Math.floor(Math.random() * (10 -- 1 + 1)) + 1;
// // Simplifies to: Math.floor(Math.random() * 10) + 1
// console.log(num);
// // Example 2: Random number from 5 to 10
// let num2 = Math.floor(Math.random() * (10 -- 5 + 1)) + 5;
// // Simplifies to: Math.floor(Math.random() * 6) + 5
// console.log(num2); // 5, 6, 7, 8, 9, or 10
// // Example 3: Random number from 50 to 100
// let num3 = Math.floor(Math.random() * (100 -- 50 + 1)) + 50;
// // Simplifies to: Math.floor(Math.random() * 51) + 50
// console.log(num3);
// // Example 4: Random number from 20 to 30
// let num4 = Math.floor(Math.random() * (30 -- 20 + 1)) + 20;
// // Simplifies to: Math.floor(Math.random() * 11) + 20
// console.log(num4);
// // Example 5: Random number from -10 to 10
// let num5 = Math.floor(Math.random() * (10 -- (--10) + 1)) + (--10);
// // Simplifies to: Math.floor(Math.random() * 21) - 10
// console.log(num5);



// // Practical Random Number Applications
// // Example 1: Random dice roll (1-6)
// let dice = Math.floor(Math.random() * 6) + 1;
// console.log("You rolled: " + dice);
// // Example 2: Random choice from array
// let colors = ["red", "green", "blue", "yellow"];
// let randomIndex = Math.floor(Math.random() * colors.length);
// console.log("Random color: " + colors[randomIndex]);
// // Example 3: Random quiz question selector
// let questions = ["Q1", "Q2", "Q3", "Q4", "Q5"];
// let randomQ = Math.floor(Math.random() * questions.length);
// console.log("Random question: " + questions[randomQ]);
// // Example 4: Random ID generator (1000-9999)
// let id = Math.floor(Math.random() * 9000) + 1000;
// console.log("Generated ID: " + id);
// // Example 5: Random percentage (0-100)
// let percentage = Math.floor(Math.random() * 101);
// console.log("Random percentage: " + percentage + "%");
