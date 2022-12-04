function solve(input) {
  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  for (let i = 1; i <= input[0]; i++) {
    if (input[i] % 2 == 0) {
      p1Counter++;
    }
    if (input[i] % 3 == 0) {
      p2Counter++;
    }
    if (input[i] % 4 == 0) {
      p3Counter++;
    }
  }
  let p1 = (p1Counter / input[0]) * 100;
  let p2 = (p2Counter / input[0]) * 100;
  let p3 = (p3Counter / input[0]) * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
}
solve([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
