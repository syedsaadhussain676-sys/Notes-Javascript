// Steps to create a new element and add it into the webpage
// step 1: Creating an element and adding content to it
// step 2: Appending it to the HTML

// Day 12: DOM Events

// const btn = document.createElement("button");
// btn.innerText = "Click Me";

// const heading = document.querySelector("#heading");
// heading.insertAdjacentElement("afterend", btn);

// console.log(btn)
// btn.onclick = () => {
//   console.log("Button is clicked...");
// };

// btn.onclick = () => {
//     console.log("Clicking button again...")
// }

// const btnfun = () => {
//   console.log("Clicked happend");
// };

// btn.addEventListener("mouseleave", btnfun);

// btn.addEventListener("click", ()=>{
//     console.log("Again clicked...")
// })

// const btn = document.createElement("button");
// btn.innerText = "Like";
// btn.classList.add("like-btn")

// const heading = document.querySelector("#heading");
// heading.insertAdjacentElement("afterend", btn);

// const para = document.createElement("p");
// para.innerText = 0;

// btn.insertAdjacentElement("afterend", para)

// let likeCount = 0;

// btn.addEventListener("click", ()=>{
//     likeCount++
//     para.innerText = likeCount
// })

// toggle implementation

// const btn = document.createElement("button");
// btn.innerText = "Like";

// const heading = document.querySelector("#heading");
// heading.insertAdjacentElement("afterend", btn);

// let isLiked = false;

// btn.addEventListener("click", () => {
//   if (isLiked === false) {
//     isLiked = true;
//     btn.classList.add("like-btn");
//   } else {
//     isLiked = false;
//     btn.classList.remove("like-btn");
//   }
// });

// const heading = document.querySelector("#heading");
// const para = document.querySelector("#para");
// const btn1 = document.querySelector("#btn-1");
// const btn2 = document.querySelector("#btn-2");

// function changeColor() {
//   this.style.backgroundColor = "blue";
// }

// heading.addEventListener("click", changeColor);

// para.addEventListener("click", changeColor);

// btn1.addEventListener("click", changeColor);

// btn2.addEventListener("click", changeColor);

// const inputBox = document.querySelector("#input-box");

// const btn1 = document.querySelector("#btn-1");
// btn1.style.display = "inline-block";
// btn1.style.height = "100px";
// btn1.style.width = "200px";
// btn1.style.position = "absolute";
// btn1.style.top = "0px";
// btn1.style.bottom = "0px";

// document.addEventListener("keydown", (event) => {
//   //   console.log("event is clicked and this event object recieved:: ", event);

//   if (event.code === "ArrowUp") {
//     btn1.style.top = parseInt(btn1.style.top) - 10 + "px";
//   } else if (event.code === "ArrowDown") {
//     btn1.style.top = parseInt(btn1.style.top) + 10 + "px";
//   } else if (event.code === "ArrowLeft") {
//     console.log("moving left");
//   } else if (event.code === "ArrowRight") {
//     console.log("moving right");
//   }
// });

// const form = document.querySelector("form");
// const emailBox = document.querySelector("#email-inp");
// const passBox = document.querySelector("#pass-inp");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const inputVal = emailBox.value;
//   const passVal = passBox.value;

//   console.log(inputVal, passVal);

//   // backend call
// });

// const heading1 = document.querySelector("#heading1");
// console.log(heading1.innerText);

// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // step1: getting input value
//   const emailInp = document.querySelector("#email-inp");
//   const passInp = document.querySelector("#pass-inp");

//   const user = {
//     email: emailInp.value,
//     password: passInp.value,
//   };

//   // backend call send this user object
//   console.log(user);

//   emailInp.value = "";
//   passInp.value = "";
// });

// some events realted to input box

// const searchBox = document.querySelector("#sample-inp");

// searchBox.addEventListener("change", () => {
//   const userInput = searchBox.value;

//   console.log("Generating suggestions for input:: ", userInput);
// });

// const inputBox = document.querySelector("#text-inp");
// const paraBox = document.querySelector("#para");

// inputBox.addEventListener("input", () => {
//   paraBox.innerText = inputBox.value;
// });

