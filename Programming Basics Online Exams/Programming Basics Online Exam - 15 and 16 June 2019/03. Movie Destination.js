function solve(input) {
  let budget = input[0];
  let destination = input[1];
  let season = input[2];
  let amountDays = input[3];
  let pricePerDay = 0;
  switch (destination) {
    case "Dubai":
      switch (season) {
        case "Winter":
          pricePerDay = 45000;
          break;
        case "Summer":
          pricePerDay = 40000;
          break;
      }
      break;
    case "Sofia":
      switch (season) {
        case "Winter":
          pricePerDay = 17000;
          break;
        case "Summer":
          pricePerDay = 12500;
          break;
      }
      break;
    case "London":
      switch (season) {
        case "Winter":
          pricePerDay = 24000;
          break;
        case "Summer":
          pricePerDay = 20250;
          break;
      }
      break;
  }
  let total = pricePerDay * amountDays;
  if (destination == "Dubai") {
    total = 0.7 * total;
  } else if (destination == "Sofia") {
    total = 1.25 * total;
  }
  let diff = Math.abs(total - budget);
  if (budget >= total) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}
