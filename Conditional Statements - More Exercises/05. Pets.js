function pets(input){
    let broiDni = Number(input[0]);
    let ostavenaHranaKg = Number(input[1]);
    let hranaKuche = Number(input[2])* broiDni;
    let hranaKotka = Number(input[3])* broiDni;
    let hranaKostenurka = (Number(input[4])/1000) * broiDni;
    let neobhodimaHrana = hranaKostenurka+hranaKotka+hranaKuche;
    let diff = Math.abs(ostavenaHranaKg-neobhodimaHrana);
    if(ostavenaHranaKg>=neobhodimaHrana){
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else{
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }

}
pets([2,
    10,
    1,
    1,
    1200
 ])