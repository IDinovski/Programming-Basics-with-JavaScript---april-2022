function solve(input) {
  let name = input[0];
  let amount = Number(input[1]);
  let index = 2;
  let result = input[index];
  index++;
  let w = 0;
  let d = 0;
  let l = 0;
  let points = 0;

  for (let i = 1; i <= amount; i++) {
    switch (result) {
      case "W":
        w++;
        points += 3;
        break;

      case "D":
        d++;
        points += 1;
        break;

      case "L":
        l++;
        break;
    }
    result = input[index];
    index++;
  }
  let winrate = (w / amount) * 100;
  if (amount == 0) {
    console.log(`${name} hasn't played any games during this season.`);
  } else {
    console.log(`${name} has won ${points} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${w}`);
    console.log(`## D: ${d}`);
    console.log(`## L: ${l}`);
    console.log(`Win rate: ${winrate.toFixed(2)}%`);
  }
}
solve(["Liverpool", "0", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
