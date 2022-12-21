//5. Для попереднього завдання створіть функцію, яка прийматиме масив об'єктів-співробітників,
//і кожному з об'єктів буде додавати нову властивість "salary", що зберігає зарплату співробітника.
//   Зарплата розраховується, виходячи із значення властивості "occupation" таким чином:
//     • "director" - 3000;
//     • "manager" - 1500;
//     • "programmer" - 2000;
//     • для решти значень – 1000.
//   Після виконання функції – вивести інформацію про співробітників.

// sort(function(a, b) { return a > b });
// 1, 2, 3, 5, 10, 14
// 1, 10, 14, 2, 3,

let info1 = [];

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

    info1.push(user);

    ask = prompt(`Wanna add another coworker? yes/`);
  } while (ask === "yes");
}

function AddKey() {
  AddCoworker();
  for (let i = 0; i < info.length; i++) {
    info1[i].occupation === "director"
      ? (info1[i].salary = 3000)
      : info1[i].occupation === "manager"
      ? (info1[i].salary = 1500)
      : info1[i].occupation === "programmer"
      ? (info1[i].salary = 2000)
      : (info1[i].salary = 1000);

    info1[i].show = function () {
      console.log(
        `Worker name is ${this.name} ${this.sName}, he/she is ${this.age} years old. He/she is a/an ${this.occupation}. His/Hers salary is ${this.salary}. `
      );
    };
    info1[i].show();
  }
}

AddKey();
console.log(info1);
