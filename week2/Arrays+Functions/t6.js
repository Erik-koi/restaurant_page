const apiURL = "https://media2.edu.metropolia.fi/restaurant/api/v1";

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const restaurantRow = (restaurant) => {
  const { name, company } = restaurant;
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
  `;
  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses } = menu;

  let menuHtml = "";
  courses.forEach((course) => {
    const { name: courseName, diets, price } = course;
    const filteredDiets = diets.filter((diet) => diet !== "*");
    const dietIcons = filteredDiets
      .map((diet) => {
        switch (diet) {
          case "G":
            return "🌾&#xfeff;🚫";
          case "L":
            return "🥛&#xfeff;🚫";
          default:
            return diet;
        }
      })
      .join(" ");

    menuHtml += `
      <tr>
        <td>${courseName}</td>
        <td>${dietIcons}</td>
        <td>${price ? price : "Not provided"}</td>
      </tr>
    `;
  });

  return `
    Restaurant name: ${name}<br />
    Address: ${address}<br />
    Postal code: ${postalCode}<br />
    City: ${city}<br />
    Phone number: ${phone}<br />
    Company: ${company}<br />
    <table>
      ${menuHtml}
    </table>
    <button>Close</button>
  `;
};

const getRestaurants = async () => {
  try {
    const restaurants = await fetchData(apiURL + "/restaurants");

    console.log("restaurants", restaurants);

    const table = document.querySelector("table");

    console.log("table", table);

    console.log("first before", restaurants[0]);

    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    console.log("first after", restaurants[0]);

    restaurants.forEach((restaurant) => {
      const tr = restaurantRow(restaurant);

      tr.addEventListener("click", async () => {
        document
          .querySelectorAll(".highlight")
          .forEach((element) => element.classList.remove("highlight"));

        tr.classList.add("highlight");

        const todaysMenu = await fetchData(
          `${apiURL}/restaurants/daily/${restaurant._id}/en`,
        );

        console.log(todaysMenu);

        const dialog = document.querySelector("dialog");

        dialog.innerHTML = restaurantModal(restaurant, todaysMenu);

        dialog.querySelector("button").addEventListener("click", () => {
          dialog.close();
        });

        dialog.show();
      });

      table.insertAdjacentElement("beforeend", tr);
    });
  } catch (error) {
    console.error(error.message);
  }
};

getRestaurants();

const multiply = (a, b) => a * b;

console.log(multiply(2, 4));
