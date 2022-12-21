//2. Створити об'єкт Calculator, який має містити методи для розрахунку суми,
//різниці, добутку та приватного двох чисел.
//Протестувати цей об'єкт, приймаючи від користувача значення
//двох операндів та знак операції. Залежно від прийнятого знака операції викликати відповідний метод.

let Calculator = {
  sum: function (x, y) {
    alert(x + y);
  },
  sub: function (x, y) {
    alert(x - y);
  },
  mult: function (x, y) {
    alert(x * y);
  },
  div: function (x, y) {
    alert(x / y);
  },
};

function operation() {
  let x = +prompt("Enter first number:");
  let y = +prompt("Enter Second number:");
  let sign = prompt("Enter arithmetical sign:");
  let signs = "+-/*";

  if (x === "" || y === "" || sign === "") {
    alert("You don`t enter some data! Try again!");
  } else if (!Number(x) || !Number(y)) {
    alert("Enter correct data! (number)");
  } else if (!signs.includes(sign)) {
    alert("You entered wrong arithmetical sign!");
  } else if (sign.length > 1) {
    alert("Enter only 1 arithmetical sign!");
  } else {
    switch (sign) {
      case "-":
        Calculator.sub(x, y);
        break;
      case "*":
        Calculator.mult(x, y);
        break;
      case "/":
        Calculator.div(x, y);
        break;
      default:
        Calculator.sum(x, y);
    }
  }
}

operation();