// const box = document.querySelector("#box");
// const para = document.querySelector("#para")
// const btn = document.querySelector("#btn")

// btn.addEventListener("click", ()=>{

//   const red = Math.floor(Math.random() * 256) // 0-255
//   const green = Math.floor(Math.random() * 256) // 0-255
//   const blue = Math.floor(Math.random() * 256) // 0-255

//   box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})` // "rgb(233, 234, 9)"
//   para.innerText = `rgb(${red}, ${green}, ${blue})`
// })

// const inputBox = document.querySelector("#input-box");
// const addTodoBtn = document.querySelector("#add-todo-btn");

// function deleteFn() {
//   console.log("delete button clicked");
// }

// let counter = 0;

// addTodoBtn.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.setAttribute("id", counter);

//   counter++;

//   const newParaTag = document.createElement("p");
//   newParaTag.innerHTML = inputBox.value;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerText = "Delete";
//   deleteBtn.setAttribute("onclick", "deleteFn()");

//   const editBtn = document.createElement("button");
//   editBtn.innerText = "Edit";

//   div.insertAdjacentElement("afterbegin", editBtn);
//   div.insertAdjacentElement("afterbegin", deleteBtn);
//   div.insertAdjacentElement("afterbegin", newParaTag);

//   addTodoBtn.insertAdjacentElement("afterend", div);

//   inputBox.value = "";
// });



//Introduction to DOM Eents
// Events are signals that the browser sends to notify your code that something has happened. Think of them like
// notifications on your phone - you don't constantly check your phone, you wait for the notification sound, then
// you react.
// Events can be triggered by:
// User actions: clicking, typing, scrolling, hovering
// Browser actions: page loaded, image finished loading

// Event Listeners with addEventListener
// element.addEventListener(eventType, callbackFunction);

// //basic button click
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log("Button was clicked!");
//     alert("you clicked me!")
// })

// //multiple listeners on same event
// let button = document.querySelector("#myBtn");
// // First listener
// button.addEventListener("click", function() {
// console.log("First action");
// });
// // Second listener (doesn't overwrite the first!)
// button.addEventListener("click", function() {
// console.log("Second action");
// });

// //paragraphs click counter
// let para = document.querySelector("p");
// let count = 0;
// para.addEventListener("click", function() {
// count++;
// para.innerText = `You clicked me ${count} times!`;
// });



// //mouse & pointer events
// //Hover color change
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
// box.style.backgroundColor = "yellow";
// console.log("Mouse entered!");
// });
// box.addEventListener("mouseleave", function() {
// box.style.backgroundColor = "white";
// console.log("Mouse left!");
// });

// //click toggle visibility
// let hideBtn = document.querySelector("#hideBtn");
// let content = document.querySelector("#content");
// hideBtn.addEventListener("click", function() {
// if (content.style.display === "none") {
// content.style.display = "block";
// hideBtn.innerText = "Hide";
// } else {
// content.style.display = "none";
// hideBtn.innerText = "Show";
// }
// });

// //double click to edit
// let heading = document.querySelector("h1");
// heading.addEventListener("dblclick", function() {
// heading.innerText = "You double-clicked me!";
// heading.style.color = "red";
// });

// //Interactive card hover
// let card = document.querySelector(".card");
// card.addEventListener("mouseenter", function() {
// card.style.transform = "scale(1.1)";
// card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
// });
// card.addEventListener("mouseleave", function() {
// card.style.transform = "scale(1)";
// card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
// });


// //The this keyword in event listeners
// //Universal color challenge
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let button = document.querySelector("button");
// function changeColor() {
// this.style.backgroundColor = "lightblue";
// console.log(this.innerText + " was clicked!");
// }
// // Same function works for all three!
// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// button.addEventListener("click", changeColor);

// //Toggle class on click
// let boxes = document.querySelectorAll(".box");
// function toggleActive() {
// this.classList.toggle("active");
// }
// // Apply to all boxes
// for (let box of boxes) {
// box.addEventListener("click", toggleActive);
// }

// //delete button
// let deleteButtons = document.querySelectorAll(".delete-btn");
// function removeItem() {
// this.parentElement.remove(); // Remove the parent div
// console.log("Item deleted!");
// }
// for (let btn of deleteButtons) {
// btn.addEventListener("click", removeItem);
// }

