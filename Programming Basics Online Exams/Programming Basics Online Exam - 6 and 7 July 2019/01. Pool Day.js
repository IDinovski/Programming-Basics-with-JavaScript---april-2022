function solve(input) {
  let people = Number(input[0]);
  let tax = Number(input[1]);
  let priceForUmbrela = Math.ceil(people / 2) * Number(input[3]);
  let priceForSunLounger = Math.ceil(0.75 * people) * Number(input[2]);

  let total = people * tax + priceForSunLounger + priceForUmbrela;

  console.log(`${total.toFixed(2)} lv.`);
}
solve([21, 5.50, 4.40, 6.20])
