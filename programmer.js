// Programmer's name
// Position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.
//
// Finally, create a "Programmer" object and call the method to print its contents


function Programmer(name, job, age, lang) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.lang = lang;
    this.programmerInfo = function () {
      console.log(this);
    }
  }
  var natalie = new Programmer("Natalie", "superhero", 27, "CSS");
  natalie.programmerInfo()