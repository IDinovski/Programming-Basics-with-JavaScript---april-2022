function solve(arr) {
  let strawberryPrice = arr[0];
  let malinaPrice = strawberryPrice / 2;
  let orangePrice = malinaPrice * 0.6;
  let bananaPrice = malinaPrice * 0.2;

  let banana = arr[1] * bananaPrice;
  let orange = arr[2] * orangePrice;
  let malina = arr[3] * malinaPrice;
  let strawberry = arr[4] * strawberryPrice;

  let total = banana + orange + malina + strawberry;

  console.log(total.toFixed(2));
}
solve([48, 10, 3.3, 6.5, 1.7]);
