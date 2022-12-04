function solve(input) {
  let amountDays = Number(input[0]);
  let amountHours = Number(input[1]);
  let total = 0;
  let oddDayEvenHours = 2.5;
  let evenDayOddHours = 1.25;
  let currentPrice = 0;
  for (let i = 1; i <= amountDays; i++) {
    for (let j = 1; j <= amountHours; j++) {
      if (i % 2 == 0 && j % 2 != 0) {
        currentPrice += oddDayEvenHours;
      } else if (i % 2 != 0 && j % 2 == 0) {
        currentPrice += evenDayOddHours;
      } else {
        currentPrice += 1;
      }
    }
    total += currentPrice;
    console.log(`Day: ${i} - ${currentPrice.toFixed(2)} leva`);
    currentPrice = 0;
  }
  console.log(`Total: ${total.toFixed(2)} leva`);
}
solve([5, 2]);
solve([2, 5]);
