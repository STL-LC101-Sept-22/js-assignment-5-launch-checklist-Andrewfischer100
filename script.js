const { formSubmission, validateInput } = require("./scriptHelper");

window.addEventListener("load", function () {
    let list = document.getElementById("faultyItems");
    list.style.visibility = "visible";
    let form = document.querySelector("form");
    let button = document.querySelector("button");

    button.addEventListener("click", function(event) {
    alert("test")
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
 
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
 
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelInput.value);
 
        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoInput.value);

        let fuel = document.getElementById("fuelStatus");
        let cargo = document.getElementById("cargoStatus");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
    
        if (validateInput(pilot) === "empty" || validateInput(copilot) === "empty" || validateInput(fuelLevel) === "empty" || validateInput(cargoLevel) === "empty") {
            alert("All fields are required!");
        } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
            alert("Make sure to enter valid information for each field!");
        } else {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            let launchStatus = document.getElementById("launchStatus");
            if (fuelLevel < 10000 && cargoLevel <= 10000) {
                fuel.innerHTML = "Fuel level too low for launch";
                cargo.innerHTML = "Cargo mass low enough for launch"
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
            } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
                fuel.innerHTML = "Fuel level high enough for launch"
                cargo.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
            } else if (fuelLevel < 10000 && cargoLevel > 10000) {
                fuel.innerHTML = "Fuel level too low for launch";
                cargo.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
            } else {
                fuel.innerHTML = "Fuel level high enough for launch"
                cargo.innerHTML = "Cargo mass low enough for launch"
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "green";
                event.preventDefault();
            }
        }
     })
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
  
    