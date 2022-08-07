function areaOfFigures(input) {
  let figura = String(input[0]);
  let firstNum = Number(input[1]);
  let secondNum = Number(input[2]);
  let squareArea = firstNum * firstNum;
  let rectangleArea = firstNum * secondNum;
  let circleArea = Math.PI * (firstNum * firstNum);
  let triangleArea = 0.5 * firstNum * secondNum;

  if (figura === "square") {
    console.log(squareArea.toFixed(3));
  } else if (figura === "rectangle") {
    console.log(rectangleArea.toFixed(3));
  } else if (figura === "circle") {
    console.log(circleArea.toFixed(3));
  } else if (figura === "triangle") {
    console.log(triangleArea.toFixed(3));
  }
}
