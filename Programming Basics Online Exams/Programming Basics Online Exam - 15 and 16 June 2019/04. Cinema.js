function solve(input) {
  let maxAmount = Number(input[0]);
  let index = 1;
  let income = 0;
  let totalAmount = 0;
  let flag = false;
  while (maxAmount >= totalAmount) {
    let next = input[index];
    index++;
    if (next == "Movie time!") {
      flag = true;
      break;
    } else if (next % 3 === 0) {
      totalAmount += next;
      income += next * 5 - 5;
    } else {
      income += next * 5;
      totalAmount += next;
    }
  }
  let proba = maxAmount-totalAmount;
  if (flag) {
    console.log(`There are ${proba} seats left in the cinema.`);
  } else {
    console.log(`The cinema is full.`);
  }
  console.log(`Cinema income - ${income} lv.`);
}
solve([60, 10, 6, 3, 20, 15, "Movie time!"]);
