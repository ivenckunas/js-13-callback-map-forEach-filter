"use strict";

const nums = [-1, 5, 8, -20, 10, 12, -5, 14];

// naudojam array.forEach()
//1. atspausdinti html paragrafe visus skaicius

nums.forEach((value) => {
  const pEl = document.getElementById("para");
  pEl.textContent += `${value}, `;
});

// 2.atspausdinti html h2 elemente visus padalintus is 10

nums.forEach((value) => {
  const h2El = document.getElementById("h2");
  h2El.textContent += `${value / 10}, `;
});

// 3.gauti ir atspausdinti nauja masyva kuriame visos reiksmes butu padaugintos is 3

let newArr = [];
nums.forEach((value) => {
  const timesThree = value * 3;
  newArr.push(timesThree);
});

console.log("newArr ===", newArr);

//4. gauti ir atspausdinti nauja masyva kuriame visos reiksmes padaugintos is ju indexo.

let newArr2 = [];

nums.forEach((value, idx) => {
  const timesIdx = value * idx;
  newArr2.push(timesIdx);
});

console.log("newArr ===", newArr2);

// 5. grazinti nauja masyva kuriame butu reikmes didesnes uz 9

const newArr3 = [];

nums.forEach((value) => {
  if (value > 9) newArr3.push(value);
});

console.log("newArr ===", newArr3);

// 6.  grazinti ir atspausdinti consoleje visas neigiamas reiksmes

const newArr4 = [];

nums.forEach((value) => {
  if (value < 0) {
    newArr4.push(value);
  }
});

console.log("newArr4 ===", newArr4);
