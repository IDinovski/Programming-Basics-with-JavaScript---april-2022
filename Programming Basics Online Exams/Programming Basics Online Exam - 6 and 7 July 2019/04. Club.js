function solve(input) {
  let jelanaPechalba = Number(input[0]);
  let index = 1;
  let next = input[index];
  index++;
  let amount = Number(input[index]);
  index++;
  let totalIncome = 0;
  while (next != "Party!") {
    curentPrice = next.length * amount;
    next = input[index];
    index++;
    amount = input[index];
    index++;
if (curentPrice%2!=0){
    curentPrice= 0.75*curentPrice
}

    totalIncome += curentPrice;
    if (totalIncome >= jelanaPechalba) {
      console.log(`Target acquired.`);
      console.log(`Club income - ${totalIncome.toFixed(2)} leva.`);
      break;
    }
  }
  let diff = jelanaPechalba - totalIncome;
  if (next == "Party!") {
    console.log(`We need ${diff.toFixed(2)} leva more.`);
    console.log(`Club income - ${totalIncome.toFixed(2)} leva.`);
  }
}
solve(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
