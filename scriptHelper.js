// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  image
) {
  document.getElementById(
    "missionTarget"
  ).innerHTML = `               <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${image}">`;
}

function validateInput(testInput) {
  //if (typeof testInput === "string") {
  if (testInput.trim() === "") {
    return "Empty";
  } else if (isNaN(testInput) === true) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (validateInput(pilot) !== "Not a Number") {
    alert("Invalid Input: field cannot be empty");
  }
  if (validateInput(copilot) !== "Not a Number") {
    alert("Invalid Input: field cannot be empty");
  }
  if (validateInput(fuelLevel) !== "Is a Number") {
    alert("Invalid Input");
  }
  if (validateInput(cargoLevel) !== "Is a Number") {
    alert("Invalid Input");
  } else {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
    document.getElementById(
      "copilotStatus"
    ).innerHTML = `Pilot ${copilot} Ready `;

    if (fuelLevel < 10000) {
      document.getElementById("faultyItems").style = "visible";
      document.getElementById("fuelStatus").innerHTML =
        "Fuel level too low for launch.";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle not ready for launch.";
      document.getElementById("launchStatus").style.color = "red";
    }
    if (cargoLevel > 10000) {
      document.getElementById("faultyItems").style = "visible";
      document.getElementById("cargoStatus").innerHTML =
        "Cargo Mass too high for launch.";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle not ready for launch.";
      document.getElementById("launchStatus").style.color = "red";
    }
    if (fuelLevel >= 10000 && cargoLevel < 10000) {
      document.getElementById("launchStatus").innerHTML =
        "Shuttle ready for launch.";
      document.getElementById("launchStatus").style.color = "green";
    }
  }
}
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
