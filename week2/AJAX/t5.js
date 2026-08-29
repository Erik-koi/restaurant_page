import { fetchData } from "./t4.js";

const apiURL = "https://media2.edu.metropolia.fi/restaurant/api/v1";

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
      const { address, city, company, name, phone, location, postalCode } =
        restaurant;

      console.log(location);

      const tr = document.createElement("tr");

      const td1 = document.createElement("td");
      const td2 = document.createElement("td");

      td1.innerText = name;
      td2.innerText = address;

      tr.insertAdjacentElement("beforeend", td1);
      tr.insertAdjacentElement("beforeend", td2);

      tr.addEventListener("click", async () => {
        document
          .querySelectorAll(".highlight")
          .forEach((element) => element.classList.remove("highlight"));

        tr.classList.add("highlight");

        const todaysMenu = await fetchData(
          `${apiURL}/restaurants/daily/${restaurant._id}/en`,
        );

        console.log(todaysMenu);

        let menu = "";
        todaysMenu.courses.forEach((course) => {
          console.log(course);
          const { name, diets, price } = course;

          const filteredDiets = diets.filter((diet) => diet !== "*");
          const dietIcons = filteredDiets.map((diet) => {
            switch (diet) {
              case "G":
                return "🌾&#xfeff;🚫";
              case "L":
                return "🥛&#xfeff;🚫";
              default:
                return diet;
            }
          });

          menu += `
            <tr>
              <td>${name}</td>
              <td>${dietIcons}</td>
              <td>${price || "Not provided"}</td>
            </tr>
          `;
        });

        const dialog = document.querySelector("dialog");

        dialog.innerHTML = `
        Restaurant name: ${name}<br />
        Address: ${address}<br />
        Postal code: ${postalCode}<br />
        City: ${city}<br />
        Phone number: ${phone}<br />
        Company: ${company}<br />

        <table>
        ${menu}
        </table>

        <button>Close</button>
        `;

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
