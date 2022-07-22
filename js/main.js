"use strict";

function displayAsH2(str) {
  const h2 = document.getElementById("h2");
  h2.textContent = str;
}

function displayAsParagraph(value) {
  const paraEl = document.getElementById("para");
  paraEl.textContent = `The value is ${value}!`;
}

displayAsH2("hello world");

function myPower(num, callbackfn) {
  const result = num ** 3;
  callbackfn(result);
}

myPower(3, displayAsParagraph);
myPower(32, displayAsH2);
myPower(5, (sk) => {
  console.log(sk);
});

// displayAsParagraph(result);
