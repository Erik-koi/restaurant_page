"use strict";
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);
console.log("Element at Index 2:", fruits[2]);
console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

const vegetables = [];
for (let i = 0; i < 3; i++) {
  const veg = prompt(`Enter vegetable ${i + 1}:`);
  vegetables.push(veg);
}

console.log("Vegetables:", vegetables);
console.log("Length of Vegetables:", vegetables.length);
