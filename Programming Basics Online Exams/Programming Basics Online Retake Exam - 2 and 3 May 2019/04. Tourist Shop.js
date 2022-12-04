function solve(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  let total = 0;
  let counter = 0;
  let current = "";
  let flag = false;
  let diff = 0;
  while (current != "Stop") {
    let product = input[index];
    index++;
    counter++;
    let price = Number(input[index]);
    index++;
    if (counter % 3 == 0) {
      price = 0.5 * price;
    }
    total += price;
    if (budget < price) {
      flag = true;
      diff = price - budget;
      break;
    }
    budget -= price;
    current = input[index];
  }
  if (flag) {
    console.log(`You don't have enough money!`);
    console.log(`You need ${diff.toFixed(2)} leva!`);
  } else {
    console.log(`You bought ${counter} products for ${total.toFixed(2)} leva.`);
  }
}
solve(["54", "Backpack", "24", "Shoes", "45", "Sunglasses"]);
