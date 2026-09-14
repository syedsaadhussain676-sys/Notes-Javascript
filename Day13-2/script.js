// //promesis:the solution
// // A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It's a
// // placeholder for a value that will be available in the future.

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Operation successful!");
//   } else {
//     reject("Operation failed!");
//   }
// });
// console.log(myPromise);

// let internetSpeed = "fast";
// let downloadFile = new Promise((resolve, reject) => {
//   console.log("Download started...");
//   setTimeout(() => {
//     if (internetSpeed === "fast") {
//       resolve("File downloaded successfully!");
//     } else {
//       reject("Download failed: Slow internet");
//     }
//   }, 2000);
// });
// console.log("Download initiated");
// console.log(downloadFile);

// function saveToDatabase(data) {
//   return new Promise((resolve, reject) => {
//     console.log("Saving to database...");
//     setTimeout(() => {
//       let dbAvailable = true;
//       if (dbAvailable) {
//         resolve({
//           message: "Data saved successfully",
//           id: 12345,
//           timestamp: new Date(),
//         });
//       } else {
//         reject("Database connection failed");
//       }
//     }, 1500);
//   });
// }
// let savePromise = saveToDatabase({ name: "saad", age: 25 });
// console.log(savePromise);

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success! Data is here.");
//   }, 1000);
// });
// promise.then((message) => {
//   console.log(message);
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error! Something went wrong.");
//   }, 4000);
// });
// promise.catch((error) => {
//   console.log(error);
// });

// let loginStatus = "success";
// let loginPromises = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (loginStatus === "success") {
//       resolve("Login successful! Welcome back.");
//     } else {
//       reject("Login failed! Invalid credentials.");
//     }
//   }, 2000);
// });

// loginPromises.then((message) => {
//     console.log(message);
//     console.log("Redirecting to dashboard...")
// })
// .catch((error)=>{
//     console.log(error);
//     console.log("Please try again.");
// });

// function fetchUserProfile(userId) {
// return new Promise((resolve, reject) => {
// console.log("Fetching user profile...");
// setTimeout(() => {
// if (userId > 0) {
// resolve({
// id: userId,
// name: "Syed Saad Hussain",
// email: "syedsaadhussain676@gmail.com",
// role: "Student"
// });
// } else {
// reject("Invalid user ID");
// }
// }, 2000);
// });
// }
// fetchUserProfile(101)
// .then((user) => {
// console.log("User found!");
// console.log("Name:", user.name);
// console.log("Email:", user.email);
// })
// .catch((error) => {
// console.log("Error:", error);
// });

// fetchUserProfile(-1)
// .then((user) => {
// console.log("User found!", user);
// })
// .catch((error) => {
// console.log("Error:", error);
// });

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1 complete");
//       resolve("Data from step 1");
//     }, 1000);
//   });
// }
// function step2(previousData) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 2 complete");
//       console.log("Received:", previousData);
//       resolve("Data from step 2");
//     }, 1000);
//   });
// }
// function step3(previousData) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3 complete");
//       console.log("Received:", previousData);
//       resolve("Final result");
//     }, 1000);
//   });
// }
// step1()
//   .then((result1) => {
//     return step2(result1);
//   })
//   .then((result2) => {
//     return step3(result2);
//   })
//   .then((finalResult) => {
//     console.log("All done!", finalResult);
//   })
//   .catch((error) => {
//     console.log("Error at some step:", error);
// });

// function changeColorPromise(color, delay) {
// return new Promise((resolve) => {
// setTimeout(() => {
// document.body.style.backgroundColor = color;
// console.log("Changed to", color);
// resolve();
// }, delay);
// });
// }
// // Clean, flat, readable!
// changeColorPromise("red", 1000)
// .then(() => {
// return changeColorPromise("orange", 2000);
// })
// .then(() => {
// return changeColorPromise("green", 3000);
// })
// .then(() => {
// return changeColorPromise("blue", 4000);
// })
// .then(() => {
// console.log("All colors complete!");
// })
// .catch((error) => {
// console.log("Error:", error);
// });

