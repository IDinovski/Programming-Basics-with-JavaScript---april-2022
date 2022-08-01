function vegetableMarket(input){
    let cenaKilogramZelenchuci = Number(input[0]);
    let cenaKilogramPlodove = Number(input[1]);
    let obshtBroiKilogramiZelenchuci = Number(input[2]);
    let obshtBroiKilogramiPlodove = Number(input[3]);
    
    let cenaZelenchuci = cenaKilogramZelenchuci * obshtBroiKilogramiZelenchuci;
    let cenaPlodove = cenaKilogramPlodove * obshtBroiKilogramiPlodove;
    let cenaEvro = (cenaPlodove + cenaZelenchuci) / 1.94;

    console.log(cenaEvro.toFixed(2));
}
vegetableMarket(["0.194","19.4","10","10"])