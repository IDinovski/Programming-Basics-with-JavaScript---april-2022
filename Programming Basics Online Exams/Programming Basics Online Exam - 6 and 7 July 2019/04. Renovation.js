function solve(input) {
  let h = Number(input[0]);
  let w = Number(input[1]);
  let totalSquare = h * w * 4;
  let squareForPainting =
  totalSquare - totalSquare * (Number(input[2]) / 100);
  let index = 3;
  let next = Number(input[index]);
  let ostanalaPlosht = squareForPainting;
  let boqdisanaPlosht = 0;
  while (next != "Tired!") {
    next = Number(input[index]);
    boqdisanaPlosht += next;
    ostanalaPlosht -= next;
    index++;
    next = input[index];
    let diff = boqdisanaPlosht - squareForPainting;
    if (boqdisanaPlosht > squareForPainting) {
      console.log(`All walls are painted and you have ${diff} l paint left!`);
      break;
    } else if (boqdisanaPlosht == squareForPainting) {
      console.log(`All walls are painted! Great job, Pesho!`);
      break;
    }
  }

  if (next == "Tired!") {
    console.log(`${ostanalaPlosht} quadratic m left.`);
  }
}
solve(["2", "3", "25", "6", "7", "8"]);
