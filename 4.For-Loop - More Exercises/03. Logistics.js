function solve(input) {
    let index = 0;
    let broiTovari = Number(input[index]);
    index++
    let obshtaMasa = 0;
    let cena = 0;
    let mikrobus = 0;
    let kamion = 0;
    let vlak = 0;
    for (i = 0; i < broiTovari; i++) {
        let tonaj = Number(input[index]);
        index++
        obshtaMasa += tonaj;
        if (tonaj <= 3) {
            cena += tonaj * 200;
            mikrobus += tonaj
        } else if (tonaj >= 4 && tonaj <= 11) {
            cena += tonaj * 175;
            kamion += tonaj
        } else {
            cena += tonaj * 120;
            vlak += tonaj
        }
    }
    let srednaCenaNaTon = cena / obshtaMasa;
    console.log(srednaCenaNaTon.toFixed(2));
    let pM = mikrobus / obshtaMasa * 100;
    console.log(`${pM.toFixed(2)}%`);
    let pK = kamion / obshtaMasa * 100;
    console.log(`${pK.toFixed(2)}%`);
    let pV = vlak / obshtaMasa * 100;
    console.log(`${pV.toFixed(2)}%`);
}
