let fordCars = [
  {
    plate: 27360,
    model: "Ka",
    year: 2012,
    poliza: {
      company: "Sancor",
      number: 147852,
    },
  },
  {
    plate: 27360,
    model: "Ranger",
    year: 2017,
    poliza: {
      company: "Sancor",
      number: 19785633,
    },
  },
];

let audiCars = [
  {
    plate: 27360,
    model: "AA",
    year: 2010,
    poliza: {
      company: "Rivadavia",
      number: 28459,
    },
  },
  {
    plate: 27361,
    model: "A7",
    year: 2021,
    poliza: {
      company: "Rivadavia",
      number: 25267,
    },
  },
];

let hondaCars = [
  {
    plate: 27360,
    model: "Civic",
    year: 2019,
    poliza: {
      company: "Rolling",
      number: 147852,
    },
  },
];

function search(make) {
  let carMake = document.getElementById("car-make").value;
  let carPlate = document.getElementById("car-plate").value;

  if (carMake == "Ford" && carPlate == 27360) {
    document.getElementById("carPlateDisplay").innerText = fordCars[0].plate;
    document.getElementById("carModelDisplay").innerText = fordCars[0].model;
    document.getElementById("carYearDisplay").innerText = fordCars[0].year;
    document.getElementById("carYearDisplay").innerText = fordCars[0].year;
    document.getElementById("carPoliza").innerText = fordCars[0].poliza.number;
  }
  if (carMake == "Audi" && carPlate == 27360) {
    document.getElementById("carPlateDisplay").innerText = audiCars[0].plate;
    document.getElementById("carModelDisplay").innerText = audiCars[0].model;
    document.getElementById("carYearDisplay").innerText = audiCars[0].year;
    document.getElementById("carYearDisplay").innerText = audiCars[0].year;
    document.getElementById("carPoliza").innerText = audiCars[0].poliza.number;
  }
  if (carMake == "Audi" && carPlate == 27361) {
    document.getElementById("carPlateDisplay").innerText = audiCars[1].plate;
    document.getElementById("carModelDisplay").innerText = audiCars[1].model;
    document.getElementById("carYearDisplay").innerText = audiCars[1].year;
    document.getElementById("carYearDisplay").innerText = audiCars[1].year;
    document.getElementById("carPoliza").innerText = audiCars[1].poliza.number;
  }

  document.getElementById("carMakeDisplay").innerText = carMake;
  //document.getElementById("carModelDisplay").innerText = carModel;
  //;
}
