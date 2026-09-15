//Introduction to Async/Await
//The problem with promise chain

// fetchUserData()
// .then((user)=>{
//     console.log("User:",user);
//     return fetchUserPosts(user.id);
// })
// .then((posts)=>{
//     console.log("Posts:",posts);
//     return fetchUserComments(posts[0].id);
// })
// .then((comments)=>{
//     console.log("comments:",comments);
// })
// .catch((error)=>{
//     console.log("Error:".error);
// });

// async function getUserContent() {
//   try {
//     const user = await fetchUserData();
//     console.log("User:", user);
//     const posts = await fetchUserPosts(user.id);
//     console.log("Posts:", posts);
//     const comments = await fetchPostComments(posts[0].id);
//     console.log("Comments:", comments);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// getUserContent();

// //The Async keyword
// // Normal Function
// function normalGreeting() {
//   return "Hello, Student!";
// }
// console.log(normalGreeting());
// // Output: "Hello, Student!" (regular string)
// // Async Function
// async function asyncGreeting() {
//   return "Hello, Student!";
// }
// console.log(asyncGreeting());
// // Output: Promise { "Hello, Student!" } (Promise object)
// // To get the value from async function
// asyncGreeting().then((message) => {
//   console.log(message);
//   // Output: "Hello, Student!"
// });

// //Async function returning with different values
// // Returning a string
// async function getCourseName() {
//   return "JavaScript Fundamentals";
// }
// getCourseName().then((name) => console.log(name));
// // Output: "JavaScript Fundamentals"
// // Returning a number
// async function getStudentCount() {
//   return 50;
// }
// getStudentCount().then((count) => console.log(count));
// // Output: 50
// // Returning an object
// async function getStudentInfo() {
//   return {
//     name: "Ali",
//     rollNo: 101,
//     course: "Web Development",
//   };
// }
// getStudentInfo().then((info) => console.log(info));
// // Output: { name: "Ali", rollNo: 101, course: "Web Development" }

// //Async function with error
// async function divideNumbers(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero!");
//   }
//   return a / b;
// }
// // Success case
// divideNumbers(10, 2)
//   .then((result) => console.log("Result:", result))
//   .catch((error) => console.log("Error:", error.message));
// // Output: Result: 5
// // Error case
// divideNumbers(10, 0)
//   .then((result) => console.log("Result:", result))
//   .catch((error) => console.log("Error:", error.message));
// // Output: Error: Cannot divide by zero!

// //The Await keyword
// function orderCoffee() {
//   console.log("Order placed");
//   makeCoffee(); // This takes time, but you don't wait
//   console.log("Do other things while coffee is being made");
// }

// //Basic await Usage
// // Simulating an API call that takes 2 seconds
// function fetchStudentData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Saad", grade: "A" });
//     }, 2000);
//   });
// }
// async function displayStudent() {
//   console.log("Fetching student data...");
//   // Execution pauses here for 2 seconds
//   const student = await fetchStudentData();
//   // This line won't run until the Promise resolves
//   console.log("Student Name:", student.name);
//   console.log("Student Grade:", student.grade);
// }
// displayStudent();
// // Output after 2 seconds:
// // Fetching student data...
// // Student Name: Ahmed
// // Student Grade: A

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1: Gathering ingredients");
//       resolve();
//     }, 1000);
//   });
// }
// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 2: Mixing ingredients");
//       resolve();
//     }, 1000);
//   });
// }
// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3: Baking in oven");
//       resolve();
//     }, 1000);
//   });
// }
// async function bakeCake() {
//   console.log("Starting to bake...");
//   await step1(); // Wait 1 second
//   await step2(); // Wait another 1 second
//   await step3(); // Wait another 1 second
//   console.log("Cake is ready!");
// }
// bakeCake();

// //The difference between with and without await
// function slowTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task completed");
//     }, 2000);
//   });
// }

// async function withoutAwait() {
//   console.log("Start");
//   slowTask();
//   console.log("End");
// }

