function solve(input) {
    let index = 0;
    let nujniPari = Number(input[index]);
    index++
    let nalichniPari = Number(input[index]);
    index++
    let broiDniHarchene = 0
    let broiDniSybirane = 0
    let broiDni = 0;

    while (nujniPari > nalichniPari) {
        broiDni++
        let vidDeistvie = input[index];
        index++
        let suma = Number(input[index]);
        index++
        switch (vidDeistvie) {
            case `spend`:
                if (suma > nalichniPari) {
                    nalichniPari = 0;
                } else {
                    nalichniPari -= suma
                }
                broiDniHarchene++;break;
            case `save`:
                broiDniSybirane++
                broiDniHarchene=0;
                nalichniPari += suma;break;
        }
        if (broiDniHarchene >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${broiDni}`);
            break;
        } 
    }
    if (nalichniPari >= nujniPari) {
        console.log(`You saved the money for ${broiDni} days.`);
    }
}
solve(["2000",
"1000",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"save",
"2000"])

