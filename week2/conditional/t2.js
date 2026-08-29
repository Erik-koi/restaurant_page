"use strict";

const coordinate1 = prompt("First coordinate (x1, y1):");
const coordinate2 = prompt("Second coordinate (x2, y2):");

const coordArray1 = coordinate1.split(",");
const coordArray2 = coordinate2.split(",");

const distance = Math.sqrt(
  (+coordArray2[0] - +coordArray1[0]) ** 2 +
    (+coordArray2[1] - +coordArray1[1]) ** 2,
);

document.querySelector("#target").innerText = distance;
