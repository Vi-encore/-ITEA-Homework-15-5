//1. Створити об'єкт Point, що містить дві властивості: "x" та "y" - координати точки,
//і метод GetQuadrant, що обчислює, в якому квадранті в декартовій системі координат знаходиться
//дана точка. Протестуйте цей об'єкт, змінюючи значення його координат, та повторно
//викликаючи метод GetQuadrant.

let Point = {
  x: +prompt(`Enter x coordinate:`),
  y: +prompt(`Enter y coordinate:`),

  GetQuadrant: function () {
    let x = Point.x;
    let y = Point.y;

    if (x === 0 || y === 0) {
      alert("Point is in the middle.");
    } else {
      if (x > 0) {
        y > 0
          ? alert(`This point is in I quadrant.`)
          : alert(`This point is in IV quadrant.`);
      } else {
        y > 0
          ? alert(`This point is in II quadrant.`)
          : alert(`This point is in III quadrant.`);
      }
    }
  },
};

Point.GetQuadrant();
