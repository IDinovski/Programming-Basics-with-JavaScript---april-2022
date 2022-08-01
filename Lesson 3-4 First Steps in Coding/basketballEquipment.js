function basketballEquipment(input){

    let godishnaTaksa = Number(input[0]);

    let kecove = godishnaTaksa - (godishnaTaksa * 0.4);
    let ekip = kecove - (kecove* 0.2);
    let topka = 0.25 * ekip;
    let aksesuari = 0.20 * topka;
    let obshtaCena = kecove + ekip + topka + aksesuari + godishnaTaksa;

    console.log(obshtaCena)

}
basketballEquipment([" 365 "])