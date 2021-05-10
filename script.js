const cars = [
  {
    brand: "Ford",
    plate: 27360,
    model: "Ka",
    year: 2012,
    poliza: {
      company: "Sancor",
      number: 147852,
    },
  },
  {
    brand: "Ford",
    plate: 27363,
    model: "Ranger",
    year: 2017,
    poliza: {
      company: "Sancor",
      number: 19785633,
    },
  },
  {
    brand: "Audi",
    plate: 27360,
    model: "AA",
    year: 2010,
    poliza: {
      company: "Rivadavia",
      number: 28459,
    },
  },
  {
    brand: "Audi",
    plate: 27361,
    model: "A7",
    year: 2021,
    poliza: {
      company: "Rivadavia",
      number: 25267,
    },
  },
  {
    brand: "Honda",
    plate: 27360,
    model: "Civic",
    year: 2019,
    poliza: {
      company: "Rolling",
      number: 147852,
    },
  },
];

let list = document.getElementById("list");

function setList(group) {
  clearList();
  for (const car of group) {
    const item = document.createElement("li");
    const text = document.createTextNode(
      "Brand: " +
        car.brand +
        " - " +
        " Plate: " +
        car.plate +
        " Model: " +
        car.model
    );
    item.appendChild(text);
    list.appendChild(item);
  }
  if (group.length === 0) {
    setNoResults();
  }
}

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function setNoResults() {
  const item = document.createElement("li");
  const text = document.createTextNode("No results found");
  item.appendChild(text);
  list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if (value.includes(searchTerm)) {
    return 0;
  } else {
    return -1;
  }
}

const carLicInput = document.getElementById("carLicInput");
const searchBtn = document.getElementById("search");

carLicInput.addEventListener("keyup", (event) => {
  let value = event.target.value;
  if (event.keyCode == 13 && value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    setList(
      cars
        .filter((car) => {
          return car.brand.toLowerCase().includes(value);
        })
        .sort((carA, carB) => {
          return (
            getRelevancy(carB.brand, value) - getRelevancy(carA.brand, value)
          );
        })
    );
  } else {
    clearList();
  }
});
