function solve(input) {
  let actorName = input[0];
  let points = Number(input[1]);
  let amount = Number(input[2]);
  let index = 3;
  for (let i = 0; i < amount; i++) {
    let otherName = input[index];
    index++;
    let newPoints = (Number(input[index]) * otherName.length) / 2;
    index++;
    points += newPoints;
    if (points >= 1250.5) {
      break;
    }
  }
  if (points > 1250.5) {
    console.log(
      `Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(
        1
      )}!`
    );
  } else {
    console.log(
      `Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`
    );
  }
}
solve([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
