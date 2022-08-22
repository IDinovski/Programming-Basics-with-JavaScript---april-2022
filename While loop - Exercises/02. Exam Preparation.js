function solve(input) {
    let index = 0;
    let nezadovolitelniOcenki = Number(input[index]);
    index++
    let imeZadacha = input[index];
    index++
    let ocenka = Number(input[index]);
    index++
    let counter = 0;
    let srednaOceka = 0
    let broiIzpiti = 0;
    let bulflag = true;
    let poslednaZadcha = 0;
    while (imeZadacha !== `Enough`) {
        if (ocenka <= 4) {
            counter++
            if (counter >= nezadovolitelniOcenki) {
                bulflag = false
                console.log(`You need a break, ${nezadovolitelniOcenki} poor grades.`);
                break;
            }
        }
        if (imeZadacha!==`Enough`){
            poslednaZadcha=imeZadacha
        }
        srednaOceka += ocenka
        imeZadacha = input[index];
        index++
        ocenka = Number(input[index]);
        index++
        broiIzpiti++
    }
    if (bulflag === true) {
        srednaOceka = srednaOceka / broiIzpiti
        console.log(`Average score: ${srednaOceka.toFixed(2)}`);
        console.log(`Number of problems: ${broiIzpiti}`);
        console.log(`Last problem: ${poslednaZadcha}`);
    }
}
solve(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
