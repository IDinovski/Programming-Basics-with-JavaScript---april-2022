function solve(input) {
  let index = 0;
  let broiDni = Number(input[index]);
  index++;

  let next = input[index];
  index++;
  let winCounter = 0;
  let loseCounter = 0;
  let moneyCounter = 0;
  let dayWin = 0;
  let dayLose = 0;
  let totalMoney = 0;
  for (let i = 1; i <= broiDni; i++) {
    while (next !== "Finish") {
      if (next === "win") {
        winCounter++;
        moneyCounter += 20;
      } else if (next === "lose") {
        loseCounter++;
      }
      next = input[index];
      index++;
    }
    if (winCounter > loseCounter) {
      moneyCounter += 0.1 * moneyCounter;
      dayWin++;
    } else {
      dayLose++;
    }
    next = input[index];
    index++;
    totalMoney += moneyCounter;
    moneyCounter = 0;
    winCounter = 0;
    loseCounter = 0;
  }
  if (dayWin > dayLose) {
    totalMoney += 0.2 * totalMoney;
    console.log(
      `You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  } else if(dayLose>dayWin){
    console.log(
      `You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  }
}

solve([
  "3",
  "volleyball",
  "lose",
  "football",
  "lose",
  "basketball",
  "win",
  "Finish",
  "golf",
  "lose",
  "tennis",
  "lose",
  "badminton",
  "lose",
  "badminton",
  "win",
  "Finish",
  "golf",
  "win",
  "tennis",
  "win",
  "Finish",
]);
