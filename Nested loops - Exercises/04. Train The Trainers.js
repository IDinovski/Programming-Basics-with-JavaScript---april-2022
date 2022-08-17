function solve(input) {
    let index = 0;
    let currentIndex = input[index]
    let broiJuri = Number(input[index]);
    index++
    let counter = 0
    let finalnaOcenka = 0
    let final = 0;

    while (currentIndex != `Finish`) {

        let srednaOcenkaIzpit = 0
        let imeIzpit = input[index];
        index++
        for (let i = 0;i < broiJuri;i++) {
            let ocenka = Number(input[index]);
            index++
            srednaOcenkaIzpit += ocenka
            final += ocenka
            counter++


        }
        srednaOcenkaIzpit = srednaOcenkaIzpit / broiJuri;
        console.log(`${imeIzpit} - ${srednaOcenkaIzpit.toFixed(2)}.`);
        currentIndex = input[index]
        finalnaOcenka = final / counter
    }
    console.log(`Student's final assessment is ${finalnaOcenka.toFixed(2)}.`);
}
solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