// //Highlight on hover (multiple times)
// let menuItems = document.querySelectorAll(".menu-item");
// function highlight() {
// // Remove highlight from all items first
// for (let item of menuItems) {
// item.style.fontWeight = "normal";
// }
// // Highlight only the clicked one
// this.style.fontWeight = "bold";
// }
// for (let item of menuItems) {
// item.addEventListener("click", highlight);
// }



// //Keyboard event
// //Display typed character
// let input = document.querySelector("input");
// input.addEventListener("keydown", function(event) {
// console.log("Key:", event.key);
// console.log("Code:", event.code);
// });

// //Arrow key navigation (game controls)
// let player = document.querySelector("#player");
// document.addEventListener("keydown", function(event) {
// if (event.code === "ArrowUp") {
// console.log("Move Up");
// player.style.top = (parseInt(player.style.top) - 10) + "px";
// } else if (event.code === "ArrowDown") {
// console.log("Move Down");
// player.style.top = (parseInt(player.style.top) + 10) + "px";
// } else if (event.code === "ArrowLeft") {
// console.log("Move Left");
// player.style.left = (parseInt(player.style.left) - 10) + "px";
// } else if (event.code === "ArrowRight") {
// console.log("Move Right");
// player.style.left = (parseInt(player.style.left) + 10) + "px";
// }
// });

// //Enter key to submit
// let searchBox = document.querySelector("#search");
// searchBox.addEventListener("keydown", function(event) {
// if (event.key === "Enter") {
// console.log("Searching for:", searchBox.value);
// alert("You searched for: " + searchBox.value);
// }
// });

// //keyboard shortcut (control + s)
// document.addEventListener("keydown", function(event) {
// if (event.ctrlKey && event.key === "s") {
// event.preventDefault(); // Stop browser from saving page
// console.log("Custom save triggered!");
// alert("Content saved!");
// }
// });

// //Character event listeners
// let textarea = document.querySelector("textarea");
// let counter = document.querySelector("#counter");
// textarea.addEventListener("keyup", function() {
// let length = textarea.value.length;
// counter.innerText = length + " / 100 characters";
// if (length > 100) {
// counter.style.color = "red";
// } else {
// counter.style.color = "black";
// }
// });



// //Forms events & (prevent defaults())
// //Basic form submission prevention
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
// event.preventDefault(); // STOP the page reload!
// console.log("Form submitted!");
// });

// //login form handler
// let loginForm = document.querySelector("#loginForm");
// loginForm.addEventListener("submit", function(event) {
// event.preventDefault();
// let username = document.querySelector("#username").value;
// let password = document.querySelector("#password").value;
// console.log("Username:", username);
// console.log("Password:", password);
// alert("Welcome, " + username + "!");
// });

// //form validation
// let signupForm = document.querySelector("#signup");
// signupForm.addEventListener("submit", function(event) {
// event.preventDefault();
// let email = document.querySelector("#email").value;
// let age = document.querySelector("#age").value;
// if (age < 18) {
// alert("You must be 18 or older to sign up!");
// } else if (!email.includes("@")) {
// alert("Please enter a valid email!");
// } else {
// alert("Signup successful!");
// console.log("User registered:", email);
// }
// });

// //Search form with Results display
// let searchForm = document.querySelector("#searchForm");
// let results = document.querySelector("#results");
// searchForm.addEventListener("submit", function(event) {
// event.preventDefault();
// let query = document.querySelector("#searchInput").value;
// results.innerText = `You searched for: "${query}"`;
// // Clear the input
// document.querySelector("#searchInput").value = "";
// });



// //Extracting form data
// //get input value
// let nameInput = document.querySelector("#name");
// let btn = document.querySelector("#submitBtn");
// btn.addEventListener("click", function() {
// let userName = nameInput.value; // Use .value for inputs!
// console.log("Name entered:", userName);
// });

// //multiple input fields
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
// event.preventDefault();
// let firstName = document.querySelector("#firstName").value;
// let lastName = document.querySelector("#lastName").value;
// let email = document.querySelector("#email").value;
// console.log("Full Name:", firstName + " " + lastName);
// console.log("Email:", email);
// });

