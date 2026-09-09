const box1 = document.querySelector("#box-1");
const p1 = document.querySelector("#p-1");
const box2 = document.querySelector("#box-2");
const p2 = document.querySelector("#p-2");
const box3 = document.querySelector("#box-3");
const p3 = document.querySelector("#p-3");
const box4 = document.querySelector("#box-4");
const p4 = document.querySelector("#p-4");
const box5 = document.querySelector("#box-5");
const btn = document.querySelector("#btn");
const p5 = document.querySelector("#p-5");

// console.log("sdfsdfdff");


btn.addEventListener("click", () => {

  const red1 = Math.floor(Math.random() * 256); // 0-255
  const green1 = Math.floor(Math.random() * 256); // 0-255
  const blue1 = Math.floor(Math.random() * 256); // 0-255
  const red2 = Math.floor(Math.random() * 256); // 0-255
  const green2 = Math.floor(Math.random() * 256); // 0-255
  const blue2 = Math.floor(Math.random() * 256); // 0-255
  const red3 = Math.floor(Math.random() * 256); // 0-255
  const green3 = Math.floor(Math.random() * 256); // 0-255
  const blue3 = Math.floor(Math.random() * 256); // 0-255
  const red4 = Math.floor(Math.random() * 256); // 0-255
  const green4 = Math.floor(Math.random() * 256); // 0-255
  const blue4 = Math.floor(Math.random() * 256); // 0-255
  const red5 = Math.floor(Math.random() * 256); // 0-255
  const green5 = Math.floor(Math.random() * 256); // 0-255
  const blue5 = Math.floor(Math.random() * 256); // 0-255

  p1.innerText = `(${red1},${green1},${blue1})`;
  p2.innerText = `(${red2},${green2},${blue2})`;
  p3.innerText = `(${red3},${green3},${blue3})`;
  p4.innerText = `(${red4},${green4},${blue4})`;
  p5.innerText = `(${red5},${green5},${blue5})`;

  box1.style.backgroundColor = `rgb(${red1}, ${green1}, ${blue1})`; // "rgb(233, 234, 9)"
  box2.style.backgroundColor = `rgb(${red2}, ${green2}, ${blue2})`; // "rgb(233, 234, 9)"
  box3.style.backgroundColor = `rgb(${red3}, ${green3}, ${blue3})`; // "rgb(233, 234, 9)"
  box4.style.backgroundColor = `rgb(${red4}, ${green4}, ${blue4})`; // "rgb(233, 234, 9)"
  box5.style.backgroundColor = `rgb(${red5}, ${green5}, ${blue5})`; // "rgb(233, 234, 9)"

});
