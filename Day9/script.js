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


// //Double all numbers
// let numbers=[1,2,3,4,5];
// let doubled =numbers.map((num)=> num*2);
// console.log(doubled);
// console.log(numbers);

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



//The filter method