// withoutAwait();
// //With Await
// async function withAwait() {
//   console.log("welcom to TDC");
//   slowTask();
//   console.log("Thank you visit again");
// }
// withAwait();

// //Sequential Execution: The Power of await
// //The problem: Unpredictable Order
// function generateRollNumber() {
//   return new Promise((resolve) => {
//     const delay = Math.random() * 2000;
//     setTimeout(() => {
//       const rollNo = Math.floor(Math.random() * 100) + 1;
//       console.log("Generated Roll No:", rollNo);
//       resolve();
//     }, delay);
//   });
// }

// async function assignRollNumbersChaotic() {
//     console.log("---Starting Assignment---");
//     generateRollNumber();
//     generateRollNumber();
//     generateRollNumber();
//     console.log("---Assignment Completed---");
// }
// assignRollNumbersChaotic();

// async function assignRollNumbersOrdered() {
//   console.log("--- Starting Assignment ---");
//   await generateRollNumber();
//   await generateRollNumber();
//   await generateRollNumber();
//   console.log("--- Assignment Complete ---");
// }
// assignRollNumbersOrdered();

// function processExam(studentName) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const score = Math.floor(Math.random() * 100);
//       console.log(`${studentName}: ${score} marks`);
//       resolve(score);
//     }, 1000);
//   });
// }
// async function gradeExams() {
//   console.log("Grading started...");
//   const score1 = await processExam("Ali");
//   const score2 = await processExam("Sara");
//   const score3 = await processExam("Ahmed");
//   const average = (score1 + score2 + score3) / 3;
//   console.log("Class Average:", average.toFixed(2));
// }
// gradeExams();

// function changeLight(color, duration) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Traffic Light: ${color}`);
//       resolve();
//     }, duration);
//   });
// }
// // Promise Chain
// changeLight("RED", 3000)
//   .then(() => changeLight("YELLOW", 1000))
//   .then(() => changeLight("GREEN", 3000))
//   .then(() => console.log("Traffic cycle complete"))
//   .catch((error) => console.log("Error:", error));

// async function trafficLightCycle() {
//   try {
//     await changeLight("RED", 3000); // Stop for 3 seconds
//     await changeLight("YELLOW", 1000); // Get ready for 1 second
//     await changeLight("GREEN", 3000); // Go for 3 seconds
//     console.log("Traffic cycle complete");
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// trafficLightCycle();

// function validateEmail(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email.includes("@")) {
//         resolve(email);
//       } else {
//         reject("Invalid email");
//       }
//     }, 1000);
//   });
// }
// function checkEmailExists(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const exists = false; // Simulate database check
//       if (exists) {
//         reject("Email already registered");
//       } else {
//         resolve(email);
//       }
//     }, 1000);
//   });
// }
// function createUser(email) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 123, email: email });
//     }, 1000);
//   });
// }
// // Promise Chain
// validateEmail("user@example.com")
//   .then((email) => checkEmailExists(email))
//   .then((email) => createUser(email))
//   .then((user) => console.log("User created:", user))
//   .catch((error) => console.log("Registration failed:", error));

// async function registerUser(email) {
//   try {
//     await validateEmail(email);
//     await checkEmailExists(email);
//     const user = await createUser(email);
//     console.log("User created:", user);
//   } catch (error) {
//     console.log("Registration failed:", error);
//   }
// }
// registerUser("user@example.com");

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve([1, 2, 3, 4, 5]), 1000);
//   });
// }
// function processData(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processed = data.map((num) => num * 2);
//       resolve(processed);
//     }, 1000);
//   });
// }
// function saveData(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Saved:", data);
//       resolve("Success");
//     }, 1000);
//   });
// }
// // Promise Chain
// fetchData()
//   .then((data) => {
//     console.log("Fetched:", data);
//     return processData(data);
//   })
//   .then((processed) => {
//     console.log("Processed:", processed);
//     return saveData(processed);
//   })
//   .then((result) => console.log("Result:", result))
//   .catch((error) => console.log("Error:", error));

