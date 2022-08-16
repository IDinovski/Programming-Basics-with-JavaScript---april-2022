function solve(input) {
    let index = 0;
    let period = Number(input[index]);
    index++
    let broiDoktori = 7
    let pregledani = 0
    let nepregledani = 0
    for (i = 1; i <= period; i++) {
        let broiPacienti = Number(input[index]);
        index++
        if (broiPacienti >= broiDoktori) {
            if (i % 3 === 0 && nepregledani > pregledani) {
                broiDoktori++
            }
            if (broiPacienti >= broiDoktori) {
                nepregledani += broiPacienti - broiDoktori
                pregledani += broiDoktori
            } else {
                pregledani += broiDoktori
                nepregledani += broiPacienti - broiDoktori
            }
        } else {
            pregledani += broiPacienti
        }
    }
    console.log(`Treated patients: ${pregledani}.`);
    console.log(`Untreated patients: ${nepregledani}.`);
}
solve([`0`,])