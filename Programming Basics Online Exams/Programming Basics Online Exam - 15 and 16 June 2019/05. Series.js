function solve(input) {
  let budget = input[0];
  let amount = input[1];
  let index = 2;
  let total = 0;
  let price = 0;
  for (let i = 0; i < amount; i++) {
    let serialName = input[index];
    index++;
    switch (serialName) {
      case "Thrones":
        price = Number(input[index]) * 0.5;
        break;
      case "Lucifer":
        price = Number(input[index]) * 0.6;
        break;
      case "Protector":
        price = Number(input[index]) * 0.7;
        break;
      case "TotalDrama":
        price = Number(input[index]) * 0.8;
        break;
      case "Area":
        price = Number(input[index]) * 0.9;
        break;
      default:
        price = Number(input[index]);
        break;
    }

    total += price;
    index++;
  }
  let diff = Math.abs(budget - total);
  if (budget >= total) {
    console.log(
      `You bought all the series and left with ${diff.toFixed(2)} lv.`
    );
  } else {
    console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
  }
}
solve([]);
