function solve(input) {
    let n = Number(input[0]);
    let counter = 0;
    let sbor = 0

    let x1 = 0
    let x2 = 0
    let x3 = 0

    for (x1 = 0; x1 <= n; x1++) {
        for (x2 = 0; x2 <= n; x2++) {
            for (x3 = 0; x3 <= n; x3++) {
                sbor = x1 + x2 + x3;
                if (sbor === n) {
                    counter++
                }
            }
        }
    }
    console.log(counter);

}
solve([`5`])

