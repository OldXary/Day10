var myPet = {
    species: "Retriever",
    name: "Zmaj",
    legs: 4,
    friends: ["Cat", "Horse"]
};

function myFunction(myObj) {

    return myObj;
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction};