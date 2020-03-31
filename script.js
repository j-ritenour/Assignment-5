// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]"); //should be string
      let copilotName = document.querySelector("input[name=copilotName]"); //should be string
      let fuelLevel = document.querySelector("input[name=fuelLevel]"); //should be number
      let cargoMass = document.querySelector("input[name=cargoMass]"); //should be number 
      fuelLevel.value=parseInt(fuelLevel.value);
      cargoMass.value=parseInt(cargoMass.value);
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      if (pilotName.value === ""
      || copilotName.value === ""
      || fuelLevel.value === ""
      || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      faultyItems.style.visibility="visible";
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is READY for Launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is READY for Launch`;
      if(fuelLevel.value < 10000){
         fuelStatus.innerHTML = "Fuel Level too low";
         launchStatus.innerHTML = "Shuttle NOT READY for launch";
         launchStatus.style.color = "red";
      }
      if(cargoMass.value > 10000){
         cargoStatus.innerHTML ="Cargo Mass TOO BIG";
         launchStatus.innerHTML ="Shuttle NOT READY for launch";
         launchStatus.style.color = "red";
      }
      if(cargoMass.value < 10000 && fuelLevel.value > 10000){
         launchStatus.innerHTML = "Shuttle READY FOR LAUNCH!";
         launchStatus.style.color = "green";
      }
   });

});




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
