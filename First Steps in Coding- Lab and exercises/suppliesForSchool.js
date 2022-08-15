function suppliesForSchool(input){
    let paketHimikali = 5.8;
    let paketMarkeri = 7.2;
    let preparatCenaLityr = 1.2;
    let broiPaketHimikali = Number(input[0]);
    let broiPaketiMarkeri = Number(input[1]);
    let LitriPreparat = Number(input[2]);
    let procentNamalenie = Number(input[3]);
    let cenaHimikali = paketHimikali * broiPaketHimikali;
    let cenaMarkeri = paketMarkeri * broiPaketiMarkeri;
    let cenaPreparat = preparatCenaLityr * LitriPreparat;
    let cenaVsichko = cenaHimikali + cenaMarkeri + cenaPreparat;
    let otgovor = cenaVsichko -(procentNamalenie / 100 * cenaVsichko );

    console.log(otgovor)
}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]

)