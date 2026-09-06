// Selectors -
// .getElementById()
// .getElementsByClassName()
// .getElementsByTagName()
// .querySelector()
// .querySelectorAll()

// indirect-way of selecting an element's object
// step 1: select the one you recognize
// step 2: Apply one of these properties
//          - .parentElement
//          - .children
//          - previousElementSibling
//          - nextElementSibling

// -- DOM manipulation
// 1. Text of Element object
// 2. Attributes of Element object
// 3. style of Element object
// 4. classList of Element object

// -- creating and adding new elements in HTML through javascript
// Step 1: Creating an element :: document.createElement("tagName")

// Step 2: Append it into HTML

// 1.  Some Properties of Element Objects:

// .innerText
// .innerHTML
// .textContent

// 2.  Attributes

// const heading1 = document.querySelector("#heading1");

// console.dir(heading1);

// const idAttr = heading1.getAttribute("class");
// console.log(idAttr);

// setInterval(() => {

//     setTimeout(() => {
//         heading1.setAttribute("class", "red");
//     }, 500);

//      heading1.setAttribute("class", "green");

// }, 1000);

// const imgArr = document.querySelectorAll(".oldImg");

// console.log(imgArr);

// [{}, {}, {}]
// let srcAttr = imgArr[0].getAttribute("src");
// console.log(srcAttr);

// imgArr[0].setAttribute("src", "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkTN2WS2ksvhiPODyyh0NjJ1CFBXUBtAdX8PpOML3JF0GnpioEoNmZgr8bSJxcuL2jvMgJZHYi1_hJvtXXEnq-em84kMGfqVTujzpkguVe7ZHBxVNPU4MQWtBJgpo-UPNSFpm-Eww=s1360-w1360-h1020-rw");

// forEach, map, reduce, filter

// imgArr.forEach((elem)=>{
//     elem.setAttribute("src", "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkTN2WS2ksvhiPODyyh0NjJ1CFBXUBtAdX8PpOML3JF0GnpioEoNmZgr8bSJxcuL2jvMgJZHYi1_hJvtXXEnq-em84kMGfqVTujzpkguVe7ZHBxVNPU4MQWtBJgpo-UPNSFpm-Eww=s1360-w1360-h1020-rw")
// })

// imgArr[0].setAttribute()
// imgArr[1].setAttribute()
// imgArr[2].setAttribute()

// 3.  style (inline)

// const heading1 = document.querySelector("#heading1");

// heading1.style.color = "red";

// heading1.style.backgroundColor = "white"
// heading1.style.borderRadius = "20px"

// console.log(heading1);

// forward css (normal css)

// reverse css

// const heading1 = document.querySelector("#heading1");

// heading1.setAttribute("class", "main-text");

// const h2Elem = document.querySelector("h2");

// h2Elem.setAttribute("class", "main-text");

// const heading1 = document.querySelector("#heading1");

// heading1.setAttribute("class", "green");

// heading1.setAttribute("class", "underline");

// class="green underline"

// heading1.classList.add("green");
// heading1.classList.add("underline");
// heading1.classList.add("blueBorder");

// setTimeout(() => {
//   heading1.classList.remove("blueBorder");
// }, 1000);

// const answer = heading1.classList.contains("green");
// console.log(answer);

// setInterval(()=>{
//     heading1.classList.toggle("green")
// }, 1000)

// const heading1 = document.querySelector("#heading1");

// const parentOfHeading = heading1.parentElement;

// parentOfHeading.classList.add("yellowBg");

// const imgDiv = document.querySelector(".images");

// const childrenArr = imgDiv.children;

// console.log(childrenArr);

// const heading1 = document.querySelector(`#heading1`)

// const nextSib = heading1.previousElementSibling
// console.log(nextSib)

// // step 1: Creating an element and adding content to it
// const newParaElem = document.createElement("p"); // <p></p>
// newParaElem.innerText = "I am paragraph 1 created using js";

// const newParaElem2 = document.createElement("p");
// newParaElem2.innerText = "I am paragraph 2 created using js";
// // step 2: Appending it to the HTML

// // const bodyElem = document.querySelector("body");
// // bodyElem.appendChild(newParaElem)
// // bodyElem.append(newParaElem, newParaElem2);

// const heading1 = document.querySelector("#heading1");
// heading1.insertAdjacentElement("afterbegin", newParaElem);




// //DOM manipulation
// //manipulating attributes
// // Get the ID of an element
// let solarImg = document.querySelector('img');
// let idName = solarImg.getAttribute('id');
// console.log(idName); // Output: "mainImg"

// // Change the ID
// For large changes, use CSS classes instead (we'll learn this next!)
// let solarImg = document.querySelector('img');
// solarImg.setAttribute('id', 'galaxyImg');
// // The image now has id="galaxyImg" instead of id="mainImg"

// //Change the image source
// let solarImg = document.querySelector('img');
// solarImg.setAttribute('src', 'assets/earth.jpg');
// // The image will now display earth.jpg

// //Get and change a link's href
// let link = document.querySelector('a');
// console.log(link.getAttribute('href')); // Current link
// link.setAttribute('href', 'https://nasa.gov');
// // Link now points to NASA website

// //Check if an attribute exists
// let heading = document.querySelector('h1');
// let headId = heading.getAttribute('id');
// console.log(headId); // "heading1"



// //Manipulating Style (Inline)
// //change text color
// let heading = document.querySelector('h1');
// heading.style.color = 'orange';

// //change background color (camel case)
// let heading = document.querySelector('h1');
// heading.style.backgroundColor = 'black';

// //change multiple style
// let para = document.querySelector('p');
// para.style.color = 'white';
// para.style.fontSize = '20px';
// para.style.padding = '15px';

