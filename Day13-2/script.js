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
