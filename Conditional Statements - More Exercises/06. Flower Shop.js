function flowerShop(input){
    let magnoliiCena = 3.25;
    let ziumbiulCena = 4;
    let roziCena = 3.50;
    let kaktusCena = 8;

    let magnoliiBroi = Number(input[0]);
    let ziumBroi = Number(input[1]);
    let roziBroi = Number(input[2]);
    let kaktusBroi = Number(input[3]);
    let cenaPodaryk = Number(input[4]);
    
    let oborot = magnoliiBroi*magnoliiCena+ziumBroi*ziumbiulCena+roziBroi*roziCena+kaktusBroi*kaktusCena;
    let netto = oborot*0.95;
    let diff = Math.abs(cenaPodaryk-netto);
    if (netto>=cenaPodaryk){
console.log(`She is left with ${Math.floor(diff)} leva.`);
} else {
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
}
}