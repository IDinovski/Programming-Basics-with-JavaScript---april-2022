function solve(input) {
  let index = 0;
  let obem = Number(input[index]);
  index++;
  let next = input[index];
  index++;
  let obemCounter = 0;
  let suitcasesCounter = 0;
  while (next !== "End") {
    obemCounter += Number(next);
    next = input[index];
    index++;
    if (obemCounter > obem) {
      console.log(`No more space!`);
      break;
    }
    suitcasesCounter++;
  }
  if (next === "End") {
    console.log(`Congratulations! All suitcases are loaded!`);
  }
  console.log(`Statistic: ${suitcasesCounter} suitcases loaded.`);
}

solve(["100", "180", "180", "180", "180", "End"]);