// //change image size
// let img = document.querySelector('img');
// img.style.width = '500px';
// img.style.borderRadius = '10px';

// //Hide an element 
// let box = document.querySelector('.box');
// box.style.display = 'none'; // Element disappears



// //The classList property
// //Add a class
// let para = document.querySelector('p');
// para.classList.add('green');
// // Now the paragraph has class="green"

// //Remove a class
// let para = document.querySelector('p');
// para.classList.remove('green');
// // The class is removed

// //check if a class exists
// let para = document.querySelector('p');
// console.log(para.classList.contains('green')); // true or false

// //Toggle a class
// let para = document.querySelector('p');
// para.classList.toggle('green'); // Adds if missing
// para.classList.toggle('green'); // Removes if present

// //Toggle on button click
// let box = document.querySelector('.box');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
// box.classList.toggle('highlight');
// // Each click adds/removes the highlight class
// });



// //Navigation (DOM Traversal)
// // Find all children of an element
// let box = document.querySelector('.box');
// let boxChildren = box.children;
// console.log(boxChildren); // [h4, ul] - heading and list

// //Navigate from child to parent
// let list = document.querySelector('ul');
// console.log(list.parentElement); // Output: div.box

// //Get the sibling
// let list = document.querySelector('ul');
// let firstItem = list.children[0]; // First <li>
// let secondItem = firstItem.nextElementSibling; // Second <li>
// console.log(secondItem.innerText); // "Location: Milky Way Galaxy"

// //Access first and last
// let box = document.querySelector('.box');
// console.log(box.children[0]); // First child (h4)
// console.log(box.children[box.children.length - 1]); // Last child (ul)

// //Navigate through multiple sibling
// let heading1 = document.querySelector('#heading1');
// let nextEl = heading1.nextElementSibling; // img
// let afterThat = nextEl.nextElementSibling; // h2
// console.log(afterThat.innerText); // "Overview"



// //Adding element to the page
// // 1. CREATE the element in memory
// // 2. ADD it to the DOM

// //Create and add a button
// // Step 1: Create
// let newBtn = document.createElement('button');
// newBtn.innerText = "Explore Universe!";
// // Step 2: Add to page
// let box = document.querySelector('.box');
// box.appendChild(newBtn);

// //Add element to the start
// let heading = document.createElement('h3');
// heading.innerText = "Welcome to Space!";
// let body = document.querySelector('body');
// body.prepend(heading); // Adds at the very top

// //create a paragraphs wuth styling
// let newPara = document.createElement('p');
// newPara.innerText = "The universe is vast and mysterious.";
// newPara.style.color = 'cyan';
// newPara.style.fontSize = '18px';
// let box = document.querySelector('.box');
// box.appendChild(newPara);

// //Using insertAdjacentElement (precise placement)
// let badge = document.createElement('span');
// badge.innerText = " 🌟 New!";
// let heading = document.querySelector('h1');
// heading.insertAdjacentElement('beforeend', badge);
// // Adds the badge inside h1, at the end

// //Add multiple element
// let list = document.querySelector('ul');
// let item1 = document.createElement('li');
// item1.innerText = "Neptune: Ice Giant";
// let item2 = document.createElement('li');
// item2.innerText = "Uranus: Ice Giant";
// list.appendChild(item1);
// list.appendChild(item2);



// //insertAdjacentElement Positions
// //Add before an element 
// let warning = document.createElement('p');
// warning.innerText = "⚠️ Content may change";
// let desc = document.querySelector('#description');
// desc.insertAdjacentElement('beforebegin', warning);
// // Warning appears BEFORE the description paragraph

// //Add inside at the starr
// let icon = document.createElement('span');
// icon.innerText = "🌍 ";
// let heading = document.querySelector('h1');
// heading.insertAdjacentElement('afterbegin', icon);
// // Icon appears inside h1, at the start

// //Add inside at the end
// let arrow = document.createElement('span');
// arrow.innerText = " →";
// let heading = document.querySelector('h2');
// heading.insertAdjacentElement('beforeend', arrow);
// // Arrow appears inside h2, at the end



// //Removing Elements from the Page
// // Remove an element (Modern)
// let oldImg = document.querySelector('.oldImg');
// oldImg.remove();
// // First old image is deleted from page

// // Remove using parent (Old way)
// let imageContainer = document.querySelector('.images');
// let oldImg = document.querySelector('.oldImg');
// imageContainer.removeChild(oldImg);

// // Remove all images with a class
// let oldImages = document.querySelectorAll('.oldImg');
// // Loop through and remove each one
// for (let img of oldImages) {
// img.remove();
// }

// // Remove on button click
// let btn = document.querySelector('button');
// let box = document.querySelector('.box');
// btn.addEventListener('click', function() {
// box.remove(); // Box disappears when button is clicked
// });

// //Remove a specific a child
// let list = document.querySelector('ul');
// let firstItem = list.children[0];
// firstItem.remove(); // First list item is removed



// Change Attributes
// 1. Select the main image
// 2. Change its src to a different space image URL
// 3. Change its id to "spaceImage"

// Style elemnent
// 1. Select the h1 heading
// 2. Change its color to cyan
// 3. Add a background color of black
// 4. Add padding of 20px

// Use classList
// 1. Select the first paragraph
// 2. Add a class called "highlight"
// 3. Check if it contains "highlight"
// 4. Toggle the class twice

// Navigate the DOM
// 1. Select the .box div
// 2. Get all its children
// 3. Find the parent of the ul
// 4. Get the next sibling of the h1

// Add & Remove Elements
// 1. Create a new h3 with text "Created by JS"
// 2. Add it before the #description paragraph
// 3. Create a button with text "Click Me"
// 4. Add it to the .box div
// 5. Remove all images with class .oldImg