"use strict";

const input = prompt("Enter a positive integer:");
const num = Number(input);

let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

document.querySelector("#target").innerHTML = `${sum}`;
