// 4. Створити масив, який зберігатиме у собі інформацію про співробітників підприємства.
// Кожен елемент масиву - об'єкт, містить властивості: name, sName, age, occupation,
// та метод show, який виводить всю інформацію про користувача.
// Реалізувати заповнення масиву користувачем. Після закінчення заповнення – вивести інформацію про співробітників.

let info = [];

function AddCoworker() {
  do {
    let name = prompt("Enter coworker`s name:").trim();
    name === "" ? (name = "SOME NAME") : name;

    let sName = prompt("Enter coworker`s surname:").trim();
    sName === "" ? (sName = "SOME SURNAME") : sName;

    let age = +prompt("Enter coworker`s age:");
    isNaN(age) ? (age = "UNDEFINED") : age;

    let occupation = prompt("Enter coworker`s occupation:")
      .trim()
      .toLowerCase();
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
    user.show();
    ask = prompt(`Wanna add another coworker? yes/`);
  } while (ask === "yes");
}

AddCoworker();
console.log(info);
