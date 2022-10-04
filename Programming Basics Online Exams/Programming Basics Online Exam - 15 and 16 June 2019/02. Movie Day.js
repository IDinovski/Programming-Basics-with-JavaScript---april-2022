function solve(input) {
  let time = input[0];
  let amountScene = input[1];
  let timePerScene = input[2];
  let warmup = (15 / 100) * time;
  let diff = Math.abs((amountScene * timePerScene + warmup) - time);
  if (amountScene * timePerScene + warmup <= time) {
    console.log(
      `You managed to finish the movie on time! You have ${Math.ceil(
        diff
      )} minutes left!`
    );
  } else {
    console.log(
      `Time is up! To complete the movie you need ${Math.ceil(diff)} minutes.`
    );
  }
}
solve([60, 15, 3]);
