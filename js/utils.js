let info = [];

function AddCoworker() {
  let name = prompt("Enter coworker`s name:").trim();
  name === "" ? (name = "SOME NAME") : name;

  let sName = prompt("Enter coworker`s surname:").trim();
  sName === "" ? (sName = "SOME SURNAME") : sName;

  let age = +prompt("Enter coworker`s age:");
  isNaN(age) ? (age = "UNDEFINED") : age;

  let occupation = prompt("Enter coworker`s occupation:").trim().toLowerCase();
  occupation === "" ? (occupation = "SECURED") : occupation;

  let user = {
    name: `${name}`,
    sName: `${sName}`,
    age: `${age}`,
    occupation: `${occupation}`,
    show: function () {
      console.log(
        `Worker name is ${this.name} ${this.sName}, he/she is ${this.age} years old. He/she is a/an ${this.occupation} `
      );
    },
  };

  info.push(user);
  
}



export { info, AddCoworker };
