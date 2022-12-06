function solve(input) {
  let yearTax = Number(input[0]);
  let shoes = 0.6 * yearTax;
  let ekip = 0.8 * shoes;
  let ball = ekip / 4;
  let other = ball / 5;
  total = shoes + ekip + ball + other+yearTax;
  console.log(total.toFixed(2));
}
solve([320]);
