fetch("https://catfact.ninja/fact")
  .then((res) => {
    res.json();
  })
  .then((data) => {
    console.log(data.fact);
  });

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const button = document.querySelector("#button");
const h4 = document.querySelector("#h4");

button.addEventListener("click", async () => {
  const data = await fetchData("https://catfact.ninja/fact");
  h4.innerText = data.fact;
});

const button = document.querySelector("#button");
const img = document.querySelector("#img");

button.addEventListener("click", async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data.message);
  img.setAttribute("src", data.message);
});

const exampleJson = '{ "name": "Alice", "age": 25}';

console.log(JSON.parse(exampleJson));

let obj = {
  username: "Bob",
  password: 123,
};

console.log(JSON.stringify(obj));

const h1 = document.querySelector("#title");
const p = document.querySelector("#desc");
const img = document.querySelector("#img");
const button = document.querySelector("#button");

button.addEventListener("click", async () => {
  const response = await fetch("https://dummyjson.com/products/10");
  const data = await response.json();

  h1.innerText = data.title;
  p.innerText = data.description;
  img.setAttribute("src", data.images[0]);
});
