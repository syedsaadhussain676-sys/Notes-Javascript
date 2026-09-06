// // JavaScript Day 10: The Document Object Model (DOM)
// // The DOM makes your webpage interactive and dynamic!
// console.log(document); // Shows your entire HTML page

// //The document object
// //Two ways to inspect the document
// // Method 1: See it as HTML
// console.log(document);
// // Output: Shows HTML tags like <html>, <body>, <h1>...
// // Method 2: See it as a JavaScript object
// console.dir(document);
// // Output: Shows all properties and methods you can use



// //Selecting Element by ID
// documnent.getElementByID("id_name")

// //Selecting the image
// let mainImg = document.getElementById("mainImg")
// console.log(mainImg);
// // Output: <img src="..." id="mainImg">

// //selecting the heading
// let heading = document.getElementById("heading1");
// console.log(heading);
// // Output: <h1 id="heading1">The Solar System</h1>

// //check if Element Exists
// let element = document.getElementById("nonexistent");
// console.log(element);
// // Output: null (element doesn't exist)


// console.dir(document);

// let document = {
//   all: [
//     {
//       innerText: "Day 10 JS",
//     },
//     {},
//     {},
//     {},
//     {},
//   ],
// };

// reading an object
// console.log(document.all[6].innerText);

// // updating an object value

// document.all[6].innerText = "Hi you are hacked";

// console.log(document);

// 1: selecting an HTML element

// console.log()

// setTimeout(() => {
//   console.log("Testing timeout");
//   document.all[6].innerText = "Hi How are you";
// }, 2000);

// methods
// 1 select elements by tag name

// document.all[6].innerText

// array, collection, nodeList []

// return an array
// const h1Arr = document.getElementsByTagName("h1");

// h1Arr[1].innerText = "Abc"

// 2. select elements by id

// const mainH1 = document.getElementById("main-heading");

// console.log(mainH1);

// mainH1.innerText = "Abc";

// 3. select element by classname

// const liArr = document.getElementsByClassName("list-item");

// console.log(liArr);

// liArr[2].innerText = liArr[2].innerText + " on time";

// const liArr = document.querySelectorAll(".list-item");
// console.log(liArr);



// //Selecting Elements by Class Name
// document.getElementsByClassName("class_name")

// //select all small images
// let oldImages = document.getElementsByClassName("oldImg")
// console.log(oldImages)
// // Output: HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]
// console.log(oldImages.length); // 3


// //Access individual element
// let oldImages = document.getElementsByClassName("oldImg");
// console.log(oldImages[0]); // First image
// console.log(oldImages[1]); // Second image
// console.log(oldImages[2]); // Third image

// //loop through the collection
// let oldImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < oldImages.length; i++) {
// console.log(oldImages[i]);
// }
// // Prints each image one by one

// //select box links 
// let boxLinks = document.getElementsByClassName("boxLink");
// console.log(boxLinks);
// // Output: HTMLCollection of all elements with class "boxLink"



// //Selecting Element by the Tag
// document.getElementsByTagName()

// //selecting all paragraphs
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
// // Output: HTMLCollection(2) - both paragraph elements

// //count element 
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs.length); // 2

// //select All links
// let allLinks = document.getElementsByTagName("a");
// console.log(allLinks);
// // Output: HTMLCollection of all <a> tags on the page
// console.log(allLinks.length); // Total number of links

// //select all images
// let allImages = document.getElementsByTagName("img");
// console.log(allImages);
// // Output: HTMLCollection(4) - includes mainImg and 3 oldImg



// //Query Selectors (The Modern Way!)
// querySelector() - Returns the first matching element
// querySelectorAll() - Returns all matching elements (NodeList)

// //select by ID
// let heading = document.querySelector("#heading1");
// console.log(heading);
// // Output: <h1 id="heading1">The Solar System</h1>

// //select by class (only first match)
// let firstOldImage = document.querySelector(".oldImg");
// console.log(firstOldImage);
// // Output: Only the FIRST image with class "oldImg"

// //Select All Elements with querySelectorAll

// //Select All Elements with querySelectorAll
// let allOldImages = document.querySelectorAll(".oldImg");
// console.log(allOldImages);
// // Output: NodeList(3) - all three images

// //Select by Tag
// let firstParagraph = document.querySelector("p");
// console.log(firstParagraph);
// // Output: The first <p> element

// //Complex Selectors (Links Inside a Specific Div)
// let boxLinks = document.querySelectorAll(".box a");
// console.log(boxLinks);
// // Output: NodeList of all <a> tags INSIDE the .box div


// // InnerText
// //get visible text
// let para = document.querySelector("#description");
// console.log(para.innerText);
// // Output: "The Solar System formed from a dense region..."
// // (Clean, formatted text)

// //change heading text
// let heading = document.querySelector("#heading1");
// heading.innerText = "Our Amazing Solar System";
// // The heading on the page changes immediately!

// //get text from multiple element 
// let firstPara = document.querySelector("p");
// console.log(firstPara.innerText);
// // Output: Clean paragraph text without HTML tags



// //Text content
//get all text content 
// let para = document.querySelector("#description");
// console.log(para.textContent);
// // Output: All text including any hidden elements and spacing

// // Change Text Content
// let heading = document.querySelector("h1");
// heading.textContent = "Welcome to Space!";
// // Updates the heading

// // Compare with innerText
// let element = document.querySelector("#description");
// console.log(element.innerText); // Formatted, visible only
// console.log(element.textContent); // Raw, includes everything


// //.InnerHTML
// //See the HTML Structure
// let para = document.querySelector("p");
// console.log(para.innerHTML);
// // Output: "<b>The Solar System</b> is the gravitationally
// // bound system of the <a href='...'>Sun</a>..."

// //Add HTML tags
// let heading = document.querySelector("#heading1");
// heading.innerHTML = "<u>The Solar System</u>";
// // The heading is now underlined!

// //add complex HTML
// let heading = document.querySelector("h1");
// heading.innerHTML = "The <span style='color: gold;'>Solar</span> System";
// // "Solar" will be displayed in gold color

// //read links from paragraph
// let para = document.querySelector("p");
// console.log(para.innerHTML);
// // You can see all the <a> tags with their href attributes



// Selection Practicen
// 1. Select the main image by its ID
// 2. Select all images with class "oldImg"
// 3. Select all paragraph elements
// 4. Select the description paragraph using querySelector
// 5. Select all links inside the .box div

// Content Manipulation
// 1. Get the text of the main heading
// 2. Change the heading to "Exploring Our Solar System"
// 3. Get the innerHTML of the first paragraph
// 4. Change the first h2 to include a star emoji ⭐
// 5. Log the innerText of the description paragraph

// Combining Skills
// 1. Select all images with class "oldImg"
// 2. Log how many images you found
// 3. Select the first paragraph and get its text
// 4. Change the main heading using innerHTML to include <strong> tags
// 5. Select all boxLinks and log their count