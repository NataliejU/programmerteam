  // Include from programmer.js file
const Programmer = require("./programmer.js");

// Create a team class
class Team {
  constructor(projectName){
        this.programmers = [];
        this.projectName = projectName;
    }
    // Method for adding a programmer into the programmer array
    addProgrammer(name, position, age, language){
        this.programmers.push(new Programmer(name, position, age, language));
    }
    // Method to retun the total number of programmers in the array
    returnNumberOfTeamMembers(){
        return this.programmers.length;
    }
}

// Export Team class to be included in the index.js file
module.exports = Team;