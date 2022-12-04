function solve(input) {
  let priceSup = 100;

  let budget = input[0];
  let priceBenzin = 2.1 * input[1];
  let dayOfTheWeek = input[2];
  let total = priceBenzin + priceSup;
  switch (dayOfTheWeek) {
    case "Saturday":
      total = 0.9 * total;
      break;
    case "Sunday":
      total = 0.8 * total;
      break;
  }
  let diff = Math.abs(budget - total);
  if (budget >= total) {
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
  } else {
    console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
  }
}
solve([120, 30, "Saturday"]);
