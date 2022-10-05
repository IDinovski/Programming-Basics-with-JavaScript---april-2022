function solve(input) {
  let a1 = Number(input[0]);
  let a2 = Number(input[1]);
  let n = Number(input[2]);
  let simvol1 = "";
  let simvol2 = 0;
  let simvol3 = 0;
  let simvol4 = 0;
  for (let i = a1; i <= a2 - 1; i++) {
    simvol1 = String.fromCharCode(i);
    for (let j = 1; j <= n - 1; j++) {
      simvol2 = j;
      for (let k = 1; k <= n / 2 - 1; k++) {
        simvol3 = k;
        simvol4 = i;
        if (i % 2 != 0 && (simvol2 + simvol3 + simvol4) % 2 != 0) {
          console.log(`${simvol1}-${simvol2}${simvol3}${simvol4}`);
        }
      }
    }
  }
}
solve([89, 91, 10]);
