// Example 8: Advance save messages to db (handle db rejection situations)

// Introduction to promises (creating and consuming promises)
// Introduction to promise chaining

// no problem scenarie
// sync
// console.log("First line")

// // async function
// setTimeout(() => {
//     console.log("second line")
// }, 1000);

// // sync
// console.log("third line")

// problem scenarie

// step 1: wrap the sync(2nd function) in an ananomous function (wrapper function)

// Example 1: greet function (async fn) and goodBye function (sync fn)

// async function
// function greet(callback) {
//   setTimeout(() => {
//     console.log("Hello HI");

//     callback(); // goodBye();
//   }, 5000);
// }

// // sync function

// function goodBye() {
//   console.log("Bye");
// }

// greet(() => {
//   // some code
//   goodBye();
// });

// console.log("remaing 1000 lines of code");

// Example 2: calculate sum function and print the sum function

// let result; // 22

// // async function sum
// function calculateSum(callback) {
//   setTimeout(() => {
//     console.log("calculate sum function ran...");
//     result = 22;

//     callback(); // printSum();
//   }, 2000);
// }

// function printSum() {
//   console.log("Print sum function ran...");
//   console.log(result);
// }

// // async
// calculateSum(() => {
//     // sync
//   printSum();
// });

// Example 3: Food delivery simulator functions

// confirm async function hai
// function orderBooked(callback) {
//   let delay = Math.floor(Math.random() * 4); // 0 - 3
//   setTimeout(() => {
//     console.log("Order booked successfully:: ", delay);

//     callback(); // orderPrepared();
//   }, delay * 1000);
// }

// function orderPrepared(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     console.log("Order prepared successfully:: ", delay);

//     callback(); // orderDelivered();
//   }, delay * 1000);
// }

// function orderDelivered(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     console.log("Order delivered successfully:: ", delay);

//     callback(); //  console.log("all steps of order completed");
//   }, delay * 1000);
// }

// orderBooked(() => {
//   orderPrepared(() => {
//     orderDelivered(() => {
//       console.log("all steps of order completed");
//     });
//   });
// });

// Example 4: Color change functions
// const h1 = document.querySelector("h1");

// function changeToRed(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     h1.style.color = "red";

//     callback(); //   changeToYellow();
//   }, delay * 1000);
// }

// function changeToYellow(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     h1.style.color = "yellow";

//     callback(); //  changeToGreen();
//   }, delay * 1000);
// }

// function changeToGreen(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     h1.style.color = "green";

//     callback(); // console.log("all colors applied...")
//   }, delay * 1000);
// }

// changeToRed(() => {
//   changeToYellow(() => {
//     changeToGreen(() => {
//       console.log("all colors applied...");
//     });
//   });
// });

// Example 7: Simple save messages to db functions

// function saveMsg1(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     console.log("Msg 1 saved...");

//     callback(); //  saveMsg2();
//   }, delay * 1000);
// }

// function saveMsg2(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     console.log("Msg 2 saved...");

//     callback(); // saveMsg3();
//   }, delay * 1000);
// }

// function saveMsg3(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     console.log("Msg 3 saved...");

//     callback(); //  console.log("All messages saved successfully...")
//   }, delay * 1000);
// }

// saveMsg1(() => {
//   saveMsg2(() => {
//     saveMsg3(() => {
//       console.log("All messages saved successfully...");
//     });
//   });
// });

// sync
// console.log("js")
// for()

// async
// setTimeout()
// fetch();
// setInterval()

// Example 5: fetchStudentData function and printStudentData function (lab work)

// function fetchStudentData() {
//   console.log("Fetching student data...");

//   setTimeout(() => {
//     const student = {
//       name: "Saad",
//       age: 20,
//       course: "JavaScript"
//     };

//     printStudentData(student);
//   }, 2000);
// }

// function printStudentData(student) {
//   console.log("Student Data:");
//   console.log("Name:", student.name);
//   console.log("Age:", student.age);
//   console.log("Course:", student.course);
// }

// fetchStudentData();

// // Example 6: Register → Send Email → Update Database → Send Welcome SMS (lab work)

// function registerUser() {
//   console.log("Registering user...");

//   setTimeout(() => {
//     console.log("User registered successfully!");

//     sendEmail();
//   }, 1000);
// }

// function sendEmail() {
//   console.log("Sending email...");

//   setTimeout(() => {
//     console.log("Email sent successfully!");

//     updateDatabase();
//   }, 2000);
// }

// function updateDatabase() {
//   console.log("Updating database...");

//   setTimeout(() => {
//     console.log("Database updated successfully!");

//     sendWelcomeSMS();
//   }, 3000);
// }

// function sendWelcomeSMS() {
//   console.log("Sending welcome SMS...");

//   setTimeout(() => {
//     console.log("Welcome SMS sent successfully!");
//   }, 4000);
// }

// registerUser();





// function bioData1(callback){
//     console.log("what is your name...");
//     setTimeout(()=>{
//         console.log("my name is : syed saad");

//         callback();
//     }, 1000);

// }

// function bioData2(callback){
//     console.log("what is your age..");
//     setTimeout(()=>{
//         console.log("my age is : 22");

//         callback();
//     }, 3000);

// }

// function bioData3(callback){
//     console.log("what's qualification...")
//     setTimeout(()=>{
//         console.log("my quali is : completed the Graduation");

//         callback();
//     }, 4000);

// }

// bioData1(()=>{
//     bioData2(()=>{
//         bioData3(()=>{
//             console.log("successfully completed...");
//         });
//     });
// });