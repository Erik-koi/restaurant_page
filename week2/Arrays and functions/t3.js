"use strict";

const numbers = [];

while (true) {
  const input = prompt("Enter a number (or 'done' to finish):");

  if (input === null || input.toLowerCase() === "done") {
    break;
  }

  const num = Number(input);
  if (!isNaN(num)) {
    numbers.push(num);
  }
}

const evenNumbers = [];

for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

let html = "<p>Even Numbers: ";

if (evenNumbers.length > 0) {
  html += evenNumbers.join(", ");
} else {
  html += "None";
}

html += "</p>";
html += "<p>End of the program.</p>";

document.querySelector("#target").innerHTML = html;
