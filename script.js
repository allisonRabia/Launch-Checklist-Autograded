//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {
  const button = document.getElementById("formSubmit");

  button.addEventListener("click", function (event) {
    event.preventDefault();
    const faultyItems = document.getElementById("faultyItems");
    const pilotName = document.getElementById("pilotName").value;
    const copilotName = document.getElementById("copilotName").value;
    const fuelLevel = document.getElementById("fuelLevel").value;
    const cargoMass = document.getElementById("cargoMass").value;
    formSubmission(
      document,
      faultyItems,
      pilotName,
      copilotName,
      fuelLevel,
      cargoMass
    );
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let destinationPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        destinationPlanet.name,
        destinationPlanet.diameter,
        destinationPlanet.star,
        destinationPlanet.distance,
        destinationPlanet.moons,
        destinationPlanet.image
      );
    });
});
