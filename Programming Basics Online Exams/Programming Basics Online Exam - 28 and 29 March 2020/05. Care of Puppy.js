function solve(input) {
  let buyedFood = Number(input[0]) * 1000;
  let eatenFood = 0;
  let index = 1;
  let command = input[index];
  while (command !== "Adopted") {
    eatenFood += Number(command);
    index++;
    command = input[index];
  }
  let diff = buyedFood - eatenFood;
  if (buyedFood >= eatenFood) {
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
  } else {
    console.log(`Food is not enough. You need ${Math.abs(diff)} grams more.`);
  }
}
solve(["1", "1000", "Adopted"]);
