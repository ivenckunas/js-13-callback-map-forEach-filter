"use strict";

const nums = [-1, 5, 8, -20, 10, 12, -5, 14];

const numsForEach = nums.forEach((sk) => sk * 100);

// ta pacia eilute su map vietoj forEach
//  map grazina tai ka mes grazinam is funkcijos
// map nenaudojamas kai reikia filtruoti kazka is array, nes jis grazins kiekviena reiksme sudeta i masyva
const numsMap = nums.map((sk) => sk * 100);

console.log({ numsForEach, numsMap });
