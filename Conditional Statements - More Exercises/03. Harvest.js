function harvest(input){
    let kvadratiLoze = Number(input[0]);
    let kgLozeNaKvadrat = Number(input[1]);
    let nujnulitriVino = Number(input[2]);
    let broiRabotnici = Number(input[3]);
    let rekoltata = kvadratiLoze*0.40;
    let kgGrozde = rekoltata*kgLozeNaKvadrat;
    let proizvedeniLitri = kgGrozde/2.5;
    let diff = Math.abs(nujnulitriVino - proizvedeniLitri);
    let vinoZaRabotnici = diff/broiRabotnici;
if (proizvedeniLitri<nujnulitriVino){
    console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
} else {
    console.log(`Good harvest this year! Total wine: ${Math.ceil(proizvedeniLitri)} liters.`);
    console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(vinoZaRabotnici)} liters per person.`);
}
}
harvest([600,
    2,
    175,
    3
    ])