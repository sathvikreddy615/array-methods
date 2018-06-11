const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const frag = document.createDocumentFragment();

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");
const planetUl = document.createElement("ul");
const planetLi = document.createElement("li");

const displayPlanets = () => {
    planets.forEach(i => {
        planetLi.innerHTML += `Planet: ${i} <br> `;
        planetUl.appendChild(planetLi);
        return planetUl;
    });
    frag.appendChild(planetUl);
}
displayPlanets()
planetEl.appendChild(frag);

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalPlanets = planets.map(function (planet) {
    if (planet === "mercury") {
        const mercury = "mercury";
        return mercury.charAt(0).toUpperCase() + mercury.slice(1);
    } else if (planet === "venus") {
        const venus = "venus";
        return venus.charAt(0).toUpperCase() + venus.slice(1);
    } else if (planet === "earth") {
        const earth = "earth";
        return earth.charAt(0).toUpperCase() + earth.slice(1);
    } else if (planet === "mars") {
        const mars = "mars";
        return mars.charAt(0).toUpperCase() + mars.slice(1);
    } else if (planet === "jupiter") {
        const jupiter = "jupiter";
        return jupiter.charAt(0).toUpperCase() + jupiter.slice(1);  
    } else if (planet === "saturn") {
        const saturn = "saturn";
        return saturn.charAt(0).toUpperCase() + saturn.slice(1);  
    } else if (planet === "uranus") {
        const uranus = "uranus";
        return uranus.charAt(0).toUpperCase() + uranus.slice(1);  
    } else if (planet === "neptune") {
        const neptune = "neptune";
        return neptune.charAt(0).toUpperCase() + neptune.slice(1);  
    }
})

console.log(capitalPlanets); // returns a new array of planets that have the first letter capitalized

/*
Use the filter method to create a new array that
contains planets with the letter 'e'. Use the `includes()`
method on strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(function (planet) {
    if (planet.includes("e")) {
        return planet;
    }
})

console.log(ePlanets); // filters and returns an array of planets containg the letter "e"

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

const concatWords = words.reduce(function (runningTotal, next){
    return `${runningTotal} ${next}`;
})

console.log(concatWords);