function cinema(input){
    let tipProjekciq = input[0];
    let broiRedove = Number(input[1]);
    let broiKoloni = Number(input[2]);
    let cena = 0;
    switch(tipProjekciq){
        case `Premiere`:
            cena = 12; break;
            case `Normal`:
                cena = 7.50; break;
                case `Discount`:
                    cena = 5.00;break;
    }
    let izhod = cena * broiKoloni * broiRedove;
    console.log(`${izhod.toFixed(2)} leva`);
}