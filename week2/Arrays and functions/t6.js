"use strict";

const count = Number(prompt("How many movies do you want to rate?"));

const movies = [];

for (let i = 0; i < count; i++) {
  const title = prompt(`Enter title of movie ${i + 1}:`);
  const rating = Number(prompt(`Enter rating for "${title}" (1-5):`));

  movies.push({
    title: title,
    rating: rating,
  });
}

movies.sort((a, b) => b.rating - a.rating);

const highest = movies[0];

let html = "<h3>Sorted movies (highest to lowest):</h3><ul>";

for (let i = 0; i < movies.length; i++) {
  html += `<li>${movies[i].title} - ${movies[i].rating}/5</li>`;
}

html += "</ul>";
html += `<h3>Highest-rated movie:</h3>`;
html += `<p>${highest.title} (${highest.rating}/5)</p>`;

document.querySelector("#target").innerHTML = html;
