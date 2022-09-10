function solve(input) {
  let drink = input[0];
  let shugar = input[1];
  let amount = Number(input[2]);
  let total = 0;

  switch (shugar) {
    case "Without":
      switch (drink) {
        case "Espresso":
          total = 0.9 * amount;
          break;

        case "Cappuccino":
          total = 1.0 * amount;
          break;

        case "Tea":
          total = 0.5 * amount;
          break;
      }
      break;
    case "Normal":
      switch (drink) {
        case "Espresso":
          total = 1 * amount;
          break;

        case "Cappuccino":
          total = 1.2 * amount;
          break;

        case "Tea":
          total = 0.6 * amount;
          break;
      }
      break;
    case "Extra":
      switch (drink) {
        case "Espresso":
          total = 1.2 * amount;
          break;

        case "Cappuccino":
          total = 1.6 * amount;
          break;

        case "Tea":
          total = 0.7 * amount;
          break;
      }
      break;
  }

  if (shugar === "Without") {
    total = 0.65 * total;
  }
  if (drink === "Espresso" && amount>=5) {
    total = 0.75 * total;
  }
  if (total > 15) {
    total = 0.8 * total;
  }
  console.log(`You bought ${amount} cups of ${drink} for ${total.toFixed(2)} lv.`);
}
solve(["Tea", "Extra", "3"]);