// function registerUser(username) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("User registered:", username);
//       resolve(username);
//     }, 1000);
//   });
// }
// function sendVerificationEmail(username) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Verification email sent to", username);
//       resolve(username);
//     }, 1000);
//   });
// }
// function updateDatabase(username) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Database updated for", username);
//       resolve(username);
//     }, 1000);
//   });
// }
// function sendWelcomeSMS(username) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Welcome SMS sent to", username);
//       resolve(username);
//     }, 1000);
//   });
// }
// // Beautiful, readable chain!
// registerUser("john_doe")
//   .then(sendVerificationEmail)
//   .then(updateDatabase)
//   .then(sendWelcomeSMS)
//   .then((username) => {
//     console.log("Registration complete for", username);
//   })
//   .catch((error) => {
//     console.log("Registration failed:", error);
// });

// function getUser(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: userId, name: "Alice" });
//     }, 1000);
//   });
// }
// function getUserOrders(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         user: user,
//         orders: ["Order1", "Order2", "Order3"],
//       });
//     }, 1000);
//   });
// }
// function calculateTotal(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         user: data.user,
//         orders: data.orders,
//         total: 2500,
//       });
//     }, 1000);
//   });
// }
// getUser(101)
//   .then((user) => {
//     console.log("Got user:", user.name);
//     return getUserOrders(user);
//   })
//   .then((data) => {
//     console.log("Got orders:", data.orders);
//     return calculateTotal(data);
//   })
//   .then((finalData) => {
//     console.log("User:", finalData.user.name);
//     console.log("Total orders:", finalData.orders.length);
//     console.log("Total amount:", finalData.total);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
// });

// function checkResult(marks) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (marks >= 40) {
//         resolve("Passed! Congratulations!");
//       } else {
//         reject("Failed. Better luck next time.");
//       }
//     }, 1000);
//   });
// }
// // Test it
// checkResult(75)
//   .then((message) => console.log(message))
// .catch((error) => console.log(error));

// function login(username) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Logged in as", username);
//       resolve(username);
//     }, 1000);
//   });
// }
// function fetchProfile(username) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ username: username, bio: "Web Developer" });
//     }, 1000);
//   });
// }
// function fetchPosts(profile) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         profile: profile,
//         posts: ["Post 1", "Post 2", "Post 3"],
//       });
//     }, 1000);
//   });
// }
// // Chain them together
// login("alice_dev")
//   .then(fetchProfile)
//   .then(fetchPosts)
//   .then((data) => {
//     console.log("Profile:", data.profile);
//     console.log("Posts:", data.posts);
//   })
// .catch((error) => console.log("Error:", error));

// function randomOperation() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let random = Math.random();
//       if (random > 0.5) {
//         resolve("Success! Random value: " + random);
//       } else {
//         reject("Failed! Random value: " + random);
//       }
//     }, 1000);
//   });
// }
// randomOperation()
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

// function fetchAPI(endpoint) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (endpoint === "/users") {
//         resolve({ data: ["User1", "User2", "User3"], status: 200 });
//       } else if (endpoint === "/posts") {
//         resolve({ data: ["Post1", "Post2"], status: 200 });
//       } else {
//         reject({ error: "Endpoint not found", status: 404 });
//       }
//     }, 1500);
//   });
// }

// function queryDatabase(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const users = {
//         101: { name: "Rahul", email: "rahul@example.com" },
//         102: { name: "Priya", email: "priya@example.com" },
//         103: { name: "Amit", email: "amit@example.com" },
//       };
//       if (users[id]) {
//         resolve(users[id]);
//       } else {
//         reject("User not found in database");
//       }
//     }, 1000);
//   });
// }

// function downloadFile(filename) {
//   return new Promise((resolve, reject) => {
//     console.log("Downloading", filename, "...");
//     setTimeout(() => {
//       if (filename.endsWith(".pdf") || filename.endsWith(".jpg")) {
//         resolve("Downloaded: " + filename + " (Size: 2.5 MB)");
//       } else {
//         reject("Error: Unsupported file format");
//       }
//     }, 2000);
//   });
// }

// function checkEligibility(marks) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Checking eligibility...");
//       if (marks >= 60) {
//         resolve({ eligible: true, marks: marks });
//       } else {
//         reject("Not eligible: Marks too low");
//       }
//     }, 1000);
//   });
// }
// function registerStudent(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Registering student...");
//       resolve({
//         ...data,
//         studentId: "STU" + Math.floor(Math.random() * 1000),
//         enrolled: true,
//       });
//     }, 1000);
//   });
// }
// function sendConfirmation(student) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Sending confirmation email...");
//       resolve("Enrollment complete! Student ID: " + student.studentId);
//     }, 1000);
//   });
// }