// async function dataPipeline() {
//   try {
//     const data = await fetchData();
//     console.log("Fetched:", data);
//     const processed = await processData(data);
//     console.log("Processed:", processed);
//     const result = await saveData(processed);
//     console.log("Result:", result);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// dataPipeline();

// function riskyOperation() {
//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5; // 50% chance
//     setTimeout(() => {
//       if (success) {
//         resolve("Operation successful!");
//       } else {
//         reject("Operation failed!");
//       }
//     }, 1000);
//   });
// }
// async function performOperation() {
//   try {
//     console.log("Starting operation...");
//     const result = await riskyOperation();
//     console.log(result);
//   } catch (error) {
//     console.log("Caught error:", error);
//   }
// }
// performOperation();

// function checkInternet() {
//   return new Promise((resolve, reject) => {
//     const isOnline = true; // Simulate internet check
//     setTimeout(() => {
//       if (isOnline) {
//         resolve("Internet connected");
//       } else {
//         reject("No internet connection");
//       }
//     }, 500);
//   });
// }
// function downloadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const fileExists = true; // Simulate file check
//       if (fileExists) {
//         resolve(`Downloaded: ${filename}`);
//       } else {
//         reject(`File not found: ${filename}`);
//       }
//     }, 1500);
//   });
// }
// function installFile(filename) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Installed: ${filename}`);
//     }, 1000);
//   });
// }
// async function downloadAndInstall(filename) {
//   try {
//     // Step 1: Check internet
//     const internetStatus = await checkInternet();
//     console.log(internetStatus);
//     // Step 2: Download file
//     const downloadStatus = await downloadFile(filename);
//     console.log(downloadStatus);
//     // Step 3: Install file
//     const installStatus = await installFile(filename);
//     console.log(installStatus);
//     console.log("All done!");
//   } catch (error) {
//     console.log("Process failed:", error);
//     console.log("Please try again later");
//   }
// }
// downloadAndInstall("ReactJS-Setup.exe");

// function validateAge(age) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age < 0) {
//         reject({ type: "INVALID_AGE", message: "Age cannot be negative" });
//       } else if (age < 18) {
//         reject({ type: "UNDERAGE", message: "Must be 18 or older" });
//       } else {
//         resolve("Age verified");
//       }
//     }, 1000);
//   });
// }
// async function registerStudent(name, age) {
//   try {
//     console.log(`Registering ${name}...`);
//     await validateAge(age);
//     console.log("Registration successful!");
//   } catch (error) {
//     if (error.type === "INVALID_AGE") {
//       console.log("Error:", error.message);
//       console.log("Please enter a valid age");
//     } else if (error.type === "UNDERAGE") {
//       console.log("Error:", error.message);
//       console.log("Parent consent required");
//     } else {
//       console.log("Unknown error:", error);
//     }
//   }
// }
// registerStudent("Ali", 16);

// function processPayment(amount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = amount <= 1000;
//       if (success) {
//         resolve(`Payment of $${amount} processed`);
//       } else {
//         reject(`Payment of $${amount} failed: Insufficient balance`);
//       }
//     }, 2000);
//   });
// }
// async function makePayment(amount) {
//   console.log("Processing payment...");
//   try {
//     const result = await processPayment(amount);
//     console.log("Success:", result);
//   } catch (error) {
//     console.log("Failed:", error);
//   } finally {
//     // This // This ALALWWAAYS runs, whether success or failur YS runs, whether success or failuree
//     console.log("Transaction complete");
//     console.log("Receipt sent to email");
//   }
// }
// makePayment(500);
// // Output (success):
// // Processing payment...
// // Success: Payment of $500 processed
// // Transaction complete
// // Receipt sent to email
// makePayment(1500);
// // Output (failure):
// // Processing payment...
// // Failed: Payment of $1500 failed: Insufficient balance
// // Transaction complete
// // Receipt sent to email

