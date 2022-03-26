// Part 1
const person = {
    name: "Farid",
    age: 40
};
console.log(person);

// Answer no.4  console.log(person.name)
// Answer no.5  console.log(person.age)

// Answer no.6  consol.log(peson['name']) console.log(person['age'])

// Answer no.7
const evaluation = [7, 10, 9]
console.log(evaluation);
// This is the Value (3) [7, 10, 9]

// Part 2 
const colors = ["green", "blue", "red"]
colors[3] = "yellow"; // Answer no.7
colors[4] = 5; // Answer no.8
colors.push({greeting: "hi, I am an object"}); // Answer no.9
console.log(colors);

// Answer no.4  console.log(colors.length);
// Answer no.5  console.log(colors[0]);
// Answer no.6  undefined
// Answer no.10  console.log(colors[5]);

// Part 3 "real-life" object
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: [
        "Active",
        "Energetic",
        "Independent",
        "Intelligent",
        "Gentle",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts",
    },
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits",
    },
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [
        "Intelligent",
        "Interactive",
        "Lively",
        "Playful",
        "Sensitive",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food",
    },
},
];
console.log("Name cat breed 3:", catBreeds[2].name); // Answer no.1
console.log("Energy level cat breed 1:", catBreeds[0].energy_level); // Answer no.2
console.log("First temperament cat breed 2:", catBreeds[1].temperament[0]); // Answer no.3
console.log("Last temperament cat breed 3:", catBreeds[2].temperament[4]); // Answer no.4
console.log("Favorite food cat breed 3:", catBreeds[2].food.favourite_food); // Answer no.5
        