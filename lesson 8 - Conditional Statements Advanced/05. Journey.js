function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let mqsto = String;
    let razhod = 0;
    let campingOrHotel = String;
    if (budget <= 100) {
        mqsto = `Bulgaria`;
        switch (season) {
            case `summer`:
                razhod = budget * 0.30; break;
            case `winter`:
                razhod = budget * 0.70; break;
        }
    } else if (budget > 100 && budget <= 1000) {
        mqsto = `Balkans`;
        switch (season) {
            case `summer`:
                razhod = budget * 0.40; break;
            case `winter`:
                razhod = budget * 0.80; break;
        }
    } else {
        mqsto = `Europe`;
        razhod = budget * 0.90;
    }
    if (mqsto !== `Europe`){
    switch (season) {
        case `summer`:
            campingOrHotel = `Camp`; break;
        case `winter`:
            campingOrHotel = `Hotel`; break;
    }}else{
        campingOrHotel = `Hotel`;

    }
    let diff = Math.abs(budget - razhod);
    console.log(`Somewhere in ${mqsto}`);
    console.log(`${campingOrHotel} - ${razhod.toFixed(2)}`);
}
