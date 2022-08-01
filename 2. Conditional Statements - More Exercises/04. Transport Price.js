function transportPrice(input){
    let broiKilometri = Number(input[0]);
    let dayNight = String(input[1]);
    let taksi = 0;
    let taksa = 0.70;
    if (dayNight === "day"){
        taksi = 0.79;
    } else {
        taksi = 0.90;
    }
    let avtobus = 0.09;
    let vlak = 0.06;
    let cenaTaksi = taksa + (taksi * broiKilometri);
    let cenaAvtobus = avtobus*broiKilometri;
    let cenaVlak = vlak * broiKilometri;
    if (broiKilometri<20){
        console.log(cenaTaksi.toFixed(2));
    } else if (broiKilometri>= 20 && broiKilometri<100){
        console.log(cenaAvtobus.toFixed(2));
    }else {
        console.log(cenaVlak.toFixed(2));
    }
}
transportPrice(["98",
    "night"
    ])