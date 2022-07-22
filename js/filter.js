"use strict";

const nums = [-1, 5, 8, -20, 10, 12, -5, 14];

// filter atrenka reiksme jei grazinam is vidines funkcijos true truthy
const moreThanZero = nums.filter((sk, i) => sk <= 5);
//   if (sk < 0) return true;
//   return false;

console.log("moreThanZero ===", moreThanZero);
console.log("nums ===", nums);

// array.find() - grazina reiksme kai grazinam true
// sustoja iskart kai tik gauna pirma true
const found = nums.find((sk, i) => sk <= 5);
console.log("found ===", found);

const users = [
  {
    id: 1,
    name: "James",
    age: 12,
  },
  {
    id: 6,
    name: "Mike",
    age: 82,
  },
  {
    id: 93,
    name: "Bill",
    age: 45,
  },
];

// surasti ir grazinti user su id 93

const user93 = users.find((el) => el.id === 93);

console.log("user93 ===", user93);
user93.town = "Kaunas";

// is users masyvo gauti userius kuriu amzius yra daugiau nei 25m.

const over25 = users.filter((sk) => sk.age > 25);
console.table(over25);

const over25Vardai = users.map((uName) => uName.name);
console.log("over25Vardai ===", over25Vardai);
