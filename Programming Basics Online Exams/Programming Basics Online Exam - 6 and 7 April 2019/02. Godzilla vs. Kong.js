function solve(input) {
  let budget = Number(input[0]);
  let amountStatist = Number(input[1]);
  let pricePerStatist = Number(input[2]);
  let totalPriceStatist = amountStatist * pricePerStatist;
  if (amountStatist > 150) {
    totalPriceStatist = totalPriceStatist * 0.9;
  }
  let dekor = 0.1 * budget;
  let totalMoviePrice = dekor + totalPriceStatist;
  let diff = Math.abs(budget - totalMoviePrice);
  if (totalMoviePrice > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  } else {
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${diff.toFixed(2)} leva left.`
    );
  }
}
solve(["20000", "120", "55.5"]);