// //Dropdown selection
// let dropdown = document.querySelector("#country");
// let btn = document.querySelector("#selectBtn");
// btn.addEventListener("click", function() {
// let selected = dropdown.value;
// console.log("Selected country:", selected);
// alert("You selected: " + selected);
// });



// //Change vs input events
// // Live character counter (input)
// let textArea = document.querySelector("textarea");
// let counter = document.querySelector("#charCount");
// textArea.addEventListener("input", function() {
// let count = textArea.value.length;
// counter.innerText = count + " characters";
// });

// //Final submission change
// let nameField = document.querySelector("#name");
// nameField.addEventListener("change", function() {
// console.log("Final name:", nameField.value);
// alert("Name saved: " + nameField.value);
// });

// //live search suggestions (input)
// let searchBox = document.querySelector("#search");
// let suggestions = document.querySelector("#suggestions");
// searchBox.addEventListener("input", function() {
// let query = searchBox.value;
// if (query.length > 0) {
// suggestions.innerHTML = `
// <p>Searching for: ${query}</p>
// <p>Result 1: ${query} tutorial</p>
// <p>Result 2: ${query} guide</p>
// `;
// } else {
// suggestions.innerHTML = "";
// }
// });

// //password length meter (input)
// let password = document.querySelector("#password");
// let strength = document.querySelector("#strength");
// password.addEventListener("input", function() {
// let length = password.value.length;
// if (length < 4) {
// strength.innerText = "Weak";
// strength.style.color = "red";
// } else if (length < 8) {
// strength.innerText = "Medium";
// strength.style.color = "orange";
// } else {
// strength.innerText = "Strong";
// strength.style.color = "green";
// }
// });

// //Comparison both events & together
// let input = document.querySelector("#myInput");
// // Fires on every keystroke
// input.addEventListener("input", function() {
// console.log("Typing...", input.value);
// });
// // Fires only when done (blur or Enter)
// input.addEventListener("change", function() {
// console.log("Final value:", input.value);
// alert("You entered: " + input.value);
// });



// //Practice Activity: Interactive Text Editor
// let input = document.querySelector("#textInput");
// let display = document.querySelector("#display");
// input.addEventListener("input", function() {
// display.innerText = input.value;
// });



// //Add features
// let input = document.querySelector("#textInput");
// let display = document.querySelector("#display");
// let clearBtn = document.querySelector("#clearBtn");
// let boldBtn = document.querySelector("#boldBtn");
// // Live update
// input.addEventListener("input", function() {
// display.innerText = input.value;
// });
// // Clear button
// clearBtn.addEventListener("click", function() {
// input.value = "";
// display.innerText = "Your text will appear here...";
// });
// // Bold toggle
// boldBtn.addEventListener("click", function() {
// if (display.style.fontWeight === "bold") {
// display.style.fontWeight = "normal";
// } else {
// display.style.fontWeight = "bold";
// }
// });

// const box1 =document.querySelector("#box-1")
// console.log(box1)
// btn.addEventListener("click", ()=>{

// const red = Math.floor(Math.random() * 256) // 0-255
//   const green = Math.floor(Math.random() * 256) // 0-255
//   const blue = Math.floor(Math.random() * 256) // 0-255

//   box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})` // "rgb(233, 234, 9)"
//   para.innerText = `rgb(${red}, ${green}, ${blue})`
// })


console.log("hello")

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")
const box5 = document.querySelector(".box5")


const btn = document.querySelector("#btn")

btn.addEventListener("click", ()=>{


    const red = Math.floor(Math.random() * 256) // 0-255
  const green = Math.floor(Math.random() * 256) // 0-255
  const blue = Math.floor(Math.random() * 256) // 0-255

    box1.style.backgroundColor = `rgb(${red},${green},${blue})`
    box2.style.backgroundColor = `rgb(${red},${green},${blue})`
    box3.style.backgroundColor = `rgb(${red},${green},${blue})`
    box4.style.backgroundColor = `rgb(${red},${green},${blue})`
    box5.style.backgroundColor = `rgb(${red},${green},${blue})`
})