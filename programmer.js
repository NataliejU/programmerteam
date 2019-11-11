// Programmer class
class Programmer{
  // Include constructor that accepts name, position, age and language
  constructor(name, position, age, language){
      this.name = name;
      this.position = position;
      this.age = age;
      this.language = language;
  }
  // Include the constructor that accepts name, position, age and language
  programmerInfo(){
      console.log(`
      ProgrammerName: ${this.name}
      ProgrammerPosition: ${this.position}
      ProgrammerAge: ${this.age}
      ProgrammerLanguage: ${this.language}
      `);
  }
}

//Export this class to be included in the team.js file
module.exports = Programmer;