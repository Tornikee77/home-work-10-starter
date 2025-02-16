const carForm = document.getElementById("carForm");

carForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let valid = true;

  function showError(id, message) {
    document.getElementById(id).textContent = message;
    valid = false;
  }

  function clearError(id) {
    document.getElementById(id).textContent = "";
  }

  const newCar = {
    name: document.getElementById("name").value.trim(),
    type: document.getElementById("type").value.trim(),
    fuel: document.getElementById("fuel").value.trim(),
    transmission: document.getElementById("transmission").value,
    capacity: document.getElementById("capacity").value.trim(),
    price: document.getElementById("price").value.trim(),
    favorite: document.getElementById("favorite").checked,
    img: "./assets/Car.png",
    oldPrice: null,
    per: "day",
  };

  if (!newCar.name) {
    showError("nameError", "Car name is required");
  } else {
    clearError("nameError");
  }

  if (!newCar.type) {
    showError("typeError", "Car type is required");
  } else {
    clearError("typeError");
  }

  if (!newCar.fuel) {
    showError("fuelError", "Fuel capacity is required");
  } else {
    clearError("fuelError");
  }

  if (!newCar.capacity || isNaN(newCar.capacity) || newCar.capacity <= 0) {
    showError("capacityError", "Valid capacity is required");
  } else {
    clearError("capacityError");
  }

  if (!newCar.price || isNaN(newCar.price) || newCar.price <= 0) {
    showError("priceError", "Valid price is required");
  } else {
    clearError("priceError");
  }

  const category = document.getElementById("category").value;
  //                                                      popularCars
  //                                                     recommendCars
  const url = `https://67adef939e85da2f020bc6e2.mockapi.io/${category}`;

  if (!valid) return;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCar),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Car Added Succesfuly");
      console.log(data);
      document.getElementById("carForm").reset();
    })
    .catch((error) => console.log(error));
});
