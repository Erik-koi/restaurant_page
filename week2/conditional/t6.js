"use strict";

const input = prompt("Enter a positive integer:");
const num = Number(input);

let html = "<table>";

for (let i = 1; i <= num; i++) {
  html += "<tr>";
  for (let j = 1; j <= num; j++) {
    html += `<td>${i * j}</td>`;
  }
  html += "</tr>";
}

html += "</table>";

document.querySelector("#target").innerHTML = html;
