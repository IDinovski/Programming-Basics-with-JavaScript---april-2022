function solve(input) {
  let index = 0;
  let budget = input[index];
  index++;
  let next = input[index];
  let budgetLeft = budget;
  let currentActorPrice = 0;
  let flag = true;
  while (next != "ACTION") {
    next = input[index];
    index++;
    if (next.length > 15) {
      currentActorPrice = 0.2 * budgetLeft;
      budgetLeft -= currentActorPrice;
    } else {
      currentActorPrice = Number(input[index]);
      budgetLeft -= currentActorPrice;
      index++;
    }
    if (budgetLeft < 0) {
      flag = false;
      break;
    }
    next = input[index];
  }
  budgetLeft = Math.abs(budgetLeft);
  if (flag) {
    console.log(`We are left with ${budgetLeft.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${budgetLeft.toFixed(2)} leva for our actors.`);
  }
}
solve([
  170000,
  "Ben Affleck",
  40000,
  "Zahari Baharov",
  80000,
  "Tom Hanks",
  2000,
  "ACTION",
]);
