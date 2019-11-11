// Require team.js class
const Team = require("./team.js");

// Require fs
const fs = require("fs");

// New team object
const team = new Team("New");

// read members.txt
const lineReader = require('readline').createInterface({
    input: fs.createReadStream('members.txt')
});

lineReader
    .on('line', function (line) {
    const teamMember = line.split(",");
      team.addProgrammer(teamMember[0], teamMember[1], teamMember[2], teamMember[3]);
    })
    .on('close', process);

// // code when lineReader is done
function process() {
    // Loop through and print the programmers in the array
    for (let n=0; n<team.programmers.length; n++){
        console.log(team.programmers[n]);
    }
    // Print the total number of team members in the array
    console.log(`There are ${team.returnNumberOfTeamMembers()} team members`);
}