// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input = require('readline-sync');
let astronautCount = input.question("What is the astronaut count? ")
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225
let fuelLevel = 1
let weatherStatus = "clear"
let overallStatus = "YES"

// Write code to generate the LC04 report here:

let dottedLine = "-------------------------------------"

console.log(dottedLine + "\n> LC04 - LAUNCH CHECKLIST\n" + dottedLine)
console.log("Date:", date + "\n")
console.log(dottedLine + "\n> ASTRONAUT INFO\n" + dottedLine)
console.log("* count:", astronautCount)
console.log("* status:", astronautStatus, "\n")
console.log(dottedLine + "\n> FUEL DATA\n" + dottedLine)
console.log("* Fuel temp celsius:", fuelTempCelsius, "C")
console.log("* Fuel level:", (fuelLevel*100) + "%\n")
console.log(dottedLine + "\n> MASS DATA\n" + dottedLine)
console.log("* Crew mass:", crewMassKg, "kg")
console.log("* Fuel mass:", fuelMassKg, "kg")
console.log("* Shuttle mass:", shuttleMassKg, "kg")
console.log("* Total mass:", totalMassKg, "kg\n")
console.log(dottedLine + "\n> FLIGHT PLAN\n" + dottedLine)
console.log("* weather:", weatherStatus, "\n")
console.log(dottedLine + "\n> OVERALL STATUS\n" + dottedLine)
console.log("* Clear for takeoff:", overallStatus)


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.