function solve(input) {
  let wCounter = 0;
  let lCounter = 0;
  let dCounter = 0;
  for (let i = 0; i < input.length; i++) {
    let a = Number(input[i][0]);
    let b = Number(input[i][input[i].length - 1]);
    if (a > b) {
      wCounter++;
    } else if (b > a) {
      lCounter++;
    } else {
      dCounter++;
    }
  }
  console.log(`Team won ${wCounter} games.`);
  console.log(`Team lost ${lCounter} games.`);
  console.log(`Drawn games: ${dCounter}`);
}
solve(["4:2", "0:3", "1:0"]);
