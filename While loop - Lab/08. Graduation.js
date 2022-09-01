function solve(input) {
    let index = 0;
    let name = input[index];
    index++
    let counter = 0
    let i = 1;
    let sborOcenki = 0
    let broiIzpiti = 0
    let isExcluded = false;
    while (i <= 12) {
        let ocenka = Number(input[index])
        index++
        sborOcenki += ocenka
        broiIzpiti++
        if (ocenka < 4) {
            counter++
            if (counter > 1) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }
        i++
    }
    if (!isExcluded) {
        let srednaOceka = sborOcenki / broiIzpiti
        console.log(`${name} graduated. Average grade: ${srednaOceka.toFixed(2)}`);
    }
}
solve(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