// function fetchWeatherData(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const weatherData = {
//         Lahore: { temp: 25, condition: "Sunny" },
//         Karachi: { temp: 30, condition: "Hot" },
//         Islamabad: { temp: 20, condition: "Pleasant" },
//       };
//       if (weatherData[city]) {
//         resolve(weatherData[city]);
//       } else {
//         reject(`Weather data not found for ${city}`);
//       }
//     }, 1500);
//   });
// }
// // TODO: Write an async function that:
// // 1. Fetches weather for "Lahore"
// // 2. Logs the temperature and condition
// // 3. Handles errors properly
// // Your code here:
// async function getWeather() {
//   try {
//     const weather = await fetchWeatherData("Lahore");
//     console.log(`Temperature: ${weather.temp}°C`);
//     console.log(`Condition: ${weather.condition}`);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// getWeather();

// function fetchStudentGrades(studentId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const grades = {
//         math: 85,
//         english: 90,
//         science: 88,
//       };
//       resolve(grades);
//     }, 1000);
//   });
// }
// function calculateAverage(grades) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const subjects = Object.keys(grades);
//       const total = subjects.reduce((sum, subject) => sum + grades[subject], 0);
//       const average = total / subjects.length;
//       resolve(average);
//     }, 500);
//   });
// }
// // TODO: Write an async function that:
// // 1. Fetches grades for student ID 101
// // 2. Calculates the average
// // 3. Logs the result
// // Your code here:
// async function getStudentReport(studentId) {
//   try {
//     const grades = await fetchStudentGrades(studentId);
//     console.log("Grades:", grades);
//     const average = await calculateAverage(grades);
//     console.log("Average:", average);
//     if (average >= 90) {
//       console.log("Grade: A");
//     } else if (average >= 80) {
//       console.log("Grade: B");
//     } else {
//       console.log("Grade: C");
//     }
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// getStudentReport(101);

// function validateFile(file) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (file.size > 5000000) {
//         reject("File too large (max 5MB)");
//       } else if (!file.name.endsWith(".pdf")) {
//         reject("Only PDF files allowed");
//       } else {
//         resolve("File validated");
//       }
//     }, 1000);
//   });
// }
// function uploadFile(file) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`${file.name} uploaded successfully`);
//     }, 2000);
//   });
// }
// function sendNotification(message) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Notification sent: ${message}`);
//     }, 500);
//   });
// }
// // TODO: Write an async function that:
// // 1. Validates the file
// // 2. Uploads it if valid
// // 3. Sends a notification
// // 4. Handles all possible errors
// // Your code here:
// async function handleFileUpload(file) {
//   try {
//     const validation = await validateFile(file);
//     console.log(validation);
//     const upload = await uploadFile(file);
//     console.log(upload);
//     const notification = await sendNotification("Upload complete!");
//     console.log(notification);
//   } catch (error) {
//     console.log("Upload failed:", error);
//   }
// }
// // Test with valid file
// handleFileUpload({ name: "report.pdf", size: 3000000 });
// // Test with invalid file
// handleFileUpload({ name: "image.jpg", size: 2000000 });

// function getData() {
// const data = await fetchData(); // SyntaxError!
// return data;
// }
// async function getData() {
// const data = await fetchData();
// return data;
// }

// function slowOperation() {
// return new Promise((resolve) => {
// setTimeout(() => resolve("Done"), 2000);
// });
// }
// // ❌ WRONG - result is a Promise, not the value
// async function processData() {
// const result = slowOperation(); // Missing await!
// console.log(result); // Logs: Promise { <pending> }
// }
// // ✅ CORRECT
// async function processData() {
// const result = await slowOperation();
// console.log(result);
// }

// function riskyTask() {
// return new Promise((resolve, reject) => {
// reject("Something went wrong!");
// });
// }
// // ❌ WRONG - Unhandled promise rejection
// async function doTask() {
// const result = await riskyTask(); // This will crash!
// console.log(result);
// }
// // ✅ CORRECT
// async function doTask() {
// try {
// const result = await riskyTask();
// console.log(result);
// } catch (error) {
// console.log("Error:", error);
// }
// }

