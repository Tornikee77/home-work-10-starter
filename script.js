//   fetch("https://67adef939e85da2f020bc6e2.mockapi.io/popularCars")
//     .then((response) => response.json())
//     .then((data) => {
//       const container = document.getElementById("popularCars");
//       data.forEach((car) => {
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.innerHTML = `
//                           <img src="${car.img}" alt="${car.name}">
//                           <h3>${car.name}</h3>
//                           <p>Type: ${car.type}</p>
//                           <p>Fuel: ${car.fuel}</p>
//                           <p>Transmission: ${car.transmission}</p>
//                           <p>Capacity: ${car.capacity}</p>
//                           <p>Price: $${car.price} per ${car.per}</p>
//                           <p class="favorite">${
//                             car.favorite ? "❤️" : "💔"
//                           }</p>
//                       `;
//         container.appendChild(card);
//       });
//     })
//     .catch((error) => console.error("Error fetching data:", error));

// --------------------------------------------------------------//
// --------------------------------------------------------------//
// --------------------------------------------------------------//
// --------------------------------------------------------------//

function fetchCars(url, containerId) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById(containerId);
      data.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                              <img src="${car.img}" alt="${car.name}">
                              <h3>${car.name}</h3>
                              <p>Type: ${car.type}</p>
                              <p>Fuel: ${car.fuel}</p>
                              <p>Transmission: ${car.transmission}</p>
                              <p>Capacity: ${car.capacity}</p>
                              <p>Price: $${car.price} per ${car.per}</p>
                              <p class="favorite">${
                                car.favorite ? "❤️" : "💔"
                              }</p>
                          `;
        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

fetchCars(
  "https://67adef939e85da2f020bc6e2.mockapi.io/popularCars",
  "popularCars"
);
fetchCars(
  "https://67adef939e85da2f020bc6e2.mockapi.io/recommendCars",
  "recommendCars"
);
