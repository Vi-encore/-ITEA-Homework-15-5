//6. Для завдання 3 створити метод, що дозволяє відсортувати масив
//співробітників за однією з властивостей: name, sName, age, occupation, salary.
//Параметр сортування приймається від користувача.
//Після виконання функції – вивести інформацію про співробітників.

let info2 = [];

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

    info2.push(user);

    ask = prompt(`Wanna add another coworker? yes/`);
  } while (ask === "yes");
}

function AddKey() {
  AddCoworker();
  for (let i = 0; i < info.length; i++) {
    info2[i].occupation === "director"
      ? (info2[i].salary = 3000)
      : info2[i].occupation === "manager"
      ? (info2[i].salary = 1500)
      : info2[i].occupation === "programmer"
      ? (info2[i].salary = 2000)
      : (info2[i].salary = 1000);

    info2[i].show = function () {
      console.log(
        `Worker name is ${this.name} ${this.sName}, he/she is ${this.age} years old. He/she is a/an ${this.occupation}. His/Hers salary is ${this.salary}. `
      );
    };
  }
}

function SortArr() {
  AddKey();

  let sortParam = prompt("Enter sorting criterion:").trim().toLowerCase();
  sortParam === "" ? (sName = "You entered no data!") : sortParam;

  info2.sort((a, b) => (a[sortParam] > b[sortParam] ? 1 : -1));
  console.log(info2);
}

SortArr();
