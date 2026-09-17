// fetch("https://catfact.ninja/fact")
//   .then((res) => {
//     res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   });

// async function fetchData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

// const button = document.querySelector("#button");
// const h4 = document.querySelector("#h4");

// button.addEventListener("click", async () => {
//   const data = await fetchData("https://catfact.ninja/fact");
//   h4.innerText = data.fact;
// });

// const button = document.querySelector("#button");
// const img = document.querySelector("#img");

// button.addEventListener("click", async () => {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");
//   const data = await response.json();
//   console.log(data.message);
//   img.setAttribute("src", data.message);
// });

// const exampleJson = '{ "name": "Alice", "age": 25}';

// console.log(JSON.parse(exampleJson));

// let obj = {
//   username: "Bob",
//   password: 123,
// };

// console.log(JSON.stringify(obj));

// const h1 = document.querySelector("#title");
// const p = document.querySelector("#desc");
// const img = document.querySelector("#img");
// const button = document.querySelector("#button");

// button.addEventListener("click", async () => {
//   const response = await fetch("https://dummyjson.com/products/10");
//   const data = await response.json();

//   h1.innerText = data.title;
//   p.innerText = data.description;
//   img.setAttribute("src", data.images[0]);
// });

//

// 2 layers of any software(Application)

// Eg: Todo App

// 1st Data layer
// let todoArr = ["Go to College", "Go to market", "Go to TDC"];

// 2nd UI Layer

// function main() {
//   const newElem1 = document.createElement("h3");
//   newElem1.innerText = todoArr[0];
//   document.querySelector("body").insertAdjacentElement("beforeend", newElem1);

//   const newElem2 = document.createElement("h3");
//   newElem2.innerText = todoArr[1];
//   document.querySelector("body").insertAdjacentElement("beforeend", newElem2);

//   const newElem3 = document.createElement("h3");
//   newElem3.innerText = todoArr[2];
//   document.querySelector("body").insertAdjacentElement("beforeend", newElem3);
// }

// main();

// let todoArr = ["Go to College", "Go to market", "Go to TDC", "Go to home"];

// todoArr.push("Hello world");

// todoArr.forEach((element) => {
//   const newElem = document.createElement("h3");
//   newElem.innerText = element;

//   document.querySelector("body").insertAdjacentElement("beforeend", newElem);
// });

// let students = [
//   {
//     name: "Mohd",
//     id: 1,
//     marks: 33,
//   },
//   {
//     name: "Ali",
//     id: 2,
//     marks: 62,
//   },
//   {
//     name: "Abdullah",
//     id: 3,
//     marks: 62,
//   },
//   {
//     name: "Khalid",
//     id: 4,
//     marks: 90,
//   },
// ];

// console.log(students[1]?.address?.city);

// students.forEach((elemObj) => {
//   const nameElem = document.createElement("h3");
//   nameElem.innerText = elemObj?.name;

//   const idElem = document.createElement("span");
//   idElem.innerText = "id: " + elemObj?.id; // "id: 1"

//   const marksElem = document.createElement("span");
//   marksElem.innerText = "Marks: " + elemObj?.marks;

//   const containerDiv = document.createElement("div");
//   containerDiv.insertAdjacentElement("beforeend", nameElem);
//   containerDiv.insertAdjacentElement("beforeend", idElem);
//   containerDiv.insertAdjacentElement("beforeend", marksElem);

//   document
//     .querySelector("body")
//     .insertAdjacentElement("beforeend", containerDiv);
// });

// promise consume

// [
//   {
//     id: 1,
//     todo: "Do something",
//     completed: false,
//     userId: 152,
//   },
//   {},
//   {},
// ];

// UI layer

// async function main() {
//   const response = await fetch("https://dummyjson.com/todos");
//   const data = await response.json(); // retrive body of API,  convert raw json to object
//   const todoArr = data?.todos;

//   todoArr.forEach((element) => {
//     const idElem = document.createElement("span");
//     idElem.innerText = "ID: " + element?.id;

//     const userIdElem = document.createElement("span");
//     userIdElem.innerHTML = " UserID: " + element?.userId;

//     const statusElem = document.createElement("span");
//     statusElem.innerHTML = " Status: " + element?.completed;

//     const todoTextElem = document.createElement("h3");
//     todoTextElem.innerText = "Todo: " + element?.todo;

//     const hr = document.createElement("hr")

//     const containerDiv = document.createElement("div");
//     containerDiv.insertAdjacentElement("beforeend", idElem);
//     containerDiv.insertAdjacentElement("beforeend", userIdElem);
//     containerDiv.insertAdjacentElement("beforeend", statusElem);
//     containerDiv.insertAdjacentElement("beforeend", todoTextElem);
//     containerDiv.insertAdjacentElement("beforeend", hr);

//     document
//       .querySelector("body")
//       .insertAdjacentElement("beforeend", containerDiv);
//   });
// }

// main();

// const button = document.querySelector("button");
// const img = document.createElement("img");
// document.querySelector("body").insertAdjacentElement("beforeend", img);

// button.addEventListener("click", () => {
//   fetchImg();
// });

// async function fetchImg() {
//   button.innerText = "Loading...";

//   const reponse = await fetch("https://dog.ceo/api/breeds/image/random");
//   const data = await reponse.json();

//   button.innerText = "Get New Image";

//   img.setAttribute("src", data?.message);
//   img.style.width = "200px";
// }

// let counter = 0;

// async function main() {
//   const response = await fetch("https://dummyjson.com/carts");
//   const data = await response.json();

//   data.carts.forEach((cart) => {
//     const productArr = cart.products;

//     productArr.forEach((product) => {
//       counter++;

//       const img = document.createElement("img");
//       img.setAttribute("src", product?.thumbnail);
//       img.style.width = "100px";

//       const titleElem = document.createElement("h2");
//       titleElem.innerText = product?.title;

//       const pricePara = document.createElement("span");
//       pricePara.innerText = product?.price;

//       const container = document.createElement("div");
//       container.classList.add("product-container");
//       container.insertAdjacentElement("beforeend", img);
//       container.insertAdjacentElement("beforeend", titleElem);
//       container.insertAdjacentElement("beforeend", pricePara);

//       document
//         .querySelector("body")
//         .insertAdjacentElement("beforeend", container);
//     });
//   });

//   console.log(counter);
// }

// main();

//

//
// let user = {
//   username: "Aleem",
// };
// console.log(user);

// const changedVal = JSON.stringify(user);
// console.log(changedVal);

// let jsonStr = '{"username":"Aleem"}'; // json
// let obj = {
//   username: "Aleem",
// };

// console.log(jsonStr);

// let result = JSON.parse(jsonStr);

// console.log(result);

// Network calls

// fetch promise consume 1: .then.catch

// fetch("https://dummyjson.com/todos")
//   .then((resolveMsg) => {
//     return resolveMsg.text();
//   })
//   .then((body) => {
//     let result = JSON.parse(body);
//     console.log(result);
//   })
//   .catch((rejectMsg) => {
//     console.log(rejectMsg);
//   });

// async function getData() {
//   const response = await fetch("https://dummyjson.com/todos");
//   const body = await response.text();
//   const obj = JSON.parse(body);
//   console.log(obj);
// }

// getData();

// let data;

// async function getData() {
//   const response = await fetch("https://dummyjson.com/todos");
//   data = await response.json(); // body retreave and parse

//   const h1 = document.querySelector("h1");
//   h1.innerText = data.todos[1].todo;
//   console.log(data.todos[1].todo);
// }

// getData();
