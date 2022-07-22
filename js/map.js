"use strict";

const nums = [-1, 5, 8, -20, 10, 12, -5, 14];

const numsForEach = nums.forEach((sk) => sk * 100);

// ta pacia eilute su map vietoj forEach
//  map grazina tai ka mes grazinam is funkcijos
// map nenaudojamas kai reikia filtruoti kazka is array, nes jis grazins kiekviena reiksme sudeta i masyva
const numsMap = nums.map((sk) => sk * 100);

console.log({ numsForEach, numsMap });

// 4. gauti ir atspausdinti nauja masyva kuriame visos reiksmes padaugintos is ju indexo. su map

const newArrMap = nums.map((value, index) => value * index);

console.log("newArrMap ===", newArrMap);

// 7. sukurti nauja masyva kuriame turetume masyva su objektais
//  map naudojamas kai norim  pakeisti struktura, bet tai atliekama su kiekviena reiskme

const objectArr = nums.map((sk) => {
  return { value: sk };
});

console.log("objectArr ===", objectArr);
