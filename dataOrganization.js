const peopleDetails = [
  {
    name: "Rahul",
    age: 34,
    designation: "software engineer",
    studiedCS: true,
    place: "Pune",
    currentlyEmployed: true,
    ownsCar: true,
    hobbies: [
      {
        type: "playing chess",
      },
      { type: "gardening" },
    ],
    havePets: true,
    petsInfo: [
      {
        petName: "Max",
        petType: "dog",
        breed: "golden retriever",
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
    havePets: true,
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
    havePets: true,
    petsInfo: [
      {
        petName: "Bella",
        petType: "cat",
        breed: "persian cat",
        age: 3,
        isVaccinated: true,
        favoriteActivity: "lounging in the sun",
      },
      {
        petName: "Leo",
        petType: "cat",
        breed: "persian cat",
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
    havePets: true,
    petsInfo: [
      {
        petName: "Snowy",
        petType: "rabbit",
        age: 2,
        isVaccinated: true,
        favoriteActivity:
          "enjoys hopping around her backyard and nibbling on carrots",
      },
    ],
  },
];

// 1. How many individuals are currently employed? => 2
const countEmployedIndividuals = function (records) {
  const employedIndividuals = records.filter(
    (individual) => individual.currentlyEmployed
  );

  return employedIndividuals.length;
};

// console.log(countEmployedIndividuals(peopleDetails));

// 2. How many people own a car? => 1
const countIndividualsOwningCar = function (records) {
  const individualsWithCar = records.filter((individual) => individual.ownsCar);

  return individualsWithCar.length;
};

// console.log(countIndividualsOwningCar(peopleDetails));

// 3. How many pets are fully vaccinated? => 5
const countfullyVaccinatedPets = function (records) {
  const petsDetails = records.flatMap((individual) => individual.petsInfo);
  const fullyVaccinatedPets = petsDetails.filter(
    (specificPet) => specificPet.isVaccinated
  );

  return fullyVaccinatedPets.length;
};

// console.log(countfullyVaccinatedPets(peopleDetails));

//4. What are the names of all the pets, and what type of animal is each?
const findPetNameAndType = function (records) {
  const petsDetails = records.flatMap((individual) => individual.petsInfo);
  return petsDetails.map((specificPet) => [
    specificPet.petName,
    specificPet.petType,
  ]);
};

// console.log(findPetNameAndType(peopleDetails));

// 5. Which cities do the individuals live in?
const findCitiesIndividualsLiveIn = function (records) {
  return records.map((individual) => individual.place);
};

// console.log(findCitiesIndividualsLiveIn(peopleDetails));

// 6. How many hobbies are shared across the group? What are they?
const hasNoDuplicates = function (set, element) {
  if (!set.includes(element)) {
    set.push(element);
  }

  return set;
};

const removeDuplicates = function (numbers) {
  return numbers.reduce(hasNoDuplicates, []);
};

const findUniqueHobbies = function (records) {
  const hobbiesInfo = records.flatMap((individual) => individual.hobbies);
  const hobbies = hobbiesInfo.map((hobby) => hobby.type);
  return removeDuplicates(hobbies);
};

console.log(findUniqueHobbies(peopleDetails));

// 7. How many pets belong to people who are currently unemployed? => 2
const countPetsOfUnemployed = function (records) {
  const unemployedIndividuals = records.filter(
    (individual) => !individual.currentlyEmployed
  );
  const petsDetails = unemployedIndividuals.flatMap(
    (individual) => individual.petsInfo
  );

  return petsDetails.length;
};

// console.log(countPetsOfUnemployed(peopleDetails));

// 8. What is the average age of the individuals mentioned in the passage?
const findAverageAge = function (records) {
  const sumOfAges = records
    .map((individual) => individual.age)
    .reduce((sum, number) => sum + number);

  return sumOfAges / records.length;
};

// console.log(findAverageAge(peopleDetails));

// 9. How many individuals have studied computer science, and how many of them have pets?
const countIndividualStudiedCsAndHavePets = function (records) {
  const csIndividualsWithPets = records.filter(
    (individual) => individual.studiedCS && individual.havePets
  );

  return csIndividualsWithPets.length;
};

// console.log(countIndividualStudiedCsAndHavePets(peopleDetails));

//10. How many individuals own more than one pet?
const countIndividualsHavingMoreThanOnePet = function (records) {
  const petDetails = records
    .filter((individual) => individual.havePets)
    .map((individual) => individual.petsInfo);

  const individualsWithMoreThanOnePet = petDetails.filter(
    (individualsPets) => individualsPets.length > 1
  );

  return individualsWithMoreThanOnePet.length;
};

// console.log(countIndividualsHavingMoreThanOnePet(peopleDetails));

// 11. Which pets are associated with specific favorite activities?
