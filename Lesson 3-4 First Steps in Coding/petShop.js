function petShop(input){
    let cenaKuche = 2.50;
    let cenaKotka = 4;
    let broiHranaKuche = Number(input[0]);
    let broiHranaKotka = Number(input[1]);
    let krainaCena = cenaKuche * broiHranaKuche + cenaKotka * broiHranaKotka;
    console.log(`${krainaCena} lv.`)
}