// // ❌ WRONG - await in regular function
// function getData() {
// const users = awaitfetchUsers(); // Error!
// return users;
// }
// // ❌ WRONG - await in top-level code (in older JS)
// const data = await fetchData(); // Only works in ES modules
// // ✅ CORRECT - Wrap in async function
// async function getData() {
// const users = await fetchUsers();
// return users;
// }
// // ✅ CORRECT - Use IIFE (Immediately Invoked Function Expression)
// (async () => {
// const data = await fetchData();
// console.log(data);
// })();

// function saveMsg1() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isDBAvailable = Math.random() > 0.4;

//     setTimeout(() => {
//       if (isDBAvailable) {
//         resolve("Train 1 reached ");
//       } else {
//         reject("Train 1 crashed");
//       }
//     }, delay * 1000);
//   });
// }

// function saveMsg2() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isDBAvailable = Math.random() > 0.4;

//     setTimeout(() => {
//       if (isDBAvailable) {
//         resolve("Train 2 reached");
//       } else {
//         reject("Train 2 crashed");
//       }
//     }, delay * 1000);
//   });
// }

// function saveMsg3() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isDBAvailable = Math.random() > 0.4;

//     setTimeout(() => {
//       if (isDBAvailable) {
//         resolve("Train 3 reahced");
//       } else {
//         reject("Train 3 crashed");
//       }
//     }, delay * 1000);
//   });
// }

// promise consumption:
// approach 1: .then().catch() (promise chaining)
// approach 2: async await

// async function approach2() {
//   try {
//     let resolveMsg1 = await saveMsg1();
//     console.log(resolveMsg1);

//     let resolveMsg2 = await saveMsg2();
//     console.log(resolveMsg2);

//     let resolveMsg3 = await saveMsg3();
//     console.log(resolveMsg3);

//     console.log("All trains reached");
//   } catch (rejectMsg) {
//     console.log(rejectMsg)
//   }
// }

// approach2();

// Example 2: Registeration form

// step1: submitting registration form

// creating promisified async function using approach 1: new Promise keyword
// function register() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
//     let isPass = Math.random() > 0.2;
//     setTimeout(() => {
//       if (isPass) {
//         resolve("Registraion form submitted by user");
//       } else {
//         reject("Registration form not submitted by user");
//       }
//     }, delay);
//   });
// }

// // creating promisified async function using approach 2: async keyword
// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function register() {
//   let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
//   let isPass = Math.random() > 0.2;

//   await wait(delay); // creating fake delay

//   if (isPass) {
//     return "Registraion form submitted by user"; // return is equal to resolove() in async wala promisified fn
//   } else {
//     throw new Error("Registration form not submitted by user"); // throw is equal to reject() in async wala promisified fn
//   }
// }

// function sendVerificationEmail() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
//     let isPass = Math.random() > 0.2;
//     setTimeout(() => {
//       if (isPass) {
//         resolve("Verified by user");
//       } else {
//         reject("User didn't verify the email");
//       }
//     }, delay);
//   });
// }

// function saveToDB() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
//     let isPass = Math.random() > 0.2;
//     setTimeout(() => {
//       if (isPass) {
//         resolve("User saved to DB");
//       } else {
//         reject("User not saved to DB");
//       }
//     }, delay);
//   });
// }

// function welcomeSMS() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
//     let isPass = Math.random() > 0.2;
//     setTimeout(() => {
//       if (isPass) {
//         resolve("Welcome sms send");
//       } else {
//         reject("Welcome sms unable to send");
//       }
//     }, delay);
//   });
// }

// async function newUserRegistraiton() {
//   try {
//     let response1 = await register();
//     console.log(response1);

//     let response2 = await sendVerificationEmail();
//     console.log(response2);

//     let response3 = await saveToDB();
//     console.log(response3);

//     let response4 = await welcomeSMS();
//     console.log(response4);

//     console.log("User succesfully registered and all steps completed");
//   } catch (rejectMsg) {
//     console.log(rejectMsg);
//   }
// }

// newUserRegistraiton();