// function searchFlights(destination) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const flights = ["Mumbai", "Delhi", "Bangalore", "Chennai"];
//       if (flights.includes(destination)) {
//         resolve({
//           destination: destination,
//           flightNumber: "AI" + Math.floor(Math.random() * 1000),
//           price: 5000,
//         });
//       } else {
//         reject("No flights available to " + destination);
//       }
//     }, 1000);
//   });
// }
// function selectSeat(flight, seatNumber) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ ...flight, seat: seatNumber });
//     }, 800);
//   });
// }
// function makePayment(booking) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.2; // 80% success rate
//       if (success) {
//         resolve({ ...booking, paymentId: "PAY" + Date.now() });
//       } else {
//         reject("Payment failed. Please try again.");
//       }
//     }, 1500);
//   });
// }
// function sendTicket(booking) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         ...booking,
//         ticketId: "TKT" + Date.now(),
//         message: "Ticket sent to your email!",
//       });
//     }, 500);
//   });
// }

// function gatherIngredients(recipe) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const available = ["Pasta", "Pizza", "Curry"];
//       if (available.includes(recipe)) {
//         resolve({ recipe: recipe, ingredients: "gathered" });
//       } else {
//         reject("Ingredients not available for " + recipe);
//       }
//     }, 1000);
//   });
// }
// function prepIngredients(dish) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Chopping, washing, measuring...");
//       resolve({ ...dish, prepped: true });
//     }, 1500);
//   });
// }
// function cook(dish, duration) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Cooking", dish.recipe, "...");
//       resolve({ ...dish, cooked: true });
//     }, duration);
//   });
// }
// function serve(dish) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ ...dish, served: true, message: "Enjoy your meal!" });
//     }, 500);
//   });
// }

// function fetchData(source) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = [12, 45, 67, 89, 34, 23, 56, 78, 90, 11];
//       resolve({ source: source, rawData: data });
//     }, 1000);
//   });
// }
// function cleanData(dataset) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // Remove numbers less than 20
//       const cleaned = dataset.rawData.filter((num) => num >= 20);
//       resolve({ ...dataset, cleanedData: cleaned });
//     }, 1000);
//   });
// }
// function analyzeData(dataset) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const sum = dataset.cleanedData.reduce((a, b) => a + b, 0);
//       const avg = sum / dataset.cleanedData.length;
//       resolve({ ...dataset, average: avg, total: sum });
//     }, 1000);
//   });
// }
// function generateReport(dataset) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const report = `
// Report for ${dataset.source}:
// Total records: ${dataset.cleanedData.length}
// Sum: ${dataset.total}
// Average: ${dataset.average.toFixed(2)}
// `;
//       resolve(report);
//     }, 500);
//   });
// }

// function completeLevel(levelNumber, playerScore) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const requiredScore = levelNumber * 100;
//       if (playerScore >= requiredScore) {
//         console.log(`✅ Level ${levelNumber} completed!`);
//         resolve({
//           level: levelNumber,
//           score: playerScore,
//           nextLevel: levelNumber + 1,
//         });
//       } else {
//         reject(`❌ Failed Level ${levelNumber}. Score too low.`);
//       }
//     }, 1000);
//   });
// }
// function unlockReward(gameData) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const rewards = ["Gold Sword", "Magic Shield", "Speed Boots"];
//       resolve({
//         ...gameData,
//         reward: rewards[gameData.level - 1],
//         message:
//           "Congratulations! You unlocked: " + rewards[gameData.level - 1],
//       });
//     }, 1000);
//   });
// }

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1: Success");
//       resolve("Data from step 1");
//     }, 1000);
//   });
// }
// function step2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Step 2: Failed!");
//     }, 1000);
//   });
// }
// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3: Success");
//       resolve("Data from step 3");
//     }, 1000);
//   });
// }

// function slowAPI() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Slow API responded"), 3000);
//   });
// }
// function fastAPI() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Fast API responded"), 1000);
//   });
// }
// function mediumAPI() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Medium API responded"), 2000);
//   });
// }

// // Step 1: Create the promise(s)
// function myFunction() {
//   return new Promise((resolve, reject) => {
//     // Your logic here
//   });
// }
// // Step 2: Consume with .then() and .catch()
// myFunction()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// // Step 3: For chaining, return promises
// myFunction()
//   .then((result) => {
//     return anotherFunction(result);
//   })
//   .then((finalResult) => {
//     console.log(finalResult);
//   })
//   .catch((error) => {
//     console.log(error);
// });
