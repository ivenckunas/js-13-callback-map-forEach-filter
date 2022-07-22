"use strict";

const nums = [5, 8, 10, 12, 14];

// gauti bendra suma visu nums el
let sum = 0;

nums.forEach((value, i, arr) => {
  sum += value / arr.length;
  console.log("sum ===", sum);
});

console.log("avg", sum);

// forEach anatomy
// array.forEach((currentValue, idx, arr) => {})
// array.map((currentValue, idx, arr) => {})
// array.filter((currentValue, idx, arr) => {})
// array.every((currentValue, idx, arr) => {})
// array.find((currentValue, idx, arr) => {})
// currentValue - einamoji verte 5, 8, 10...
// atspausdins pvz: index: 0, value: 5 ir tada sekancioje eiluteje visa array

// for i

for (let i = 0; i < nums.length; i++) {
  const oneNumber = nums[i];
  //   console.log("oneNumber ===", oneNumber);
}

// for of

for (const oneNumber of nums) {
  //   console.log("oneNumber ===", oneNumber);
}

nums.forEach((currentValue, idx, arr) => {
  //   console.log(`index: ${idx}, value: ${arr[idx]}`);
  arr[idx] = currentValue * 2;
});

// console.log("nums ===", nums);

nums.forEach(numTimesTen);

function numTimesTen(oneNumber) {
  //   console.log("oneNumber ===", oneNumber * 10);
}
