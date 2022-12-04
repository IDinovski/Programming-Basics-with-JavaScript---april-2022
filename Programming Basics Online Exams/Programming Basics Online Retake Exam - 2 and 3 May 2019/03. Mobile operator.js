function solve(input) {
  let contract = input[0];
  let typeOfContract = input[1];
  let internet = input[2];
  let months = Number(input[3]);
  let total = 0;

  let pricePerMonth = 0;
  switch (contract) {
    case "one":
      switch (typeOfContract) {
        case "Small":
          pricePerMonth = 9.98;
          break;
        case "Middle":
          pricePerMonth = 18.99;
          break;
        case "Large":
          pricePerMonth = 25.98;
          break;
        case "ExtraLarge":
          pricePerMonth = 35.99;
          break;
      }
      break;
    case "two":
      switch (typeOfContract) {
        case "Small":
          pricePerMonth = 8.58;
          break;
        case "Middle":
          pricePerMonth = 17.09;
          break;
        case "Large":
          pricePerMonth = 23.59;
          break;
        case "ExtraLarge":
          pricePerMonth = 31.79;
          break;
      }
      break;
  }
  switch (internet) {
    case "yes":
      if (pricePerMonth <= 10) {
        pricePerMonth += 5.5;
      } else if (pricePerMonth <= 30) {
        pricePerMonth += 4.35;
      } else if (pricePerMonth > 30) {
        pricePerMonth += 3.85;
      }
  }
  total = pricePerMonth * months;
  if (contract == "two") {
    total = total * 0.9625;
  }

  console.log(`${total.toFixed(2)} lv.`);
}
solve(["two", "Large", "no", "10"]);
