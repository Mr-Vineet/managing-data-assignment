const peopleDetails = [
  {
    name: "Rahul",
    designation: "software engineer",
    studiedCS: true,
    place: "Pune",
    currentlyEmployed: true,
    ownsCar: true,
    hobbies: [{ type: "playing chess" }, { type: "gardening" }],
    petsInfo: [
      {
        petName: "Max",
        petType: "golden retriever",
        age: 4,
        isVaccinated: true,
        favoriteActivity: "fetch in the park",
      },
    ],
  },
  {
    name: "Ananya",
    age: 30,
    studiedCS: true,
    place: "Bangalore",
    currentlyEmployed: false,
    ownsCar: false,
    hobbies: [
      {
        type: "cooking",
      },
    ],
    petsInfo: [
      {
        petName: "Kiwi",
        petType: "parrot",
        isVaccinated: true,
      },
    ],
  },
  {
    name: "Ramesh",
    age: 45,
    designation: "business owner",
    studiedCS: false,
    place: "Jaipur",
    currentlyEmployed: true,
    ownsCar: false,
    hobbies: [
      {
        type: "gardening",
      },
      {
        type: "reading",
        genre: "historical fiction",
      },
    ],
    petsInfo: [
      {
        petName: "Bella",
        petType: "persian cat",
        age: 3,
        isVaccinated: true,
        favoriteActivity: "lounging in the sun",
      },
      {
        petName: "Leo",
        petType: "persian cat",
        age: 3,
        isVaccinated: true,
        favoriteActivity: "lounging in the sun",
      },
    ],
  },
  {
    name: "Kavya",
    age: 28,
    designation: "dancer",
    studiedCS: false,
    place: "Chennai",
    currentlyEmployed: false,
    ownsCar: false,
    hobbies: [
      {
        type: "binge-watching sci-fi shows",
      },
      {
        type: "reading",
        genre: "modern fantasy novels",
      },
    ],
    petsInfo: [
      {
        petName: "Snowy",
        petType: "rescue rabbit",
        age: 2,
        isVaccinated: true,
        favoriteActivity:
          "enjoys hopping around her backyard and nibbling on carrots",
      },
    ],
  },
];

// 1. How many individuals are currently employed?
const countEmployedIndividuals = function (records) {
  const employedIndividuls = records.filter(
    (individual) => individual.currentlyEmployed
  );

  return employedIndividuls.length;
};

console.log(countEmployedIndividuals(peopleDetails));

// 2. How many people own a car?
const countIndividualsOwningCar = function (records) {
  const individualsWithCar = records.filter((individual) => individual.ownsCar);

  return individualsWithCar.length;
};

console.log(countIndividualsOwningCar(peopleDetails));

